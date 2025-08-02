import { Code, Target, Brain, Users, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

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
  // No auto-playing - user controls only

  const nextStrength = () => {
    setCurrentIndex((current) => (current + 1) % strengths.length);
  };

  const prevStrength = () => {
    setCurrentIndex((current) => (current - 1 + strengths.length) % strengths.length);
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
    <div className="bg-[#fdfcf9]/95 p-4 sm:p-6 rounded-lg shadow-[0_2px_8px_rgba(5,8,46,0.12)] border border-[#e8e3d8]">
      <div className="flex items-center gap-2 mb-3">
        <h4 className="text-lg sm:text-xl font-bold tracking-tight text-[#05082e] font-display">
          Core Strengths
        </h4>
      </div>

      <div className="relative h-[280px] overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={prevStrength}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-[#fdfcf9] border border-[#e8e3d8] text-[#295a7d] transition-all duration-300 hover:bg-[#05082e] hover:border-[#05082e] hover:text-white hover:scale-110 rounded-full"
          aria-label="Previous strength"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextStrength}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-[#fdfcf9] border border-[#e8e3d8] text-[#295a7d] transition-all duration-300 hover:bg-[#05082e] hover:border-[#05082e] hover:text-white hover:scale-110 rounded-full"
          aria-label="Next strength"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Strengths Carousel */}
        <div className="px-12 h-full">
          <div className="flex justify-center items-center h-full relative">
            {getVisibleStrengths().map(({ strength, position }, index) => (
              <div
                key={`${currentIndex}-${position}`}
                className={`absolute top-0 left-0 right-0 transition-all duration-700 ease-out ${
                  position === 'current'
                    ? 'translate-x-0 scale-100 opacity-100 z-10'
                    : position === 'prev'
                    ? '-translate-x-[120%] scale-95 opacity-50 z-0'
                    : 'translate-x-[120%] scale-95 opacity-50 z-0'
                }`}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}
              >
                <div className="bg-[#f8f6f1] rounded-xl shadow-sm h-[250px]">
                  <div className="p-3 border-b border-[#e8e3d8] bg-[#f8f6f1]">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-white rounded-lg shadow-sm">
                        <strength.icon className="w-5 h-5 text-[#295a7d]" />
                      </div>
                      <h5 className="saira-condensed-bold text-[#05082e] text-xl">
                        {strength.title}
                      </h5>
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <p className="saira-condensed-regular text-[#295a7d] text-base leading-relaxed mb-3">
                      {strength.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {strength.keywords.map((keyword, idx) => (
                        <span 
                          key={idx}
                          className="text-sm px-2.5 py-1 bg-white text-[#295a7d] rounded-full shadow-sm"
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

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {strengths.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-2 bg-[#05082e]"
                  : "w-2 h-2 bg-[#e8e3d8] hover:bg-[#295a7d]"
              }`}
              aria-label={`Go to strength ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}