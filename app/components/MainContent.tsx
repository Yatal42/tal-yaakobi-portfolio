import Spline3DScene from "./Spline3DScene";
import AboutMe from "./AboutMe";
import Strengths from "./Strengths";
import Skills from "./Skills";
import ProjectCarousel from "./ProjectCarousel";
import Contact from "./Contact";

interface MainContentProps {
  splineSceneUrl: string;
}

const MainContent = ({ splineSceneUrl }: MainContentProps) => {
  return (
    <>
      {/* Hero Section with 3D Scene - Full height */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          {/* Interaction hint */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
            <p className="block md:hidden text-white/80 text-sm font-light px-4 py-2 bg-[#05082e]/60 backdrop-blur-sm rounded-full animate-pulse">
              Pinch & Drag to explore
            </p>
            <p className="hidden md:block text-white/80 text-sm font-light px-4 py-2 bg-[#05082e]/60 backdrop-blur-sm rounded-full animate-pulse">
              Click & Drag to explore
            </p>
          </div>

          {/* 3D Scene Container */}
          <div className="w-full h-full">
            <Spline3DScene
              scene={splineSceneUrl}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="relative z-10">
        {/* About Section - Full height with content centered */}
        <section id="about" className="min-h-screen flex items-center py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#05082e] from-10% via-[#295a7d]/90 via-30% via-[#05082e] via-70% to-[#05082e] to-90%">
          <div className="max-w-6xl mx-auto w-full">
            <div className="space-y-6">
              <AboutMe />
              <Strengths />
            </div>
          </div>
        </section>

        {/* Skills Section - Full height with content centered */}
        <section id="skills" className="min-h-screen flex items-center py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#05082e] from-10% via-[#295a7d]/90 via-30% via-[#05082e] via-70% to-[#05082e] to-90%">
          <div className="max-w-6xl mx-auto w-full">
            <Skills />
          </div>
        </section>

        {/* Projects Section - Full height with content centered */}
        <section id="projects" className="min-h-screen flex items-center py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#05082e] from-10% via-[#295a7d]/90 via-30% via-[#05082e] via-70% to-[#05082e] to-90% scroll-mt-24">
          <div className="max-w-6xl mx-auto w-full">
            <ProjectCarousel />
          </div>
        </section>

        {/* Contact Section - Full height with content centered */}
        <section id="contact" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#05082e] from-10% via-[#295a7d]/90 via-30% via-[#05082e] via-70% to-[#05082e] to-90%">
          <div className="max-w-6xl mx-auto w-full">
            <div className="bg-[#fdfcf9]/95 border border-[#e8e3d8] rounded-lg p-8 shadow-[0_2px_8px_rgba(5,8,46,0.12)]">
              <Contact />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;