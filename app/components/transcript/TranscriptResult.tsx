import { useMemo } from "react";
import type { Segment } from "~/lib/transcript/types";
import { chunkSegments } from "~/lib/transcript/chunkSegments";
import {
  detectDominantSpeaker,
  stripSpeakerFromSegments,
} from "~/lib/transcript/speakerDetection";
import { formatTimestamp } from "~/lib/transcript/formatTimestamp";
import { chunksToText, sanitizeFilename } from "~/lib/transcript/sanitize";
import { isHebrew } from "~/lib/transcript/isHebrew";
import TranscriptGrid from "./TranscriptGrid";

interface Props {
  title: string;
  segments: Segment[];
}

export default function TranscriptResult({ title, segments }: Props) {
  const { chunks, speaker, downloadUrl, hebrew } = useMemo(() => {
    const detected = detectDominantSpeaker(segments);
    const cleaned = detected ? stripSpeakerFromSegments(segments, detected) : segments;
    const built = chunkSegments(cleaned);
    const text = chunksToText(built, title, formatTimestamp);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    return {
      chunks: built,
      speaker: detected,
      downloadUrl: url,
      hebrew: isHebrew(title) || (built[0] ? isHebrew(built[0].text) : false),
    };
  }, [segments, title]);

  const dir = hebrew ? "rtl" : "ltr";

  return (
    <section className="transcript-result">
      <header className="transcript-result-header" dir={dir}>
        <h2 className="transcript-result-title">{title}</h2>
        {speaker ? (
          <div className="transcript-speaker">
            {hebrew ? "דובר זוהה:" : "Detected speaker:"} {speaker}
          </div>
        ) : null}
        <a
          className="transcript-download"
          href={downloadUrl}
          download={`${sanitizeFilename(title)}.txt`}
        >
          ⬇ Download .txt
        </a>
      </header>
      <TranscriptGrid chunks={chunks} />
    </section>
  );
}
