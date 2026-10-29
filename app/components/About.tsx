import SectionHeader from "./ui/SectionHeader";
import Window from "./ui/Window";
import { useI18n } from "../lib/locale";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} id="about-title" />

        <div className="about-layout">
          <div className="prose">
            {t.about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Window title="about.txt" className="about-window">
            <dl className="timeline">
              {t.about.timeline.map((item) => (
                <div key={item.label} className="timeline-row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Window>
        </div>

        <div className="subjects">
          <h3 className="subsection-title">{t.about.subjectsTitle}</h3>
          <ul className="chip-list">
            {t.about.subjects.map((subject) => (
              <li key={subject} className="chip">{subject}</li>
            ))}
          </ul>
          <p className="subjects-note">{t.about.subjectsNote}</p>
        </div>
      </div>
    </section>
  );
}
