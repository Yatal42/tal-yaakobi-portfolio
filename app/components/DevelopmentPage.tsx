import PageHero from "./PageHero";
import ProjectCarousel from "./ProjectCarousel";
import Skills from "./Skills";
import { projects } from "../data/projects";
import { useI18n } from "../lib/locale";

const DevelopmentPage = () => {
  const { locale, t } = useI18n();

  return (
    <div className="retro-container">
      <PageHero
        id="dev-intro"
        imageSide="right"
        localizedHeading={locale === "he"}
        heading={t.development.heading}
        subheading={t.development.subheading}
        imageAlt={t.hero.imageAlt}
      />

      <section id="projects" className="retro-section projects-section motion-section motion-delay-1">
        <p className="projects-lead">{t.development.projectsTitle}</p>
        <ProjectCarousel projects={projects} />
      </section>

      <Skills />
    </div>
  );
};

export default DevelopmentPage;
