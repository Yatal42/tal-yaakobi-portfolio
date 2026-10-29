import { scrollToSection } from "../lib/scroll";
import { useI18n } from "../lib/locale";
import { useViewer } from "../lib/viewer";
import TypingTag from "./ui/TypingTag";

const Hero = () => {
  const { t } = useI18n();
  const { enrolled } = useViewer();

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-text">
          <TypingTag text={t.hero.tag} />
          <h1 className="hero-title" id="hero-title">
            {t.hero.name}
            <span className="hero-title-dot" aria-hidden="true">.</span>
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <ul className="chip-list hero-tags">
            {t.hero.tags.map((tag) => (
              <li key={tag} className="chip">{tag}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={() => scrollToSection("contact")}>
              {t.hero.book}
            </button>
            {enrolled.length > 0 ? (
              <button type="button" className="btn btn-ghost" onClick={() => scrollToSection("my-courses")}>
                <span aria-hidden="true">▶</span> {t.hero.resume}
              </button>
            ) : null}
          </div>
        </div>

        <div className="hero-media">
          <img src="/assets/retro-computer.svg" alt={t.hero.imageAlt} className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
