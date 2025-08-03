import { Code, Target, Brain, Users, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const strengths = [
  {
    title: "Vision",
    icon: Target,
    description: "As a former TV producer, I'm naturally wired to see the whole board. I approach software development with a passion for understanding the 'why' behind every feature, ensuring that even the smallest details serve the big-picture vision.",
    keywords: ["Big-Picture Thinking", "Purpose-Driven Code", "Full Ownership"]
  },
  {
    title: "Curiosity",
    icon: Brain,
    description: "My curiosity is my engine. I love diving into new subjects, and I find that sharing my journey—whether with my students or on LinkedIn—is the best way to deepen my own understanding. For me, learning isn't just a task; it's a core passion.",
    keywords: ["Continuous Learning", "Knowledge Sharing", "Community Engagement"]
  },
  {
    title: "Community",
    icon: Users,
    description: "Whether leading a team, collaborating in a tech meetup, or mentoring students with disabilities, my core approach is the same: to build a sense of community. I believe the best products are created when people feel connected, heard, and empowered, and I thrive on fostering that environment through empathy, clear communication, and positive energy.",
    keywords: ["Team Builder", "Empathetic Leadership", "Positive Culture"]
  },
  {
    title: "Perspective",
    icon: Code,
    description: "My approach to problem-solving is deeply shaped by my passion for diverse fields like art, history, music, and philosophy. It's not about knowing facts, but about having a rich toolkit of mental models that allows me to ask better questions and connect strategic goals to the human needs behind them.",
    keywords: ["Creative Problem-Solving", "Critical Thinking", "Connecting Dots"]
  }
];

export default function Strengths() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextStrength = () => {
    if (currentIndex < strengths.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevStrength = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getVisibleStrengths = () => {
    const visibleStrengths = [];
    
    if (currentIndex > 0) {
      visibleStrengths.push({
        strength: strengths[currentIndex - 1],
        position: 'prev'
      });
    }
    
    visibleStrengths.push({
      strength: strengths[currentIndex],
      position: 'current'
    });
    
    if (currentIndex < strengths.length - 1) {
      visibleStrengths.push({
        strength: strengths[currentIndex + 1],
        position: 'next'
      });
    }
    
    return visibleStrengths;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-12">
      <button
        onClick={prevStrength}
        disabled={currentIndex === 0}
        className={`absolute -left-2 sm:-left-4 md:-left-8 lg:-left-8 top-1/2 transform -translate-y-1/2 z-20 rounded-none p-2 sm:p-3 md:p-4 lg:p-3.5 transition-all duration-300 group ${
          currentIndex === 0 
            ? "bg-[#05082e] border border-[#05082e] text-white/50 cursor-not-allowed !important" 
            : "bg-[#05082e] border border-[#05082e] text-white hover:bg-[#fdfcf9] hover:text-[#05082e] hover:border-[#05082e] hover:scale-125 active:scale-110 active:translate-x-1 !important"
        }`}
        aria-label="Previous strength"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110" />
      </button>

      <button
        onClick={nextStrength}
        disabled={currentIndex === strengths.length - 1}
        className={`absolute -right-2 sm:-right-4 md:-right-8 lg:-right-8 top-1/2 transform -translate-y-1/2 z-20 rounded-none p-2 sm:p-3 md:p-4 lg:p-3.5 transition-all duration-300 group ${
          currentIndex === strengths.length - 1
            ? "bg-[#05082e] border border-[#05082e] text-white/50 cursor-not-allowed"
            : "bg-[#05082e] border border-[#05082e] text-white hover:bg-[#fdfcf9] hover:text-[#05082e] hover:border-[#05082e] hover:scale-125 active:scale-110 active:-translate-x-1"
        }`}
        aria-label="Next strength"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110" />
      </button>

      <div className="px-6 sm:px-8 md:px-12 lg:px-12">
        <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-4">
          {getVisibleStrengths().map(({ strength, position }, index) => (
            <div
              key={`${currentIndex}-${position}`}
              className={`transition-all duration-500 ease-in-out p-2 ${
                position === 'current' 
                  ? 'scale-100 opacity-100 z-10' 
                  : 'scale-85 opacity-30 blur-sm z-0 hidden md:block'
              } ${
                position === 'prev' ? 'transform -translate-x-2' : 
                position === 'next' ? 'transform translate-x-2' : ''
              }`}
              style={{
                width: position === 'current' ? '100%' : '300px',
                maxWidth: position === 'current' ? '400px' : '300px',
                flexShrink: 0
              }}
            >
              <div className="bg-[#f8f6f1] rounded-2xl shadow-sm h-[340px] sm:h-[360px] flex flex-col overflow-hidden">
                <div className="p-2 sm:p-3 border-b border-[#e8e3d8] bg-[#f8f6f1] rounded-t-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <strength.icon className="w-6 h-6 text-[#295a7d]" />
                    </div>
                    <h5 className="saira-condensed-bold text-[#05082e] text-xl sm:text-2xl">
                      {strength.title}
                    </h5>
                  </div>
                </div>
                
                <div className="flex-1 p-2 sm:p-3 md:p-4 flex flex-col">
                  <p className="saira-condensed-regular text-[#295a7d] text-sm sm:text-base leading-relaxed flex-1">
                    {strength.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                    {strength.keywords.map((keyword, idx) => (
                      <span 
                        key={idx}
                        className="text-xs sm:text-sm px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white text-[#295a7d] rounded-full shadow-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
        {strengths.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`group relative transition-all duration-300 ${
              index === currentIndex
                ? "w-6 sm:w-8 md:w-10 lg:w-8 h-1.5 sm:h-2 md:h-2.5 lg:h-2 bg-[#05082e]"
                : "w-1.5 sm:w-2 md:w-2.5 lg:w-2 h-1.5 sm:h-2 md:h-2.5 lg:h-2 bg-[#e8e3d8] hover:bg-[#295a7d]"
            }`}
            aria-label={`Go to strength ${index + 1}`}
          >
            <div className="absolute inset-0 bg-[#05082e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>
        ))}
      </div>

      <div className="text-center mt-2 sm:mt-3">
        <span className="text-xs sm:text-sm md:text-sm lg:text-xs text-[#295a7d]">
          {currentIndex + 1} of {strengths.length}
        </span>
      </div>
    </div>
  );
}