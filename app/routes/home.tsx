import Navigation from "../components/Navigation";
import MainHeadline from "../components/MainHeadline";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ProjectCarousel from "../components/ProjectCarousel";
import Contact from "../components/Contact";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      <Navigation />
      
      <MainHeadline />
      
      <section id="about" className="py-10 sm:py-12 md:py-16 lg:py-10 px-4 pt-20 md:pt-24 lg:pt-20 relative flex items-center justify-center bg-[#fdfcf9]">
        <div className="max-w-4xl w-full">
          <Heading>About Me</Heading>
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-8">
            <AboutMe />
          </div>
        </div>
      </section>

      <section id="skills" className="py-10 sm:py-12 md:py-16 lg:py-10 px-4 pt-20 md:pt-24 lg:pt-20 relative flex items-center justify-center bg-[#fdfcf9]">
        <div className="w-full">
          <Skills />
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-18 md:py-20 lg:py-16 px-4 pt-20 md:pt-24 lg:pt-20 pb-20 sm:pb-24 md:pb-28 lg:pb-24 relative flex items-center justify-center bg-[#fdfcf9]">
        <div className="max-w-6xl w-full">
          <Heading>Projects</Heading>
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-8">
            <ProjectCarousel />
          </div>
        </div>
      </section>

      <section id="contact" className="py-10 sm:py-12 md:py-16 lg:py-10 px-4 pt-20 md:pt-24 lg:pt-20 relative flex items-center justify-center bg-[#fdfcf9]">
        <div className="max-w-4xl w-full">
          <Heading>Contact</Heading>
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-8">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
} 