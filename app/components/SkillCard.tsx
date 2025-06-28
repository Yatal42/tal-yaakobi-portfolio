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
  const brandColor = "#295a7d";

  return (
    <div 
      className="group h-full rounded-lg p-4 sm:p-5 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="p-2 bg-slate-100 group-hover:bg-[#295a7d]/10 rounded-md mr-3 transition-colors duration-300">
          <IconComponent className="w-5 h-5 transition-colors duration-300" color={brandColor} />
        </div>
        <h3 className="font-semibold text-base text-slate-800 group-hover:text-[#295a7d] transition-colors duration-300">{skill.name}</h3>
      </div>
      <ul className="space-y-2 pl-1">
        {skill.items.map((item) => (
          <li key={item} className="flex items-center text-sm text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full mr-2.5 bg-slate-300 group-hover:bg-[#295a7d] transition-colors duration-300"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
} 