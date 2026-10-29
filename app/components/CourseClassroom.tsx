import { useState } from "react";
import { Link } from "react-router";
import SectionHeader from "./ui/SectionHeader";
import Window from "./ui/Window";
import type { CourseId } from "../data/courses";
import { localizePath, useI18n } from "../lib/locale";

interface CourseClassroomProps {
  courseId: CourseId;
  access: boolean;
  email: string;
}

export default function CourseClassroom({ courseId, access, email }: CourseClassroomProps) {
  const { locale, t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const title = t.courses.titles[courseId];
  const lessons: string[] = (t.personal.lessons as Partial<Record<CourseId, string[]>>)[courseId] ?? [];
  const active = lessons[activeIndex];
  const backLink = (
    <Link to={localizePath("/#courses", locale)} className="text-link">
      <span className="arrow" aria-hidden="true">←</span> {t.classroom.back}
    </Link>
  );

  return (
    <section className="section classroom" aria-labelledby="classroom-title">
      <div className="container">
        <SectionHeader eyebrow={t.classroom.eyebrow} title={title} id="classroom-title" />

        {access ? (
          <div className="classroom-layout">
            <Window title="player.exe" className="classroom-player">
              <div className="classroom-screen">
                <p>{active ? t.classroom.playerEmpty : t.classroom.noLessons}</p>
              </div>
              {active ? (
                <div className="classroom-caption">
                  <p className="dashboard-course">{t.classroom.lessonLabel(activeIndex + 1)}</p>
                  <h2 className="dashboard-lesson">{active}</h2>
                </div>
              ) : null}
            </Window>

            <Window title="lessons.txt" className="classroom-lessons">
              <h2 className="card-title">{t.classroom.lessonsTitle}</h2>
              {lessons.length > 0 ? (
                <ol className="lesson-list">
                  {lessons.map((lesson, index) => {
                    const selected = index === activeIndex;
                    return (
                      <li key={lesson} className={`lesson ${selected ? "is-current" : ""}`.trim()}>
                        <button
                          type="button"
                          className="classroom-lesson"
                          aria-current={selected ? "true" : undefined}
                          onClick={() => setActiveIndex(index)}
                        >
                          <span className="lesson-marker" aria-hidden="true">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="lesson-title">{lesson}</span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              ) : (
                <p className="card-text">{t.classroom.noLessons}</p>
              )}
            </Window>
          </div>
        ) : (
          <Window title="access.txt" className="signin-window" bodyClassName="signin-banner">
            <p>
              <strong>{t.auth.noAccessTitle}</strong> {t.auth.noAccessText(email)}
            </p>
          </Window>
        )}

        <p className="classroom-back">{backLink}</p>
      </div>
    </section>
  );
}
