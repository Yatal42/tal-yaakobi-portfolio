import { useState, useEffect, useRef } from "react";
import SocialLinks from "./SocialLinks";

interface NavbarProps {
  onOpenDialog: (dialogId: string) => void;
}

const Navbar = ({ onOpenDialog }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);
  return (
    <nav ref={navRef} className="fixed top-4 left-0 right-0 z-50">
      <div className="w-full bg-[#05082e]/5 backdrop-blur-xl shadow-[0_4px_16px_rgba(5,8,46,0.16)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#295a7d]/10 after:to-transparent">
        <div className="px-0 flex items-center justify-between h-16 sm:h-20">
          {/* Left Side: Title and Role */}
          <div className="flex items-center gap-4 pl-3 sm:pl-6">
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display font-light tracking-tight text-white drop-shadow-lg leading-none">
                Tal Yaakobi
              </h1>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-display font-light tracking-tight text-[#ffffff]/80 leading-none">
                Full Stack Developer
              </div>
            </div>

            {/* Social Links - Always Visible */}
            <SocialLinks />
          </div>
          
          {/* Desktop Menu - Right Aligned */}
          <div className="hidden sm:flex gap-2 md:gap-4 pr-4 md:pr-8 ml-auto">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onOpenDialog(item.id)}
                className="relative group px-3 md:px-4 lg:px-5 xl:px-6 py-2 md:py-2.5 lg:py-3 xl:py-3.5 transition-all duration-300"
                aria-label={`Open ${item.label} dialog`}
              >
                {/* Enhanced hover background effect */}
                <div className="absolute inset-0 bg-[#05082e] -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                {/* Enhanced text with tech accent */}
                <span className="relative z-10 inline-flex items-center text-sm md:text-base lg:text-lg font-sans font-light tracking-wide text-white/70 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                  <span className="font-mono text-[#295a7d] group-hover:text-white mr-2 text-[10px] md:text-[11px] lg:text-[12px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">&lt;</span>
                  {item.label}
                  <span className="font-mono text-[#295a7d] group-hover:text-white ml-2 text-[10px] md:text-[11px] lg:text-[12px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">/&gt;</span>
                </span>

                {/* Enhanced hover line effect */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                {/* Focus ring for accessibility */}
                <div className="absolute -inset-1 border-2 border-transparent group-focus:border-white/30 rounded-sm"></div>
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="sm:hidden pr-3">
            <button
              onClick={toggleMobileMenu}
              className="relative group p-2 text-white transition-all duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 absolute ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 absolute ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-[#05082e]/95 backdrop-blur-xl shadow-[0_4px_16px_rgba(5,8,46,0.16)] border-t border-[#295a7d]/20">
            <div className="px-4 py-3 space-y-2">
              {/* Navigation Items */}
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onOpenDialog(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-3 text-white/80 hover:text-white hover:bg-[#295a7d]/20 rounded transition-all duration-200 font-sans font-light tracking-wide"
                  aria-label={`Open ${item.label} dialog`}
                >
                  <span className="inline-flex items-center">
                    <span className="font-mono text-[#295a7d] mr-2 text-xs">&lt;</span>
                    {item.label}
                    <span className="font-mono text-[#295a7d] ml-2 text-xs">/&gt;</span>
                  </span>
                </button>
              ))}


            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;