import type { CourseId } from "./courses";

export interface SampleLesson {
  duration: string;
  watched?: string;
}

export const sampleProgress = {
  courseId: "probability" as CourseId,
  enrolled: ["probability"] as CourseId[],
  totalLessons: 12,
  currentIndex: 3,
  lessons: [
    { duration: "24:10" },
    { duration: "31:45" },
    { duration: "28:02" },
    { duration: "35:20", watched: "12:30" },
    { duration: "33:15" },
  ] satisfies SampleLesson[],
  week: {
    watchMinutes: 108,
    sheets: 2,
    questions: 1,
  },
};

export const samplePercent = Math.round(
  (sampleProgress.currentIndex / sampleProgress.totalLessons) * 100
);
