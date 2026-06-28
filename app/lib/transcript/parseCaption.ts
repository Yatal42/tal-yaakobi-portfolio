import type { Segment } from "./types";

const CUE_RE = /(\d{1,2}:\d{2}:\d{2}[.,]\d{1,3})\s+-->\s+(\d{1,2}:\d{2}:\d{2}[.,]\d{1,3})/;

function parseCaptionTime(ts: string): number {
  const normalised = ts.replace(",", ".");
  const [h, m, s] = normalised.split(":");
  return parseInt(h, 10) * 3600 + parseInt(m, 10) * 60 + parseFloat(s);
}

export function parseCaptionText(rawContent: string): Segment[] | null {
  if (!rawContent) return null;
  let content = rawContent.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  content = content.replace(/^WEBVTT[\s\S]*?\n\n/, "");

  const blocks = content.split(/\n\s*\n/);
  const seen = new Set<string>();
  const segments: Segment[] = [];

  for (const block of blocks) {
    const match = CUE_RE.exec(block);
    if (!match) continue;
    let start: number;
    let end: number;
    try {
      start = parseCaptionTime(match[1]);
      end = parseCaptionTime(match[2]);
    } catch {
      continue;
    }
    if (!Number.isFinite(start) || !Number.isFinite(end)) continue;

    const lines: string[] = [];
    for (const rawLine of block.split("\n")) {
      const line = rawLine.trim();
      if (!line) continue;
      if (CUE_RE.test(line)) continue;
      if (/^\d+$/.test(line)) continue;
      const cleaned = line
        .replace(/<[^>]+>/g, "")
        .replace(/\{[^}]+\}/g, "")
        .trim();
      if (cleaned) lines.push(cleaned);
    }
    const text = lines.join(" ").trim();
    if (!text || seen.has(text)) continue;
    seen.add(text);
    segments.push({
      start,
      duration: Math.max(0, end - start),
      text,
    });
  }
  return segments.length > 0 ? segments : null;
}

export async function parseCaptionFile(file: File): Promise<Segment[] | null> {
  const buffer = await file.arrayBuffer();
  const decoders = [
    new TextDecoder("utf-8", { fatal: false }),
    new TextDecoder("windows-1255", { fatal: false }),
    new TextDecoder("iso-8859-8", { fatal: false }),
  ];
  for (const decoder of decoders) {
    try {
      const content = decoder.decode(buffer);
      const segments = parseCaptionText(content);
      if (segments && segments.length > 0) return segments;
    } catch {
      continue;
    }
  }
  return null;
}
