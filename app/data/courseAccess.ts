export type CourseLesson = {
  id: string;
  title: string;
  videoSrc?: string;
};

export type CourseFile = {
  id: string;
  name: string;
  kind: string;
};

const developerEmail = "taltal2345@gmail.com";
const developerCourseId = "probability";

export function courseIdsFor(email: string) {
  return [...(ownersFor(email))];
}

export function userOwnsCourse(email: string, courseId: string) {
  return ownersFor(email).has(courseId);
}

function ownersFor(email: string) {
  const wanted = email.trim().toLowerCase();
  const owned = new Set<string>();
  if (wanted === developerEmail) owned.add(developerCourseId);
  const raw = process.env.COURSE_OWNERS ?? "";
  for (const entry of raw.split(",")) {
    const [ownerEmail, courseId] = entry.split(":").map((part) => part.trim());
    if (!ownerEmail || !courseId) continue;
    if (ownerEmail.toLowerCase() === wanted) owned.add(courseId);
  }
  return owned;
}

const sampleLesson = "/courses/sample.mp4";

const lessons: Record<string, CourseLesson[]> = {
  probability: [
    { id: "sets", title: "Sets and counting", videoSrc: sampleLesson },
    { id: "sample-spaces", title: "Sample spaces and events", videoSrc: sampleLesson },
    { id: "rules", title: "Probability rules", videoSrc: sampleLesson },
    { id: "conditional", title: "Conditional probability", videoSrc: sampleLesson },
    { id: "bayes", title: "Independence and Bayes", videoSrc: sampleLesson },
    { id: "random-variables", title: "Random variables", videoSrc: sampleLesson },
    { id: "expectation", title: "Expectation and variance", videoSrc: sampleLesson },
    { id: "distributions", title: "Common distributions", videoSrc: sampleLesson },
  ],
};

const files: Record<string, CourseFile[]> = {
  probability: [
    { id: "syllabus", name: "Syllabus", kind: "PDF" },
    { id: "notes", name: "Lecture notes", kind: "PDF" },
    { id: "practice", name: "Practice problems", kind: "PDF" },
    { id: "formulas", name: "Formula sheet", kind: "PDF" },
  ],
};

export function lessonsFor(courseId: string) {
  return lessons[courseId] ?? [];
}

export function filesFor(courseId: string) {
  return files[courseId] ?? [];
}
