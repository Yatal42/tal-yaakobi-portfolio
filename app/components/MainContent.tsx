import Spline3DScene from "./Spline3DScene";
import Dialog from "./Dialog";
import AboutMe from "./AboutMe";
import Strengths from "./Strengths";
import Skills from "./Skills";
import ProjectCarousel from "./ProjectCarousel";
import Contact from "./Contact";


interface MainContentProps {
  splineSceneUrl: string;
  activeDialog: string | null;
  onCloseDialog: () => void;
  onOpenDialog: (dialogId: string) => void;
}

const MainContent = ({ splineSceneUrl, activeDialog, onCloseDialog, onOpenDialog }: MainContentProps) => {
  return (
    <>
      
      <div className="fixed inset-0 pt-14 sm:pt-16 md:pt-20 z-10">
        {/* Interaction hint - positioned at bottom center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
          {/* Mobile Text: Visible on small screens, hidden on medium and larger */}
          <p className="block md:hidden text-white/80 text-sm font-light px-4 py-2 bg-[#05082e]/60 backdrop-blur-sm rounded-full animate-pulse">
            Pinch & Drag to explore
          </p>
          {/* Desktop Text: Hidden on small screens, visible on medium and larger */}
          <p className="hidden md:block text-white/80 text-sm font-light px-4 py-2 bg-[#05082e]/60 backdrop-blur-sm rounded-full animate-pulse">
            Click & Drag to explore
          </p>
        </div>

        {/* 3D Scene Container - smaller on mobile */}
        <div className="w-full h-full px-4 py-8 sm:px-0 sm:py-0">
          <Spline3DScene
            scene={splineSceneUrl}
            className="w-full h-full"
          />
        </div>
      </div>

      
      <Dialog 
        isOpen={activeDialog === 'about'} 
        onClose={onCloseDialog} 
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
        onClose={onCloseDialog} 
        title="My Skills"
        size="xl"
      >
        <Skills />
      </Dialog>

      <Dialog 
        isOpen={activeDialog === 'projects'} 
        onClose={onCloseDialog} 
        title="My Projects"
        size="full"
      >
        <ProjectCarousel />
      </Dialog>

      <Dialog 
        isOpen={activeDialog === 'contact'} 
        onClose={onCloseDialog} 
        title="Get In Touch"
        size="md"
      >
        <Contact />
      </Dialog>


    </>
  );
};

export default MainContent;