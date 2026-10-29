import { Link } from "react-router";
import { localizePath, useI18n } from "../lib/locale";

const Services = () => {
  const { locale, t } = useI18n();

  return (
    <div className="about-services">
      <div className="about-reading-panel">
        <p className="about-degree">{t.about.degree}</p>

        <div className="services-subjects">
          <h3 className="services-subjects-title">{t.teaching.subjectsTitle}</h3>
          <ul className="services-subject-chips" role="list">
            {t.teaching.subjects.map((subject) => (
              <li key={subject} className="services-subject-chip">
                {subject}
              </li>
            ))}
          </ul>
          <p className="services-subjects-note">
            {t.teaching.subjectsNote}{" "}
            <Link to={`${localizePath("/", locale)}#courses`} className="services-inline-link">
              {t.teaching.catalogLink}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
