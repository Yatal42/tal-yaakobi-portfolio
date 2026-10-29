import PageHero from "./PageHero";
import { scrollToSection } from "../lib/scroll";
import { useI18n } from "../lib/locale";

const Hero = () => {
  const { t } = useI18n();

  return (
    <PageHero
      imageSide="right"
      heading={<>TAL<br />YAAKOBI</>}
      subheading={t.hero.subheading}
      imageAlt={t.hero.imageAlt}
      actions={
        <button
          type="button"
          className="hero-cta-primary"
          onClick={() => scrollToSection("contact")}
        >
          {t.hero.cta}
        </button>
      }
    />
  );
};

export default Hero;
