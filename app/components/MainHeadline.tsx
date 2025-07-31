import { useState, useMemo } from "react";
import Spline3DScene from "./Spline3DScene";
import Dialog from "./Dialog";
import AboutMe from "./AboutMe";
import Strengths from "./Strengths";
import Skills from "./Skills";
import ProjectCarousel from "./ProjectCarousel";
import Contact from "./Contact";

export default function MainHeadline() {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  
  const splineSceneUrl = useMemo(() => 
    `https://prod.spline.design/QmGNYY-JqkPLqtDR/scene.splinecode?v=${new Date().getTime()}`, 
    []
  );

  const openDialog = (dialogId: string) => {
    setActiveDialog(dialogId);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  return (
    <>
    <div className="min-h-screen relative bg-gradient-to-br from-[#05082e] from-10% via-[#295a7d]/90 via-30% via-[#05082e] via-70% to-[#05082e] to-90%">
      {/* Modern subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#295a7d]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-[#295a7d]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#295a7d]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#295a7d]/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#295a7d]/5 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-[#295a7d]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation bar - with modern glassmorphism */}
      <nav className="fixed top-4 left-0 right-0 z-50">
        <div className="w-[90%] ml-0 bg-[#05082e]/5 backdrop-blur-xl shadow-[0_4px_16px_rgba(5,8,46,0.16)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#295a7d]/10 after:to-transparent">
          <div className="px-0 flex items-center justify-between h-16 sm:h-20">
            {/* Header Content - aligned to the left */}
            <div className="flex items-end gap-3 sm:gap-4 pl-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-light tracking-tight text-white drop-shadow-lg whitespace-nowrap leading-none pb-1">
                Tal Yaakobi
              </h1>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-display font-light tracking-tight text-[#295a7d] whitespace-nowrap leading-none pb-1">
                Full Stack Developer
              </div>
            </div>
            
            {/* Navigation - aligned to the right with more space */}
            <div className="flex gap-2 sm:gap-4 pr-8">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => openDialog(item.id)}
                  className="relative group px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 transition-all duration-300"
                  aria-label={`Open ${item.label} dialog`}
                >
                  {/* Enhanced hover background effect */}
                  <div className="absolute inset-0 bg-[#05082e] -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  
                  {/* Enhanced text with tech accent */}
                  <span className="relative z-10 inline-flex items-center text-sm sm:text-base md:text-lg font-sans font-light tracking-wide text-white/70 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                    <span className="font-mono text-[#295a7d] group-hover:text-white mr-2 text-[10px] sm:text-[11px] md:text-[12px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">&lt;</span>
                    {item.label}
                    <span className="font-mono text-[#295a7d] group-hover:text-white ml-2 text-[10px] sm:text-[11px] md:text-[12px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">/&gt;</span>
                  </span>

                  {/* Enhanced hover line effect */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  {/* Focus ring for accessibility */}
                  <div className="absolute -inset-1 border-2 border-transparent group-focus:border-white/30 rounded-sm"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 3D MacBook - centered with ambient space */}
      <div className="fixed inset-0 pt-16 sm:pt-20">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-[#295a7d] text-xs font-light tracking-wider uppercase">
            Interactive 3D Model
          </p>
        </div>

        <Spline3DScene
          scene={splineSceneUrl}
          className="w-full h-full"
        />
      </div>
    </div>

    {/* Dialogs */}
    <Dialog 
      isOpen={activeDialog === 'about'} 
      onClose={closeDialog} 
      title="About Me"
      size="xl"
    >
      <div className="space-y-8">
        <AboutMe />
        <Strengths />
      </div>
    </Dialog>

    <Dialog 
      isOpen={activeDialog === 'skills'} 
      onClose={closeDialog} 
      title="My Skills"
      size="xl"
    >
      <Skills />
    </Dialog>

    <Dialog 
      isOpen={activeDialog === 'projects'} 
      onClose={closeDialog} 
      title="My Projects"
      size="full"
    >
      <ProjectCarousel />
    </Dialog>

    <Dialog 
      isOpen={activeDialog === 'contact'} 
      onClose={closeDialog} 
      title="Get In Touch"
      size="md"
    >
      <Contact />
    </Dialog>
    </>
  );
} 