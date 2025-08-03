import { useState, useEffect, useRef } from "react";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full bg-[#05082e]/5 backdrop-blur-xl shadow-[0_4px_16px_rgba(5,8,46,0.16)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#295a7d]/10 after:to-transparent">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 pl-0.5 sm:pl-1 md:pl-2">
            <button 
              onClick={scrollToTop}
              className="flex flex-col items-start gap-1 focus:outline-none"
            >
              <h1 className="text-base sm:text-lg md:text-xl font-display font-light tracking-tight text-white drop-shadow-lg leading-none">
                Tal Yaakobi
              </h1>
              <div className="text-[10px] sm:text-xs md:text-sm font-display font-light tracking-tight text-[#ffffff]/80 leading-none whitespace-nowrap">
                Full Stack Developer
              </div>
            </button>

            <SocialLinks />
          </div>
          
          <div className="hidden sm:flex gap-0 pr-0.5 sm:pr-1 md:pr-2 ml-auto">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className="relative group px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 md:py-1.5 transition-all duration-300 focus:outline-none"
                aria-label={`Scroll to ${item.label}`}
              >
                <div className="absolute inset-0 bg-[#05082e] -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <span className="relative z-10 inline-flex items-center text-[10px] sm:text-xs md:text-sm font-sans font-light tracking-wide text-white/70 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                  {item.label}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </a>
            ))}
          </div>

          <div className="sm:hidden pr-3">
            <button
              onClick={toggleMobileMenu}
              className="relative group p-2 text-white transition-all duration-300 focus:outline-none"
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

        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-[#05082e]/95 backdrop-blur-xl shadow-[0_4px_16px_rgba(5,8,46,0.16)] border-t border-[#295a7d]/20">
            <div className="px-4 py-3 space-y-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className="w-full text-left px-3 py-3 text-white/80 hover:text-white hover:bg-[#295a7d]/20 rounded transition-all duration-200 font-sans font-light tracking-wide block focus:outline-none"
                  aria-label={`Scroll to ${item.label}`}
                >
                  <span className="inline-flex items-center">
                    <span className="font-mono text-[#295a7d] mr-2 text-xs">&lt;</span>
                    {item.label}
                    <span className="font-mono text-[#295a7d] ml-2 text-xs">/&gt;</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;