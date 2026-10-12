import { useState } from "react";
import { Link } from "react-router";
import type { CourseFile, CourseLesson } from "~/data/courseAccess";

type Props = {
  title: string;
  studentName: string;
  lessons: CourseLesson[];
  files: CourseFile[];
};

export default function CourseClassroom({ title, studentName, lessons, files }: Props) {
  const [activeId, setActiveId] = useState(lessons[0]?.id ?? "");
  const active = lessons.find((lesson) => lesson.id === activeId) ?? lessons[0];
  const chapter = active ? lessons.findIndex((lesson) => lesson.id === active.id) + 1 : 0;

  return (
    <div className="retro-container">
      <section className="classroom">
        <div className="classroom-heading">
          <div>
            <p className="pixel-subheading classroom-kicker">YOUR COURSE</p>
            <h1 className="classroom-title">{title}</h1>
            <p className="retro-text">Signed in as {studentName}</p>
          </div>
          <form method="post" action="/logout">
            <button className="classroom-signout" type="submit">
              Sign out
            </button>
          </form>
        </div>

        <div className="classroom-player" role="region" aria-label="Lesson player">
          {active?.videoSrc ? (
            <video
              key={active.id}
              className="classroom-video"
              controls
              playsInline
              preload="metadata"
              src={active.videoSrc}
            />
          ) : (
            <div className="classroom-video classroom-video-empty">
              <p className="classroom-player-note">
                {active
                  ? "The lesson recording will play here."
                  : "Lessons for this course are not uploaded yet."}
              </p>
            </div>
          )}
          <div className="classroom-player-caption">
            <p className="classroom-player-label">{active ? `Chapter ${chapter}` : "Player"}</p>
            <h2 className="classroom-player-title">{active?.title ?? "No lessons yet"}</h2>
          </div>
        </div>

        <div className="classroom-layout">
          <div className="classroom-lessons">
            <h2 className="classroom-side-title">Lessons</h2>
            <ol>
              {lessons.map((lesson, index) => {
                const selected = lesson.id === active?.id;
                return (
                  <li key={lesson.id}>
                    <button
                      type="button"
                      className={selected ? "is-active" : ""}
                      aria-current={selected ? "true" : undefined}
                      onClick={() => setActiveId(lesson.id)}
                    >
                      <span>{index + 1}.</span>
                      {lesson.title}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="classroom-files">
            <h2 className="classroom-side-title">Files</h2>
            <ul className="classroom-file-list">
              {files.map((file) => (
                <li key={file.id}>
                  <span>{file.name}</span>
                  <span className="classroom-file-kind">{file.kind}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link className="services-inline-link" to="/courses">
          Back to the catalog
        </Link>
      </section>
    </div>
  );
}
