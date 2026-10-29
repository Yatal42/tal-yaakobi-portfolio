import ProgressBar from "./ui/ProgressBar";
import Window from "./ui/Window";
import type { Course, CourseState } from "../data/courses";
import { samplePercent, sampleProgress } from "../data/courseProgress";
import { scrollToSection } from "../lib/scroll";
import { useI18n } from "../lib/locale";
import { useViewer } from "../lib/viewer";

interface CourseCardProps {
  course: Course;
  state: CourseState;
}

export default function CourseCard({ course, state }: CourseCardProps) {
  const { t } = useI18n();
  const { openLogin } = useViewer();
  const title = t.courses.titles[course.id];
  const meta = [
    course.lessons ? t.courses.meta.lessons(course.lessons) : null,
    course.hours ? t.courses.meta.hours(course.hours) : null,
    course.sheets ? t.courses.meta.sheets(course.sheets) : null,
  ].filter(Boolean);

  return (
    <li className={`course-card is-${state}`}>
      <Window title={`${course.id}.course`} className="fill" bodyClassName="win-body-flush">
        <div className="course-glyph" aria-hidden="true" dir="ltr">
          {course.glyph.map((part, index) => (
            <span key={index} className={part.accent ? "course-glyph-accent" : undefined}>
              {part.text}
            </span>
          ))}
        </div>

        <div className="course-body">
          <span className={`badge badge-${state}`}>
            {state === "locked" ? <span aria-hidden="true">🔒 </span> : null}
            {t.courses.status[state]}
          </span>
          <h3 className="course-title">{title}</h3>

          {state === "soon" ? (
            <ul className="chip-list chip-list-sm">
              {t.courses.topics[course.id].map((topic) => (
                <li key={topic} className="chip">{topic}</li>
              ))}
            </ul>
          ) : (
            <ul className="course-meta">
              {meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {state === "enrolled" ? (
            <>
              <ProgressBar
                value={samplePercent}
                label={t.personal.progressLabel}
                caption={t.personal.lessonOf(sampleProgress.currentIndex + 1, sampleProgress.totalLessons)}
              />
              <button type="button" className="btn btn-primary btn-sm" onClick={() => scrollToSection("my-courses")}>
                {t.courses.continue}
              </button>
            </>
          ) : null}

          {state === "locked" ? (
            <button type="button" className="btn btn-secondary btn-sm" onClick={openLogin}>
              {t.courses.signIn}
            </button>
          ) : null}
        </div>
      </Window>
    </li>
  );
}
