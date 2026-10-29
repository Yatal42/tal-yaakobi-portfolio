import SectionHeader from "./ui/SectionHeader";
import Window from "./ui/Window";
import ProgressBar from "./ui/ProgressBar";
import { samplePercent, sampleProgress } from "../data/courseProgress";
import { scrollToSection } from "../lib/scroll";
import { useI18n } from "../lib/locale";
import { useViewer } from "../lib/viewer";

export default function PersonalArea() {
  const { t } = useI18n();
  const { signedIn } = useViewer();

  if (!signedIn) return null;

  const { courseId, currentIndex, totalLessons, lessons, week } = sampleProgress;
  const lessonTitles = t.personal.lessons[courseId as keyof typeof t.personal.lessons] ?? [];
  const currentTitle = lessonTitles[currentIndex];
  const courseTitle = t.courses.titles[courseId];

  return (
    <section id="my-courses" className="section" aria-labelledby="my-courses-title">
      <div className="container">
        <SectionHeader
          eyebrow={t.personal.eyebrow}
          title={t.personal.title}
          id="my-courses-title"
          aside={<span className="badge badge-muted">{t.personal.sample}</span>}
        />

        <div className="dashboard">
          <Window title={`${courseId}.exe`} className="dashboard-main">
            <p className="dashboard-course">
              {courseTitle} · {t.personal.lessonOf(currentIndex + 1, totalLessons)}
            </p>
            <h3 className="dashboard-lesson">{currentTitle}</h3>
            <button type="button" className="btn btn-primary">
              <span aria-hidden="true">▶</span> {t.personal.continue}
            </button>

            <ProgressBar
              value={samplePercent}
              label={t.personal.progressLabel}
              caption={t.personal.completed(currentIndex)}
            />

            <ol className="lesson-list" aria-label={t.personal.lessonsLabel}>
              {lessons.map((lesson, index) => {
                const done = index < currentIndex;
                const current = index === currentIndex;
                return (
                  <li
                    key={lessonTitles[index] ?? index}
                    className={`lesson ${done ? "is-done" : ""} ${current ? "is-current" : ""}`.trim()}
                    aria-current={current ? "step" : undefined}
                  >
                    <span className="lesson-marker" aria-hidden="true">
                      {done ? "✓" : String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="lesson-title">
                      {lessonTitles[index]}
                      {done ? <span className="sr-only"> · {t.personal.lessonDone}</span> : null}
                      {current ? <span className="sr-only"> · {t.personal.lessonCurrent}</span> : null}
                    </span>
                    <span className="lesson-time" dir="ltr">
                      {lesson.watched ? `${lesson.watched} / ${lesson.duration}` : lesson.duration}
                    </span>
                  </li>
                );
              })}
            </ol>
          </Window>

          <div className="dashboard-side">
            <Window title="week.log">
              <h3 className="card-title">{t.personal.weekTitle}</h3>
              <dl className="stat-list">
                <div className="stat">
                  <dt>{t.personal.stats.watchTime}</dt>
                  <dd>{t.personal.hours(week.watchMinutes)}</dd>
                </div>
                <div className="stat">
                  <dt>{t.personal.stats.sheets}</dt>
                  <dd>{week.sheets}</dd>
                </div>
                <div className="stat">
                  <dt>{t.personal.stats.questions}</dt>
                  <dd>{week.questions}</dd>
                </div>
              </dl>
            </Window>

            <Window title="help.txt">
              <h3 className="card-title">{t.personal.stuckTitle}</h3>
              <p className="card-text">{t.personal.stuckText}</p>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => scrollToSection("contact")}>
                {t.personal.stuckCta}
              </button>
            </Window>

            <button type="button" className="text-link dashboard-all" onClick={() => scrollToSection("courses")}>
              {t.personal.allCourses} <span className="arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
