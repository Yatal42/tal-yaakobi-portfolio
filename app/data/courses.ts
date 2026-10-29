export const courseIds = ["probability", "automata", "computability"] as const;

export type CourseId = (typeof courseIds)[number];
