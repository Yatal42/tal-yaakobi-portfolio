const strengths = [
  "Curious & Always Learning - I'm a naturally curious person, passionate about learning and growing as a developer. I'm actively expanding my technical skills and currently focused on deepening my knowledge of modern web frameworks and AI integration.",
  "Building for People - Technology is for people. I approach coding with empathy, always keeping the end-user in mind. I'm motivated to contribute to projects that solve real problems and create a positive user experience.",
  "A Creative Approach to Code - I enjoy the creative side of development and like breaking down complex problems to write clean, thoughtful code. My fresh perspective helps me contribute new ideas to the development process.",
  "Stronger Together - I believe the best ideas come from collaboration. I'm an active team player who thrives on shared knowledge and open communication, contributing to a positive environment where we can build great things together.",
  "Focused & Driven - I'm a focused developer who enjoys taking ownership of my tasks. Through my academic and personal projects, I've learned to see features through from start to finish, and I'm eager to apply this drive to deliver reliable code in a team environment."
];

export default function Strengths() {
  return (
    <div className="bg-[#fdfcf9] p-4 sm:p-6 md:p-8 lg:p-6 rounded-lg shadow-sm transition-all duration-200 border border-[#e8e3d8] relative overflow-hidden hover:-translate-y-0.5 hover:shadow-md hover:border-[rgba(41,82,125,0.1)] h-full">
      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold mb-4 tracking-tight text-[#05082e]">
        My Strengths
      </h4>
      
      <ul className="m-0 p-0 list-none">
        {strengths.map((strength, index) => (
          <li 
            key={index} 
            className="flex items-start gap-3 mb-4 p-3 rounded-lg bg-[#f8f6f1]"
          >
            <span className="w-2 h-2 bg-[var(--error)] rounded-full mt-1.5 flex-shrink-0"></span>
            <div className="text-sm sm:text-base text-[#295a7d]">
              <span className="font-bold text-[#05082e]">{strength.split(' - ')[0]}</span>
              <span className="text-[#295a7d] block mt-1">{strength.split(' - ')[1]}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 