import { Code, Target, Brain, Users, Sparkles } from "lucide-react";

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
  return (
    <div className="bg-[#fdfcf9]/95 p-6 sm:p-8 rounded-lg shadow-[0_2px_8px_rgba(5,8,46,0.12)] transition-all duration-200 border border-[#e8e3d8]">
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="w-5 h-5 text-[#295a7d]" />
        <h4 className="text-lg sm:text-xl font-bold tracking-tight text-[#05082e] font-display">
          Core Strengths
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {strengths.map((strength, index) => (
          <div 
            key={index}
            className="bg-[#f8f6f1] rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            <div className="p-4 border-b border-[#e8e3d8]">
              <div className="flex items-center gap-2">
                <strength.icon className="w-5 h-5 text-[#295a7d]" />
                <h5 className="saira-condensed-bold text-[#05082e] text-lg">
                  {strength.title}
                </h5>
              </div>
            </div>
            
            <div className="p-4">
              <p className="saira-condensed-regular text-[#295a7d] text-base leading-relaxed mb-4">
                {strength.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {strength.keywords.map((keyword, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-1 bg-white text-[#295a7d] rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}