import type { Chunk } from "~/lib/transcript/types";
import TranscriptCard from "./TranscriptCard";

interface Props {
  chunks: Chunk[];
}

export default function TranscriptGrid({ chunks }: Props) {
  if (chunks.length === 0) return null;
  return (
    <div className="transcript-grid" role="list">
      {chunks.map((chunk, idx) => (
        <div role="listitem" key={`${chunk.start}-${idx}`}>
          <TranscriptCard chunk={chunk} />
        </div>
      ))}
    </div>
  );
}
