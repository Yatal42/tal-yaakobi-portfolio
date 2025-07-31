import React from "react";

interface SkillCardProps {
  skill: {
    name: string;
    icon: React.ComponentType<{ className?: string; color?: string; }>;
    items: string[];
  };
}

export default function SkillCard({ skill }: SkillCardProps) {
  const IconComponent = skill.icon;
  const primaryColor = "#05082e"; 

  return (
    <div 
      className="h-full rounded-lg p-4 sm:p-5 bg-[#fdfcf9]/95 border border-[#e8e3d8] shadow-[0_2px_8px_rgba(5,8,46,0.12)]"
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="p-2 bg-[#f8f6f1] rounded-md mr-3">
          <IconComponent className="w-5 h-5" color="#295a7d" />
        </div>
        <h3 className="font-display font-semibold text-lg text-[#05082e]">{skill.name}</h3>
      </div>
      <ul className="space-y-2 pl-1">
        {skill.items.map((item) => (
          <li key={item} className="flex items-center text-base text-[#295a7d]">
            <span className="w-1.5 h-1.5 rounded-full mr-2.5 bg-[#295a7d]"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}