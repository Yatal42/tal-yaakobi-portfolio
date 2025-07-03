import Strengths from "./Strengths";

export default function AboutMe() {
  return (
    <div className="bg-amber-50/80 p-4 sm:p-6 md:p-8 lg:p-6 rounded-lg shadow-sm transition-all duration-200 border border-amber-200/60 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-md hover:border-amber-300/60 h-full flex flex-col justify-center">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold text-amber-900 mb-4 tracking-tight">
        Hi, I'm Tal Yaakobi
      </h3>
      
      <div>
        <p className="mb-0 text-sm sm:text-base md:text-lg lg:text-base leading-relaxed text-amber-800">
          From the fast-paced world of TV production to the intricate world of code, my journey has been anything but ordinary. As a computer science graduate, I now channel my creative energy and storytelling skills into software development. My experience working directly with students with disabilities sparked a deep interest in digital accessibility—a field I hope to contribute to one day. For now, I pour that same passion into building thoughtful, user-centered software.
        </p>
      </div>
    </div>
  );
} 