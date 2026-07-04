import { useMemo, useState } from "react";

export default function AboutMe() {
  const aboutLines = useMemo(
    () => [
      "Computer Science graduate turned full-time CS educator.",
      "Private tutor for university students in core CS courses.",
      "Run full independent editions of academic CS courses, sold directly to students.",
      "M.A. researcher in Science and Technology Education at Bar-Ilan University, focused on how CS should be taught.",
      "Accessibility-focused teaching, including hands-on work alongside deaf students.",
      "Software engineering background - I still build, but teaching is the main thing."
    ],
    []
  );

  const strengths = useMemo(
    () => [
      {
        title: "Clarity",
        text: "Complex material gets broken into steps that build on each other. Nothing moves forward until it's solid."
      },
      {
        title: "Patience",
        text: "We work at your pace. I repeat, rephrase, and re-derive as many times as it takes."
      },
      {
        title: "Adaptation",
        text: "Every student thinks differently. I adjust examples, notation, and pacing to match how you learn."
      },
      {
        title: "Impact",
        text: "Passing the exam is the minimum bar. The real test is whether the next course feels easier."
      }
    ],
    []
  );

  const [strengthIndex, setStrengthIndex] = useState(0);

  const goPrevStrength = () => {
    setStrengthIndex((prev) => (prev - 1 + strengths.length) % strengths.length);
  };

  const goNextStrength = () => {
    setStrengthIndex((prev) => (prev + 1) % strengths.length);
  };

  return (
    <div className="about-flow-layout">
      <div className="about-main-box">
        <section className="about-subsection about-subsection--intro">
          <h3 className="about-subsection-title">Highlights</h3>
          <ul className="about-lines-list" role="list">
            {aboutLines.map((line) => (
              <li key={line} className="about-line-item">
                <span className="about-line-bullet" aria-hidden="true">
                  ▸
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-subsection about-subsection--strengths">
          <h3 className="about-subsection-title">My Strengths</h3>
          <div className="about-strengths-carousel">
            <button
              type="button"
              className="about-strengths-nav"
              onClick={goPrevStrength}
              aria-label="Previous strength"
            >
              ◀
            </button>

            <article className="about-strength-card" aria-live="polite">
              <h4 className="about-strength-card-title">{strengths[strengthIndex].title}</h4>
              <p className="about-strength-card-text">{strengths[strengthIndex].text}</p>
            </article>

            <button
              type="button"
              className="about-strengths-nav"
              onClick={goNextStrength}
              aria-label="Next strength"
            >
              ▶
            </button>
          </div>

          <div className="about-strengths-dots" role="tablist" aria-label="Strength slides">
            {strengths.map((strength, index) => (
              <button
                key={strength.title}
                type="button"
                className={`about-strength-dot ${index === strengthIndex ? "is-active" : ""}`}
                onClick={() => setStrengthIndex(index)}
                aria-label={`Show ${strength.title}`}
                aria-selected={index === strengthIndex}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
} 