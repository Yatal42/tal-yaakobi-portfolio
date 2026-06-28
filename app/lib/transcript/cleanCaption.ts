const SPEAKER_MARKER_RE = /(?:>>+|&gt;&gt;+|\[[^\]]{0,80}\]|\([^)]{0,80}\))/g;
const WHITESPACE_RE = /[ \t]+/g;

export function cleanCaptionText(text: string | null | undefined): string {
  if (!text) return "";
  let out = text.replace(/\n/g, " ");
  out = out.replace(SPEAKER_MARKER_RE, " ");
  out = out.replace(WHITESPACE_RE, " ").trim();
  return out;
}
