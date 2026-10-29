import { useState } from "react";
import { useI18n } from "../lib/locale";

export default function AboutMe() {
  const { t } = useI18n();
  const strengths = t.about.strengths;
  const [strengthIndex, setStrengthIndex] = useState(0);
  const active = strengths[strengthIndex] ?? strengths[0];

  const goPrevStrength = () => {
    setStrengthIndex((prev) => (prev - 1 + strengths.length) % strengths.length);
  };

  const goNextStrength = () => {
    setStrengthIndex((prev) => (prev + 1) % strengths.length);
  };

  return (
    <div className="about-flow-layout">
      <div className="about-main-box">
        <section className="about-subsection about-subsection--strengths">
          <h3 className="about-subsection-title">{t.about.strengthsTitle}</h3>
          <div className="about-strengths-carousel">
            <button
              type="button"
              className="about-strengths-nav"
              onClick={goPrevStrength}
              aria-label={t.about.previous}
            >
              ◀
            </button>

            <article className="about-strength-card" aria-live="polite">
              <h4 className="about-strength-card-title">{active.title}</h4>
              <p className="about-strength-card-text">{active.text}</p>
            </article>

            <button
              type="button"
              className="about-strengths-nav"
              onClick={goNextStrength}
              aria-label={t.about.next}
            >
              ▶
            </button>
          </div>

          <div className="about-strengths-dots" role="tablist" aria-label={t.about.slides}>
            {strengths.map((strength, index) => (
              <button
                key={strength.title}
                type="button"
                className={`about-strength-dot ${index === strengthIndex ? "is-active" : ""}`}
                onClick={() => setStrengthIndex(index)}
                aria-label={`${t.about.show} ${strength.title}`}
                aria-selected={index === strengthIndex}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
