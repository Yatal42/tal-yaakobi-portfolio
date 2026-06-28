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
    setStatus({ kind: "info", message: `מנתח את הקובץ ${file.name}...` });
    setLoading(true);
    try {
      const segments: Segment[] | null = await parseCaptionFile(file);
      if (!segments || segments.length === 0) {
        setStatus({
          kind: "error",
          message: "לא ניתן לפענח את הקובץ. ודאי שזה קובץ VTT/SRT תקין.",
        });
        return;
      }
      const baseName = file.name.replace(/\.(vtt|srt)$/i, "");
      const title = customTitle.trim() || baseName || "Uploaded transcript";
      onResult(title, segments);
      setStatus({
        kind: "success",
        message: `הקובץ נטען בהצלחה — ${segments.length} קטעים.`,
      });
    } catch (err) {
      setStatus({
        kind: "error",
        message: `שגיאה בקריאת הקובץ: ${(err as Error).message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transcript-panel" dir="rtl">
      <h3 className="transcript-panel-title">העלאת קובץ כתוביות</h3>
      <p>
        כבר יש לך קובץ <b>.vtt</b> או <b>.srt</b>? העלי אותו כאן וקבלי גריד נגיש עם חותמות זמן.
        זה מתאים גם לסטודנטים שמורידים כתוביות מהסימניה למעלה, או מ-Zoom/Teams.
      </p>

      <label className="transcript-label" htmlFor="custom-title">כותרת מותאמת (אופציונלי)</label>
      <input
        id="custom-title"
        className="transcript-input"
        type="text"
        placeholder="למשל: הרצאה 3 — אלגוריתמים"
        value={customTitle}
        onChange={(e) => setCustomTitle(e.target.value)}
      />

      <label className="transcript-label" htmlFor="caption-file">קובץ הכתוביות</label>
      <div className="transcript-file-row">
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
            קובץ נבחר: <b>{fileName}</b>
          </span>
        ) : null}
      </div>
    </div>
  );
}
