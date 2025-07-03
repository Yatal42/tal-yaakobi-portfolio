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
  const brandColor = "#d97706"; // amber-600

  return (
    <div 
      className="group h-full rounded-lg p-4 sm:p-5 bg-amber-50/80 border border-amber-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-amber-300/60"
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="p-2 bg-amber-200 group-hover:bg-amber-300 rounded-md mr-3 transition-colors duration-300">
          <IconComponent className="w-5 h-5 transition-colors duration-300" color="#d97706" />
        </div>
        <h3 className="font-semibold text-base text-amber-900 group-hover:text-amber-800 transition-colors duration-300">{skill.name}</h3>
      </div>
      <ul className="space-y-2 pl-1">
        {skill.items.map((item) => (
          <li key={item} className="flex items-center text-sm text-amber-800">
            <span className="w-1.5 h-1.5 rounded-full mr-2.5 bg-amber-500 group-hover:bg-amber-600 transition-colors duration-300"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
} 