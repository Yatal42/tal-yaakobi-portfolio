import { useMemo, useState } from "react";
import RetroAudioPlayer from "./RetroAudioPlayer";

export default function AboutMe() {
  const aboutLines = useMemo(
    () => [
      "A passionate Computer Science BSc graduate",
      "Combining strong technical skills with creative vision",
      "Unique background in both software engineering and TV production",
      "Approaching technical challenges with analytical precision and creative thinking",
      "M.A. student in Science and Technology Education, focused on Wellbeing Education at Bar-Ilan University.",
      "Accessibility-aware educator with hands-on work alongside deaf students.",
      "Deeply connected to algorithmic thinking and currently writing a Hebrew book about algorithms."
    ],
    []
  );

  const strengths = useMemo(
    () => [
      {
        title: "Vision",
        text: "As a former TV producer, I'm naturally wired to see the whole board. I approach software development with a passion for understanding the 'why' behind every feature, ensuring that even the smallest details serve the big-picture vision."
      },
      {
        title: "Curiosity",
        text: "My curiosity is my engine. I love diving into new subjects, and I find that sharing my journey-whether with my students or on LinkedIn-is the best way to deepen my own understanding. For me, learning isn't just a task; it's a core passion."
      },
      {
        title: "Community",
        text: "Whether leading a team, collaborating in meetups, or mentoring students, my approach is fostering an environment where people feel connected, heard, and empowered through empathy and clear communication."
      },
      {
        title: "Perspective",
        text: "My approach to problem-solving is deeply shaped by my passion for diverse fields like art, history, music, and philosophy. It's not about knowing facts, but about having a rich toolkit of mental models that allows me to ask better questions and connect strategic goals to the human needs behind them."
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