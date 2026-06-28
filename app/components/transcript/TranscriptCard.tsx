import type { Chunk } from "~/lib/transcript/types";
import { formatTimestamp } from "~/lib/transcript/formatTimestamp";
import { isHebrew } from "~/lib/transcript/isHebrew";

interface Props {
  chunk: Chunk;
}

export default function TranscriptCard({ chunk }: Props) {
  const hebrew = isHebrew(chunk.text);
  const dir = hebrew ? "rtl" : "ltr";
  const lang = hebrew ? "he" : "en";
  const lines = chunk.lines.length > 0 ? chunk.lines : [chunk.text];

  return (
    <article className="transcript-card" dir={dir} lang={lang} tabIndex={0}>
      <span className="ts">
        {formatTimestamp(chunk.start)} – {formatTimestamp(chunk.end)}
      </span>
      {lines.map((line, idx) => (
        <p key={idx} className="line">
          {line}
        </p>
      ))}
    </article>
  );
}
