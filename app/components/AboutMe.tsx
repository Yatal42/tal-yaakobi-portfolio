const interests = [
  "Accessibility Technology - Years supporting students with disabilities gave me deep insight into real user needs and technical requirements, with a dream to work on accessibility products",
  "Professional Journey - Love writing and sharing my career transition experiences.",
  "TV Production & Team Leadership - Experience managing crews and tight deadlines under pressure",
  "Gaming - Years of problem-solving, team coordination, and understanding what makes UX click", 
  "Music & Art - Creative outlets that keep my brain flexible and my solutions fresh",
  "Tech Meetups - Love connecting with other developers and learning from their experiences",
  "Learning New Technologies - Currently diving into AI integration and modern frameworks",
  "Project Management - From film sets to code sprints, organizing chaos into results"
];

export default function AboutMe() {
  return (
    <div className="bg-[#fdfcf9] p-4 sm:p-6 md:p-8 lg:p-6 rounded-lg shadow-sm transition-all duration-200 border border-[#e8e3d8] relative overflow-hidden hover:-translate-y-0.5 hover:shadow-md hover:border-[rgba(41,82,125,0.1)]">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold text-[#05082e] mb-4 tracking-tight">
        Hi, I'm Tal Yaakobi
      </h3>
      
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-8">
        <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-base leading-relaxed text-[#295a7d]">
          I'm a computer science graduate who left TV production to pursue development, with a clear goal to create accessibility solutions that make a difference. At 29, I bring the same creative energy and problem-solving skills from my production background into building thoughtful software that solves real problems.
        </p>
      </div>
      
      <h4 className="text-base sm:text-lg md:text-xl lg:text-lg font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-4 text-[#05082e]">
        Professional Interests & Strengths
      </h4>
      
      <ul className="m-0 p-0 list-none">
        {interests.map((interest, index) => (
          <li 
            key={index} 
            className="flex items-start gap-2 sm:gap-3 md:gap-4 lg:gap-3 mb-2 sm:mb-3 md:mb-4 lg:mb-3 p-2 sm:p-3 md:p-4 lg:p-3 rounded-lg leading-snug bg-[#f8f6f1]"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-2 lg:h-2 bg-[var(--error)] rounded-full mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-2 flex-shrink-0"></span>
            <span className="text-sm sm:text-base md:text-lg lg:text-base text-[#295a7d]">{interest}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 