import type { ReactNode } from "react";

interface PageHeroProps {
  id?: string;
  heading: ReactNode;
  subheading: ReactNode;
  imageSide?: "left" | "right";
  imageSrc?: string;
  imageAlt?: string;
  actions?: ReactNode;
  localizedHeading?: boolean;
}

const PageHero = ({
  id = "hero",
  heading,
  subheading,
  imageSide = "right",
  imageSrc = "/assets/retro-computer.svg",
  imageAlt = "Retro Computer Setup",
  actions,
  localizedHeading = false,
}: PageHeroProps) => {
  return (
    <section
      id={id}
      className={`retro-section page-hero page-hero--image-${imageSide} relative`}
    >
      <div className="page-hero-layout">
        <div className="page-hero-text">
          <h1 className={`pixel-heading${localizedHeading ? " copy-heading" : ""}`}>{heading}</h1>
          <p className="pixel-subheading hero-subheading">{subheading}</p>
          {actions ? <div className="hero-cta-row">{actions}</div> : null}
        </div>

        <div className="page-hero-image">
          <div className="retro-computer-container">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="page-hero-image-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
