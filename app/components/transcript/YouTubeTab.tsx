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
      setStatus({ kind: "error", message: "כתובת לא חוקית. הדביקי לינק מלא של YouTube או מזהה סרטון בן 11 תווים." });
      return;
    }
    setStatus({ kind: "info", message: "מוריד תמלול..." });
    setLoading(true);
    try {
      const res = await fetch(`/api/youtube-transcript?v=${encodeURIComponent(id)}`);
      const data = await res.json();
      if (!res.ok) {
        const messages: Record<string, string> = {
          transcripts_disabled: "כתוביות חסומות בסרטון הזה.",
          video_unavailable: "הסרטון לא זמין או פרטי.",
          no_transcript_found: "לא נמצאו כתוביות זמינות.",
          invalid_video_id: "מזהה הסרטון לא תקין.",
          missing_parameter: "חסר מזהה סרטון.",
        };
        setStatus({
          kind: "error",
          message: messages[data?.error] || data?.message || "נכשל באחזור התמלול.",
        });
        return;
      }
      const segments: Segment[] = data.segments ?? [];
      if (segments.length === 0) {
        setStatus({ kind: "error", message: "לא הוחזרו קטעי תמלול." });
        return;
      }
      onResult(`YouTube · ${id}`, segments);
      setStatus({ kind: "success", message: `הורד תמלול עם ${segments.length} קטעים.` });
    } catch (err) {
      setStatus({
        kind: "error",
        message: `שגיאת רשת: ${(err as Error).message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="transcript-panel" dir="rtl">
      <h3 className="transcript-panel-title">YouTube</h3>
      <p>הדביקי כאן קישור ל-YouTube או למזהה סרטון בן 11 תווים. אנו ננסה כתוביות בעברית ובאנגלית.</p>
      <label className="transcript-label" htmlFor="yt-url">URL של הסרטון</label>
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
        {loading ? "מוריד..." : "הורד תמלול"}
      </button>
    </form>
  );
}
