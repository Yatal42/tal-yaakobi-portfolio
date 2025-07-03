import { useState } from "react";
import SplineKeyboard from "./SplineKeyboard";
import Dialog from "./Dialog";
import AboutMe from "./AboutMe";
import Strengths from "./Strengths";
import Skills from "./Skills";
import ProjectCarousel from "./ProjectCarousel";
import Contact from "./Contact";

export default function MainHeadline() {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const openDialog = (dialogId: string) => {
    setActiveDialog(dialogId);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  return (
    <>
    <div className="min-h-screen relative bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-white/15 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-amber-300/20 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Navigation bar - top with glassmorphism */}
      <nav className="fixed top-6 left-6 right-6 z-50">
        <div className="max-w-6xl mx-auto bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 shadow-2xl">
                      <div className="px-6 sm:px-8 flex justify-between items-center h-20 md:h-24 lg:h-28">
            <div className="flex items-center gap-4">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-amber-900 drop-shadow-lg">
                Tal Yaakobi
              </div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-700 font-medium">
                Full Stack Developer
              </div>
            </div>
            
            <div className="flex gap-3 sm:gap-4">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => openDialog(item.id)}
                  className="text-xs sm:text-sm font-buttons text-amber-900 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/50 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/70 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm border border-white/30"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 3D keyboard - full screen seamless integration */}
      <div className="fixed inset-0 pt-32 md:pt-36 lg:pt-40">
        <SplineKeyboard
          scene="https://prod.spline.design/9X9aFHcOFisAnPJS/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>

    {/* Dialogs */}
    <Dialog 
      isOpen={activeDialog === 'about'} 
      onClose={closeDialog} 
      title="About Me"
      size="lg"
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