import { useState } from "react";
import type { Segment } from "~/lib/transcript/types";

interface Props {
  onResult: (title: string, segments: Segment[]) => void;
  setStatus: (status: { kind: "error" | "success" | "info"; message: string } | null) => void;
}

function extractVideoId(input: string): string | null {
  const value = input.trim();
  if (!value) return null;
  if (/^[A-Za-z0-9_-]{11}$/.test(value)) return value;
  try {
    const url = new URL(value);
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

export default function YouTubeTab({ onResult, setStatus }: Props) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = extractVideoId(url);
    if (!id) {
      setStatus({ kind: "error", message: "Invalid URL. Paste the full YouTube link or 11-character video ID." });
      return;
    }
    setStatus({ kind: "info", message: "Downloading transcript..." });
    setLoading(true);
    try {
      const res = await fetch(`/transcript-api/youtube-transcript?v=${encodeURIComponent(id)}`);
      const data = await res.json();
      if (!res.ok) {
        const messages: Record<string, string> = {
          transcripts_disabled: "Captions are disabled for this video.",
          video_unavailable: "The video is unavailable or private.",
          no_transcript_found: "No captions available.",
          invalid_video_id: "Invalid video ID.",
          missing_parameter: "Missing video ID.",
        };
        setStatus({
          kind: "error",
          message: messages[data?.error] || data?.message || "Failed to download transcript.",
        });
        return;
      }
      const segments: Segment[] = data.segments ?? [];
      if (segments.length === 0) {
        setStatus({ kind: "error", message: "No transcript segments returned." });
        return;
      }
      onResult(`YouTube · ${id}`, segments);
      setStatus({ kind: "success", message: `Downloaded transcript with ${segments.length} segments.` });
    } catch (err) {
      setStatus({
        kind: "error",
        message: `Network error: ${(err as Error).message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="transcript-panel" dir="ltr">
      <h3 className="transcript-panel-title">YouTube</h3>
      <p>Paste the full YouTube link or 11-character video ID here. We will try to extract captions in Hebrew and English.</p>
      <label className="transcript-label" htmlFor="yt-url">Video URL</label>
      <input
        id="yt-url"
        className="transcript-input"
        type="text"
        dir="ltr"
        placeholder="https://www.youtube.com/watch?v=..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        autoComplete="off"
      />
      <button type="submit" className="transcript-submit" disabled={loading}>
        {loading ? "Downloading..." : "Download Transcript"}
      </button>
    </form>
  );
}
