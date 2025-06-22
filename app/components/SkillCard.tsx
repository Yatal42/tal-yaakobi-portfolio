import React from "react";

interface SkillCardProps {
  skill: {
    name: string;
    icon: React.ComponentType<{ className?: string; color?: string; }>;
    items: string[];
    bgColor: string;
    borderColor: string;
    iconColor: string;
  };
}

export default function SkillCard({ skill }: SkillCardProps) {
  const IconComponent = skill.icon;

  return (
    <div 
      className="h-full rounded-lg p-4 sm:p-5 md:p-4 lg:p-4"
      style={{
        backgroundColor: skill.bgColor,
        border: `1px solid ${skill.borderColor}`
      }}
    >
      <div className="flex items-center mb-3 sm:mb-4 md:mb-3 lg:mb-3">
        <div className="p-1.5 sm:p-2 md:p-1.5 lg:p-1.5 bg-white rounded-md mr-3 sm:mr-3 md:mr-3 lg:mr-3">
          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-4 lg:h-4" color={skill.iconColor} />
        </div>
        <h3 className="font-semibold text-sm sm:text-base md:text-sm lg:text-sm" style={{color: '#3a3226'}}>{skill.name}</h3>
      </div>
      <ul className="space-y-1.5 sm:space-y-2 md:space-y-1.5 lg:space-y-1.5 pl-1">
        {skill.items.map((item) => (
          <li key={item} className="flex items-center text-xs sm:text-sm md:text-xs lg:text-xs" style={{color: '#5c544a'}}>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-1 md:h-1 lg:w-1 lg:h-1 rounded-full mr-2 sm:mr-2.5 md:mr-2 lg:mr-2 bg-[var(--error)]"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
} 