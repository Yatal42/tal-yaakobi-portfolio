import { Sparkles } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="bg-[#fdfcf9]/95 p-4 sm:p-6 md:p-8 rounded-lg shadow-[0_2px_8px_rgba(5,8,46,0.12)] border border-[#e8e3d8]">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#05082e] mb-3 tracking-tight font-display">
          Hi, I'm Tal Yaakobi
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <p className="saira-condensed-bold text-lg sm:text-xl text-[#295a7d]">
            Software Engineer
          </p>
        </div>
        <div className="max-w-2xl">
          <p className="saira-condensed-regular text-base sm:text-lg text-[#295a7d] leading-relaxed">
            A passionate Computer Science graduate combining strong technical skills with creative vision. My unique background in both software engineering and TV production allows me to approach technical challenges with both analytical precision and creative thinking.
          </p>
        </div>
      </div>
    </div>
  );
} 