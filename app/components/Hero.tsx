import PageHero from "./PageHero";
import { scrollToSection } from "../lib/scroll";

const Hero = () => {
  return (
    <PageHero
      imageSide="right"
      heading={<>TAL<br />YAAKOBI</>}
      subheading="CS EDUCATOR · PRIVATE TUTOR · RESEARCHER"
      intro="I teach computer science to university students: private 1:1 tutoring, full independent editions of core CS courses, and research on how CS is taught and how it could be taught better."
      actions={
        <>
          <button
            type="button"
            className="hero-cta-primary"
            onClick={() => scrollToSection("contact")}
          >
            Get in touch
          </button>
        </>
      }
    />
  );
};

export default Hero;
