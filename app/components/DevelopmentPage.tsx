import PageHero from "./PageHero";
import ProjectCarousel from "./ProjectCarousel";
import Skills from "./Skills";
import { projects } from "../data/projects";
import { useI18n } from "../lib/locale";

const DevelopmentPage = () => {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        id="dev-intro"
        eyebrow={t.development.eyebrow}
        heading={t.development.heading}
        lead={t.development.intro}
        imageAlt={t.hero.imageAlt}
      />

      <section id="projects" className="section" aria-label={t.development.projectsTitle}>
        <div className="container">
          <p className="section-intro projects-lead">{t.development.projectsTitle}</p>
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <Skills />
    </>
  );
};

export default DevelopmentPage;
