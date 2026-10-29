import type { ReactNode } from "react";
import TypingTag from "./ui/TypingTag";

interface PageHeroProps {
  id?: string;
  eyebrow: string;
  heading: ReactNode;
  lead?: ReactNode;
  imageSrc?: string;
  imageAlt: string;
}

const PageHero = ({
  id = "hero",
  eyebrow,
  heading,
  lead,
  imageSrc = "/assets/retro-computer.svg",
  imageAlt,
}: PageHeroProps) => {
  return (
    <section id={id} className="hero hero-compact" aria-labelledby={`${id}-title`}>
      <div className="container hero-layout">
        <div className="hero-text">
          <TypingTag text={`> ${eyebrow}`} />
          <h1 className="hero-title" id={`${id}-title`}>
            {heading}
            <span className="hero-title-dot" aria-hidden="true">.</span>
          </h1>
          {lead ? <p className="hero-lead">{lead}</p> : null}
        </div>
        <div className="hero-media">
          <img src={imageSrc} alt={imageAlt} className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
