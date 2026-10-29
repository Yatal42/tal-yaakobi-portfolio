import SectionHeader from "./ui/SectionHeader";
import CourseCard from "./CourseCard";
import Window from "./ui/Window";
import { courses } from "../data/courses";
import { useI18n } from "../lib/locale";
import { useViewer } from "../lib/viewer";

const CourseCatalog = () => {
  const { t } = useI18n();
  const { courseState, showSignIn, openLogin } = useViewer();

  return (
    <section id="courses" className="section" aria-labelledby="courses-title">
      <div className="container">
        <SectionHeader
          eyebrow={t.courses.eyebrow}
          title={t.courses.title}
          intro={t.courses.intro}
          id="courses-title"
        />

        <ul className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} state={courseState(course)} />
          ))}
        </ul>

        {showSignIn ? (
          <Window title="notice.txt" className="signin-window" bodyClassName="signin-banner">
            <p>
              <strong>{t.courses.bannerTitle}</strong> {t.courses.bannerText}
            </p>
            <button type="button" className="btn btn-primary btn-sm" onClick={openLogin}>
              {t.courses.signIn}
            </button>
          </Window>
        ) : null}
      </div>
    </section>
  );
};

export default CourseCatalog;
