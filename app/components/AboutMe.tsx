import { useMemo, useState } from "react";
import RetroAudioPlayer from "./RetroAudioPlayer";

export default function AboutMe() {
  const aboutLines = useMemo(
    () => [
      "Computer Science graduate with full-stack product development experience.",
      "Background in software engineering and television production.",
      "Strong in turning complex technical ideas into clear user flows.",
      "M.A. student in Science and Technology Education at Bar-Ilan University.",
      "Accessibility-focused educator with hands-on work alongside deaf students.",
      "Passionate about algorithmic thinking and technical storytelling."
    ],
    []
  );

  const strengths = useMemo(
    () => [
      {
        title: "Vision",
        text: "I connect product goals to implementation details, so every feature supports a clear user outcome."
      },
      {
        title: "Curiosity",
        text: "I learn fast, test ideas early, and keep improving through sharing and feedback."
      },
      {
        title: "Community",
        text: "I value collaboration, mentorship, and communication that keeps teams aligned and motivated."
      },
      {
        title: "Perspective",
        text: "I bring cross-disciplinary thinking to product work, combining strategy, creativity, and practical execution."
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
        <div className="about-top-layout">
          <section className="about-subsection about-subsection--intro">
            <h3 className="about-subsection-title">About Me</h3>
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

          <div className="about-player-wrap about-player-wrap--side">
            <RetroAudioPlayer />
          </div>
        </div>

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