import { useState, useMemo } from "react";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

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
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-48 sm:w-96 h-48 sm:h-96 bg-[#295a7d]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-[#295a7d]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/3 w-36 sm:w-72 h-36 sm:h-72 bg-[#295a7d]/5 rounded-full blur-2xl animate-pulse delay-300"></div>
        </div>

        <Navbar onOpenDialog={openDialog} />
        <MainContent 
          splineSceneUrl={splineSceneUrl}
          activeDialog={activeDialog}
          onCloseDialog={closeDialog}
        />
      </div>
    </>
  );
} 