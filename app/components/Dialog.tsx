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
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-7xl",
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Backdrop with modern blur effect */}
      <div
        className="fixed inset-0 bg-[#05082e]/30 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`relative w-full ${sizeClasses[size]} transform bg-[#fdfcf9]/95 backdrop-blur-md transition-all rounded-none border-t border-l border-r border-b-2 border-[#e8e3d8] overflow-hidden`}
        >
          {/* Geometric accent line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#295a7d]/30 to-transparent"></div>
          
          {/* Header with geometric styling */}
          <div className="flex items-center justify-between p-6 relative">
            {/* Title with modern font */}
            <h2 className="text-xl font-bold text-[#05082e] font-display tracking-tight">{title}</h2>
            
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
          <div className="p-6 text-[#295a7d] max-h-[70vh] overflow-y-auto bg-gradient-to-b from-[#fdfcf9]/50 to-[#fdfcf9]/95">
            {children}
          </div>
          
          {/* Bottom geometric accent */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#295a7d]/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
} 