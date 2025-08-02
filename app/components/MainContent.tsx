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
}

const MainContent = ({ splineSceneUrl, activeDialog, onCloseDialog }: MainContentProps) => {
  return (
    <>
      
      <div className="fixed inset-0 pt-16 sm:pt-20 z-10">
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