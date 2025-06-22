export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[#fdfcf9] backdrop-blur-sm shadow-sm border-b border-[#e8e3d8] transition-all duration-200">
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#05082e]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between sm:justify-start items-center h-16 md:h-20 gap-4 sm:gap-8">
        <a 
          href="#" 
          className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold text-[#05082e] no-underline tracking-tight transition-all duration-200 hover:scale-[1.02] hover:text-[var(--error)] flex-shrink-0"
        >
          Tal Yaakobi
        </a>
        
        <ul className="flex flex-row list-none m-0 p-0 gap-2 sm:gap-4 md:gap-6 lg:gap-4 items-center">
          <li className="relative inline-block">
            <a 
              href="#about" 
              className="no-underline text-[#05082e] font-semibold text-xs sm:text-sm md:text-base lg:text-sm px-2 sm:px-4 md:px-5 lg:px-4 py-2 sm:py-2.5 md:py-3 lg:py-2.5 rounded-md transition-all duration-200 block whitespace-nowrap hover:text-[#05082e] hover:bg-[#f8f6f1] hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-[var(--error)] after:transition-all after:duration-200 after:transform after:-translate-x-1/2 hover:after:w-full"
            >
              About
            </a>
          </li>
          <li className="relative inline-block">
            <a 
              href="#skills" 
              className="no-underline text-[#05082e] font-semibold text-xs sm:text-sm md:text-base lg:text-sm px-2 sm:px-4 md:px-5 lg:px-4 py-2 sm:py-2.5 md:py-3 lg:py-2.5 rounded-md transition-all duration-200 block whitespace-nowrap hover:text-[#05082e] hover:bg-[#f8f6f1] hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-[var(--error)] after:transition-all after:duration-200 after:transform after:-translate-x-1/2 hover:after:w-full"
            >
              Skills
            </a>
          </li>
          <li className="relative inline-block">
            <a 
              href="#projects" 
              className="no-underline text-[#05082e] font-semibold text-xs sm:text-sm md:text-base lg:text-sm px-2 sm:px-4 md:px-5 lg:px-4 py-2 sm:py-2.5 md:py-3 lg:py-2.5 rounded-md transition-all duration-200 block whitespace-nowrap hover:text-[#05082e] hover:bg-[#f8f6f1] hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-[var(--error)] after:transition-all after:duration-200 after:transform after:-translate-x-1/2 hover:after:w-full"
            >
              Projects
            </a>
          </li>
          <li className="relative inline-block">
            <a 
              href="#contact" 
              className="no-underline text-[#05082e] font-semibold text-xs sm:text-sm md:text-base lg:text-sm px-2 sm:px-4 md:px-5 lg:px-4 py-2 sm:py-2.5 md:py-3 lg:py-2.5 rounded-md transition-all duration-200 block whitespace-nowrap hover:text-[#05082e] hover:bg-[#f8f6f1] hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-[var(--error)] after:transition-all after:duration-200 after:transform after:-translate-x-1/2 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
} 