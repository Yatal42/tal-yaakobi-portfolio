import { useEffect } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export default function Dialog({ isOpen, onClose, title, children, size = "md" }: DialogProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md w-[95%] sm:w-auto",
    md: "max-w-lg w-[95%] sm:w-auto", 
    lg: "max-w-2xl w-[95%] sm:w-auto",
    xl: "max-w-5xl w-[95%] sm:w-auto",
    full: "max-w-7xl w-[95%] sm:w-auto",
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Backdrop with modern blur effect */}
      <div 
        className="fixed inset-0 bg-[#05082e]/30 backdrop-blur-md transition-all duration-300 ease-out"
        style={{
          opacity: isOpen ? 1 : 0,
          backdropFilter: isOpen ? 'blur(8px)' : 'blur(0px)'
        }}
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <div
          className={`relative w-full ${sizeClasses[size]} transform bg-[#fdfcf9]/95 backdrop-blur-md transition-all duration-500 ease-out rounded-none border-t border-l border-r border-b-2 border-[#e8e3d8] overflow-hidden`}
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(-20px)'
          }}
        >
          {/* Geometric accent line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#295a7d]/30 to-transparent"></div>
          
          {/* Header with geometric styling */}
          <div className="flex items-center justify-between p-3 sm:p-6 relative">
            {/* Title with modern font */}
            <h2 className="text-lg sm:text-xl font-bold text-[#05082e] font-display tracking-tight">{title}</h2>
            
            {/* Close button with enhanced geometric hover effect */}
            <button
              onClick={onClose}
              className="relative group p-2 text-[#295a7d] transition-all duration-300 hover:text-white"
              aria-label="Close dialog"
            >
              {/* Enhanced geometric background effect on hover */}
              <div className="absolute inset-0 bg-[#05082e]/0 group-hover:bg-[#05082e] -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              {/* Enhanced hover animation for the icon */}
              <svg 
                className="relative z-10 h-6 w-6 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-90" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

              {/* Focus ring for accessibility */}
              <div className="absolute inset-0 border-2 border-transparent group-focus:border-[#05082e] rounded-sm"></div>
            </button>
          </div>

          {/* Separator line with gradient */}
          <div className="h-[1px] w-full bg-gradient-to-r from-[#e8e3d8] via-[#295a7d]/10 to-[#e8e3d8]"></div>

          {/* Content with subtle background */}
          <div className="p-3 sm:p-6 text-[#295a7d] max-h-[75vh] overflow-y-auto bg-gradient-to-b from-[#fdfcf9]/50 to-[#fdfcf9]/95">
            {children}
          </div>
          
          {/* Bottom geometric accent */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#295a7d]/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}