const SPEAKER_MARKER_RE = /(?:>>+|&gt;&gt;+|\[[^\]]{0,80}\]|\([^)]{0,80}\))/g;
const WHITESPACE_RE = /[ \t]+/g;

export function cleanCaptionText(text: string | null | undefined): string {
  if (!text) return "";
  const out = text
    .replace(SPEAKER_MARKER_RE, " ")
    .split(/\r?\n/)
    .map((line) => line.replace(WHITESPACE_RE, " ").trim())
    .filter(Boolean)
    .join("\n");
  return out;
}
