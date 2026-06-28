import type { Chunk, Segment } from "./types";
import { cleanCaptionText } from "./cleanCaption";

export const DEFAULT_CHUNK_SECONDS = 25;

export function chunkSegments(
  segments: Segment[],
  targetSeconds: number = DEFAULT_CHUNK_SECONDS,
): Chunk[] {
  const chunks: Chunk[] = [];
  let currentLines: string[] = [];
  let currentStart: number | null = null;
  let currentEnd: number | null = null;

  for (const segment of segments) {
    const cleaned = cleanCaptionText(segment.text);
    if (!cleaned) continue;
    if (currentStart === null) {
      currentStart = segment.start;
    }
    currentLines.push(cleaned);
    currentEnd = segment.start + (segment.duration ?? 0);
    if (currentEnd - currentStart >= targetSeconds) {
      chunks.push({
        start: currentStart,
        end: currentEnd,
        lines: currentLines,
        text: currentLines.join(" "),
      });
      currentLines = [];
      currentStart = null;
    }
  }

  if (currentLines.length > 0) {
    chunks.push({
      start: currentStart ?? 0,
      end: currentEnd ?? 0,
      lines: currentLines,
      text: currentLines.join(" "),
    });
  }

  return chunks;
}
