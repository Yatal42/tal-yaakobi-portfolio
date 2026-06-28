import type { Segment } from "./types";

const SPEAKER_PREFIX_RE = /^\s*[\w\u0590-\u05FF][\w\u0590-\u05FF .'\-]{1,40}:\s+/;

export function detectDominantSpeaker(
  segments: Segment[],
  threshold = 0.7,
): string | null {
  if (!segments || segments.length === 0) return null;
  const tally = new Map<string, number>();
  let total = 0;
  for (const segment of segments) {
    const match = SPEAKER_PREFIX_RE.exec(segment.text ?? "");
    if (!match) continue;
    const name = match[0].replace(/[: ]+$/, "").trim();
    if (!name) continue;
    tally.set(name, (tally.get(name) ?? 0) + 1);
    total += 1;
  }
  if (tally.size === 0 || total < 3) return null;
  let topName: string | null = null;
  let topCount = 0;
  for (const [name, count] of tally) {
    if (count > topCount) {
      topCount = count;
      topName = name;
    }
  }
  if (!topName) return null;
  return topCount / segments.length >= threshold ? topName : null;
}

export function stripSpeakerFromSegments(
  segments: Segment[],
  speaker: string | null,
): Segment[] {
  if (!speaker) return segments;
  const escaped = speaker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`^\\s*${escaped}\\s*:\\s+`);
  return segments.map((seg) => ({
    ...seg,
    text: (seg.text ?? "").replace(pattern, ""),
  }));
}
