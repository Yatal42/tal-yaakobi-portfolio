const HEBREW_RE = /[\u0590-\u05FF]/g;

export function isHebrew(text: string | null | undefined, threshold = 3): boolean {
  if (!text) return false;
  const matches = text.match(HEBREW_RE);
  return matches !== null && matches.length >= threshold;
}
