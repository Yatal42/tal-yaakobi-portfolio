import Hero from './Hero';
import ProjectCarousel from './ProjectCarousel';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Contact from './Contact';
import { projects } from '../data/projects';

const RetroHomePage = () => {

  return (
    <>
      <div className="retro-container">
        <Hero />
        <section id="projects" className="retro-section projects-section motion-section motion-delay-1">
          <h2 className="retro-section-title projects-title">Projects</h2>
          <p className="projects-subtitle">Selected work, shipped products, and hands-on technical experiments.</p>
          <ProjectCarousel projects={projects} />
        </section>

        <Skills />

        <section id="about" className="retro-section about-section motion-section motion-delay-2">
          <h2 className="retro-section-title">About Me</h2>
          <AboutMe />
        </section>

        <section id="contact" className="retro-section contact-section">
          <h2 className="retro-section-title">Let's Collaborate</h2>
          <Contact />
        </section>
      </div>

      <div className="retro-footer">
        Ready to build something amazing together?
      </div>
    </>
  );
};

export default RetroHomePage;
