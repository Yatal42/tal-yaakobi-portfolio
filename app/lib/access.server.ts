import { courseIds, type CourseId } from "../data/courses";

const allowlist: Record<string, readonly CourseId[]> = {
  "taltal2345@gmail.com": courseIds,
};

const admins = new Set(["taltal2345@gmail.com"]);

export function isAdmin(email: string | null | undefined) {
  return Boolean(email && admins.has(email.trim().toLowerCase()));
}

function isCourseId(value: string): value is CourseId {
  return (courseIds as readonly string[]).includes(value);
}

function fromEnv(email: string): CourseId[] {
  const granted: CourseId[] = [];
  for (const entry of (process.env.COURSE_ACCESS ?? "").split(",")) {
    const [ownerEmail, courseId] = entry.split(":").map((part) => part.trim());
    if (!ownerEmail || !courseId || ownerEmail.toLowerCase() !== email) continue;
    if (courseId === "*") granted.push(...courseIds);
    else if (isCourseId(courseId)) granted.push(courseId);
  }
  return granted;
}

export function enrolledCourses(email: string | null | undefined): CourseId[] {
  if (!email) return [];
  const wanted = email.trim().toLowerCase();
  const granted = new Set<CourseId>([...(allowlist[wanted] ?? []), ...fromEnv(wanted)]);
  return courseIds.filter((id) => granted.has(id));
}

export function hasCourseAccess(email: string, courseId: CourseId) {
  return enrolledCourses(email).includes(courseId);
}
