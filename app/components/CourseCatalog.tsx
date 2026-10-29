import { courseIds } from "../data/courses";
import { useI18n } from "../lib/locale";

const CourseCatalog = () => {
  const { t } = useI18n();

  return (
    <section id="courses" className="retro-section services-section motion-section motion-delay-1">
      <h2 className="retro-section-title">{t.courses.heading}</h2>

      <div className="catalog-frame">
        <ol className="services-list catalog-list">
          {courseIds.map((id) => (
            <li key={id} className="services-card catalog-card">
              <h3 className="services-card-title">{t.courses.titles[id]}</h3>
              <p className="catalog-status">{t.courses.status}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CourseCatalog;
