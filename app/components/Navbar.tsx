interface NavbarProps {
  onOpenDialog: (dialogId: string) => void;
}

const Navbar = ({ onOpenDialog }: NavbarProps) => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="w-full bg-[#05082e]/5 backdrop-blur-xl shadow-[0_4px_16px_rgba(5,8,46,0.16)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#295a7d]/10 after:to-transparent">
        <div className="px-0 flex items-center justify-between h-16 sm:h-20">
          {/* Header Content - aligned to the left */}
          <div className="flex items-end gap-3 sm:gap-4 pl-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-light tracking-tight text-white drop-shadow-lg whitespace-nowrap leading-none pb-1">
              Tal Yaakobi
            </h1>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-display font-light tracking-tight text-[#ffffff] whitespace-nowrap leading-none pb-1">
              Full Stack Developer
            </div>
          </div>
          
          <div className="flex gap-2 sm:gap-4 pr-8">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onOpenDialog(item.id)}
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
  );
};

export default Navbar;