export function sanitizeFilename(name: string | null | undefined): string {
  if (!name) return "transcript";
  let cleaned = name.replace(/[\\/*?:"<>|]/g, "");
  cleaned = cleaned.replace(/[\u0000-\u001f]/g, "");
  cleaned = cleaned.trim().replace(/^[. ]+|[. ]+$/g, "");
  return cleaned.slice(0, 150) || "transcript";
}

export function chunksToText(
  chunks: { start: number; end: number; lines: string[]; text: string }[],
  title: string,
  formatTimestamp: (s: number) => string,
): string {
  const out: string[] = [`--- ${title} ---`, ""];
  for (const c of chunks) {
    out.push(`[${formatTimestamp(c.start)} – ${formatTimestamp(c.end)}]`);
    const lines = c.lines.length > 0 ? c.lines : [c.text];
    for (const line of lines) {
      out.push(line);
    }
    out.push("");
  }
  return out.join("\n");
}
