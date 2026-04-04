const Hero = () => {
  return (
    <section id="hero" className="retro-section relative">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
        <div className="flex-1 text-left">
          <h1 className="pixel-heading">
            TAL<br />YAAKOBI
          </h1>
          <p className="pixel-subheading hero-subheading">FULL STACK DEVELOPER</p>
          <p className="retro-text hero-intro-text">
            A passionate Computer Science BSc graduate, combining strong technical skills with creative vision.
          </p>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="retro-computer-container">
            <img 
              src="/assets/retro-computer.svg" 
              alt="Retro Computer Setup" 
              className="w-80 lg:w-96 h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

