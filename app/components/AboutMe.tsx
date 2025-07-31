import Strengths from "./Strengths";

export default function AboutMe() {
  return (
    <div className="bg-[#fdfcf9]/95 p-4 sm:p-6 md:p-8 lg:p-6 rounded-lg shadow-[0_2px_8px_rgba(5,8,46,0.12)] transition-all duration-200 border border-[#e8e3d8] relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(5,8,46,0.16)] h-full flex flex-col justify-center">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold text-[#05082e] mb-4 tracking-tight font-display">
        Hi, I'm Tal Yaakobi
      </h3>
      
      <div>
        <p className="saira-condensed-regular mb-0 text-sm sm:text-base md:text-lg lg:text-base leading-relaxed text-[#295a7d]">
          From the fast-paced world of TV production to the intricate world of code, my journey has been anything but ordinary. As a computer science graduate, I now channel my creative energy and storytelling skills into software development. My experience working directly with students with disabilities sparked a deep interest in digital accessibility—a field I hope to contribute to one day. For now, I pour that same passion into building thoughtful, user-centered software.
        </p>
      </div>
    </div>
  );
} 