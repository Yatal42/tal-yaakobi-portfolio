import type { LoaderFunctionArgs } from "react-router";
import { YoutubeTranscriptError, fetchTranscript } from "youtube-transcript";

const languagePriority = ["he", "iw", "en", "en-US", "en-GB"] as const;

function extractVideoId(value: string) {
  const input = value.trim();
  if (!input) return null;
  if (/^[A-Za-z0-9_-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
    }
    const v = url.searchParams.get("v");
    if (v && /^[A-Za-z0-9_-]{11}$/.test(v)) return v;
    const m = url.pathname.match(/\/(?:embed|shorts|live)\/([A-Za-z0-9_-]{11})/);
    if (m) return m[1];
  } catch {
  }
  return null;
}

function normalizeTiming(offset: number, duration: number) {
  const looksLikeMs = offset > 1000 || duration > 100;
  if (looksLikeMs) {
    return {
      start: offset / 1000,
      duration: duration / 1000,
    };
  }
  return {
    start: offset,
    duration,
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url);
    const rawInput = url.searchParams.get("url") ?? url.searchParams.get("v") ?? url.searchParams.get("id") ?? "";
    if (!rawInput) {
      return Response.json(
        { error: "missing_parameter", message: "Provide url, v, or id parameter." },
        { status: 400 }
      );
    }

    const videoId = extractVideoId(rawInput);
    if (!videoId) {
      return Response.json(
        { error: "invalid_video_id", message: "Could not extract a YouTube video id." },
        { status: 400 }
      );
    }

    const mapSegments = (transcript: Awaited<ReturnType<typeof fetchTranscript>>) =>
      transcript.map((item) => {
        const timing = normalizeTiming(item.offset, item.duration);
        return {
          start: timing.start,
          duration: timing.duration,
          text: item.text,
        };
      });

    const requestedLang = (url.searchParams.get("lang") ?? "").trim();
    const allowedLangs = new Set<string>(languagePriority);
    const effectiveLanguages = requestedLang && allowedLangs.has(requestedLang)
      ? [requestedLang, ...languagePriority.filter((lang) => lang !== requestedLang)]
      : [...languagePriority];

    let lastError = "";
    let lastErrorCode: "no_transcript_found" | "transcripts_disabled" | "video_unavailable" | "too_many_requests" =
      "no_transcript_found";
    const setErrorState = (message: string) => {
      lastError = message;
      if (/transcript is disabled/i.test(message)) {
        lastErrorCode = "transcripts_disabled";
      } else if (/video is no longer available|video unavailable/i.test(message)) {
        lastErrorCode = "video_unavailable";
      } else if (/too many requests|captcha/i.test(message)) {
        lastErrorCode = "too_many_requests";
      } else {
        lastErrorCode = "no_transcript_found";
      }
    };

    for (const lang of effectiveLanguages) {
      try {
        const transcript = await fetchTranscript(videoId, { lang });
        const segments = mapSegments(transcript);
        if (segments.length > 0) {
          return Response.json({
            video_id: videoId,
            segments,
            count: segments.length,
          });
        }
      } catch (error) {
        setErrorState((error as Error).message || "unknown");
      }
    }

    try {
      const transcript = await fetchTranscript(videoId);
      const segments = mapSegments(transcript);
      if (segments.length > 0) {
        return Response.json({
          video_id: videoId,
          segments,
          count: segments.length,
        });
      }
    } catch (error) {
      setErrorState((error as Error).message || "unknown");
    }

    const status = lastErrorCode === "too_many_requests" ? 429 : 404;
    return Response.json(
      { error: lastErrorCode, video_id: videoId, message: lastError || "No transcript found." },
      { status }
    );
  } catch (error) {
    const message = (error as Error).message || "server_error";
    const normalizedError =
      error instanceof YoutubeTranscriptError && /video is no longer available/i.test(message)
        ? "video_unavailable"
        : "server_error";
    return Response.json({ error: normalizedError, message }, { status: 500 });
  }
}
