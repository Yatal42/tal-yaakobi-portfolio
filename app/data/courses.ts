export const courseIds = ["probability", "automata", "computability"] as const;

export type CourseId = (typeof courseIds)[number];

export type GlyphPart = { text: string; accent?: boolean };

export interface Course {
  id: CourseId;
  published: boolean;
  glyph: GlyphPart[];
  lessons?: number;
  hours?: number;
  sheets?: number;
}

export const courses: Course[] = [
  {
    id: "probability",
    published: false,
    glyph: [{ text: "P(A" }, { text: "|", accent: true }, { text: "B)" }],
    lessons: 12,
    hours: 6,
    sheets: 8,
  },
  {
    id: "automata",
    published: false,
    glyph: [{ text: "δ(q,a)" }, { text: "→", accent: true }, { text: "q′" }],
  },
  {
    id: "computability",
    published: false,
    glyph: [{ text: "P " }, { text: "≟", accent: true }, { text: " NP" }],
  },
];

export type CourseState = "soon" | "locked" | "enrolled";
