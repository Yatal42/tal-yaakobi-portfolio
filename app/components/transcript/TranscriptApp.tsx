import { useState } from "react";
import type { Segment } from "~/lib/transcript/types";
import YouTubeTab from "./YouTubeTab";
import MoodleTab from "./MoodleTab";
import UploadTab from "./UploadTab";
import TranscriptResult from "./TranscriptResult";
import "~/styles/transcript.css";

type TabKey = "youtube" | "moodle" | "upload";

interface StatusMessage {
  kind: "error" | "success" | "info";
  message: string;
}

const TABS: { key: TabKey; label: string }[] = [
  { key: "youtube", label: "YOUTUBE" },
  { key: "moodle", label: "אוניברסיטה" },
  { key: "upload", label: "העלאת קובץ" },
];

export default function TranscriptApp() {
  const [active, setActive] = useState<TabKey>("youtube");
  const [status, setStatus] = useState<StatusMessage | null>(null);
  const [result, setResult] = useState<{ title: string; segments: Segment[] } | null>(null);

  const handleResult = (title: string, segments: Segment[]) => {
    setResult({ title, segments });
  };

  const handleTabChange = (key: TabKey) => {
    setActive(key);
    setStatus(null);
  };

  return (
    <main className="transcript-page">
      <header className="transcript-hero" dir="rtl">
        <h1>תמלול נגיש לכל סטודנט/ית</h1>
        <p>
          יוטיוב <span className="pill">YouTube</span>
          ולמידע <span className="pill">Lemida / Moodle</span>
          וקבצי <span className="pill">VTT / SRT</span> — בגריד כרטיסים קריא עם חותמות זמן וכיווניות RTL.
        </p>
      </header>

      <div className="transcript-tabs" role="tablist" aria-label="Transcript sources">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active === tab.key}
            className={`transcript-tab ${active === tab.key ? "active" : ""}`}
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === "youtube" ? (
        <YouTubeTab onResult={handleResult} setStatus={setStatus} />
      ) : null}
      {active === "moodle" ? <MoodleTab /> : null}
      {active === "upload" ? (
        <UploadTab onResult={handleResult} setStatus={setStatus} />
      ) : null}

      {status ? (
        <div className={`transcript-status ${status.kind}`} dir="rtl" role={status.kind === "error" ? "alert" : "status"}>
          {status.message}
        </div>
      ) : null}

      {result ? (
        <TranscriptResult title={result.title} segments={result.segments} />
      ) : null}
    </main>
  );
}
