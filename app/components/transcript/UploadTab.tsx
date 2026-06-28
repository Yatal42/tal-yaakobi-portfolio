import { useState } from "react";
import type { Segment } from "~/lib/transcript/types";
import { parseCaptionFile } from "~/lib/transcript/parseCaption";

interface Props {
  onResult: (title: string, segments: Segment[]) => void;
  setStatus: (status: { kind: "error" | "success" | "info"; message: string } | null) => void;
}

export default function UploadTab({ onResult, setStatus }: Props) {
  const [customTitle, setCustomTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const handleFile = async (file: File | null) => {
    if (!file) return;
    setFileName(file.name);
    setStatus({ kind: "info", message: `Analyzing ${file.name}...` });
    setLoading(true);
    try {
      const segments: Segment[] | null = await parseCaptionFile(file);
      if (!segments || segments.length === 0) {
        setStatus({
          kind: "error",
          message: "Unable to parse the file. Please make sure it is a valid VTT/SRT file.",
        });
        return;
      }
      const baseName = file.name.replace(/\.(vtt|srt)$/i, "");
      const title = customTitle.trim() || baseName || "Uploaded transcript";
      onResult(title, segments);
      setStatus({
        kind: "success",
            message: `File uploaded successfully - ${segments.length} segments.`,
      });
    } catch (err) {
      setStatus({
        kind: "error",
        message: `Error reading the file: ${(err as Error).message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transcript-panel" dir="ltr">
      <h3 className="transcript-panel-title">Upload Caption File(VTT/SRT)</h3>
      <p>
        Already have a <b>.vtt</b> or <b>.srt</b> file? Upload it here and get a readable transcript with timestamps.
        This is also suitable for students who download captions from the bookmarklet above, or from Zoom/Teams.
      </p>

      <label className="transcript-label" htmlFor="custom-title">Custom Title (Optional)</label>
      <input
        id="custom-title"
        className="transcript-input"
        type="text"
        placeholder="For example: Lecture 3 - Algorithms"
        value={customTitle}
        onChange={(e) => setCustomTitle(e.target.value)}
      />

      <label className="transcript-label" htmlFor="caption-file">Caption File</label>
      <div className="transcript-file-row">
        <label className="transcript-file-picker" htmlFor="caption-file">
          {loading ? "Uploading..." : "Choose file"}
        </label>
        <input
          id="caption-file"
          className="transcript-file-input"
          type="file"
          accept=".vtt,.srt,text/vtt,application/x-subrip"
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          disabled={loading}
        />
        {fileName ? (
          <span className="transcript-bookmarklet-hint">
            Selected file: <b>{fileName}</b>
          </span>
        ) : null}
      </div>
    </div>
  );
}
