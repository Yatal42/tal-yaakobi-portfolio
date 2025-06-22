import Laptop3D from "./Laptop3D";

export default function MainHeadline() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen relative flex flex-col justify-center items-center bg-[#fdfcf9] overflow-hidden pt-16">

      <video 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 z-[1]"
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      >
        <source src="/3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      <div 
        className="absolute top-0 left-0 w-full h-full z-[2]"
        style={{
          background: 'linear-gradient(135deg, rgba(253, 252, 249, 0.8) 0%, rgba(248, 246, 241, 0.9) 100%)'
        }}
      ></div>
      
      <div className="relative z-[3] flex flex-col md:flex-col lg:flex-row items-center justify-center md:justify-center lg:justify-between max-w-6xl w-full px-4 sm:px-8 gap-8 md:gap-12 lg:gap-16">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-1 md:order-1 lg:order-1">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold m-0 tracking-tight leading-tight text-shadow-lg gradient-text">
            TAL YAAKOBI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold text-[#295a7d] mt-4 tracking-wide">
            Full Stack Developer
          </p>
        </div>
        
        <div className="flex-1 flex justify-center items-center w-full lg:w-auto order-2 md:order-2 lg:order-2 mt-4 md:mt-6 lg:mt-0">
          <div className="relative flex justify-center items-center w-full h-full z-[3] max-w-sm md:max-w-sm lg:max-w-none">
            <Laptop3D />
          </div>
        </div>
      </div>
      

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[3]">
        <div 
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 bg-[var(--error)] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 shadow-sm backdrop-blur-md hover:scale-105 hover:bg-[#05082e]"
          onClick={() => scrollToSection('about')}
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 text-white transition-all duration-200 hover:translate-y-0.5"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
} 