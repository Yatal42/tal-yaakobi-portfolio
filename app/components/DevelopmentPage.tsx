import PageHero from "./PageHero";
import ProjectCarousel from './ProjectCarousel';
import Skills from './Skills';
import { projects } from '../data/projects';

const DevelopmentPage = () => {
  return (
    <div className="retro-container">
      <PageHero
        id="dev-intro"
        imageSide="right"
        heading="DEV"
        subheading="SOFTWARE ENGINEERING BACKGROUND"
        intro="I have a full-stack software engineering background and still ship code. It keeps my teaching grounded in how CS is used in practice. Here are the projects and the stack behind them."
      />

      <section id="projects" className="retro-section projects-section motion-section motion-delay-1">
        <h2 className="retro-section-title projects-title">Projects</h2>
        <p className="projects-subtitle">
          Selected work, shipped products, and hands-on technical experiments.
        </p>
        <ProjectCarousel projects={projects} />
      </section>

      <Skills />
    </div>
  );
};

export default DevelopmentPage;
