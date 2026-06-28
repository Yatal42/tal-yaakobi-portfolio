export interface Segment {
  start: number;
  duration: number;
  text: string;
}

export interface Chunk {
  start: number;
  end: number;
  lines: string[];
  text: string;
}

export interface TranscriptResult {
  title: string;
  segments: Segment[];
  speaker: string | null;
}
