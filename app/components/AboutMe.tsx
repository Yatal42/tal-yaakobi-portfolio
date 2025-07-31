import { Sparkles } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="bg-[#fdfcf9]/95 p-6 sm:p-8 rounded-lg shadow-[0_2px_8px_rgba(5,8,46,0.12)] border border-[#e8e3d8]">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#05082e] mb-3 tracking-tight font-display">
          Hi, I'm Tal Yaakobi
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-[#295a7d]" />
          <p className="saira-condensed-bold text-xl text-[#295a7d]">
            Software Engineer with a Producer's Vision
          </p>
        </div>
        <div className="max-w-2xl">
          <p className="saira-condensed-regular text-lg text-[#295a7d] leading-relaxed">
            A Dean's List Computer Science graduate bringing a unique blend of technical precision and creative problem-solving. My background in TV production has taught me to see beyond the code – to envision and deliver solutions that make a real impact.
          </p>
        </div>
      </div>
    </div>
  );
} 