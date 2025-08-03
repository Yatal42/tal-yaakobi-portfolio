import React from "react";
import { Code, Database, Server, Smartphone } from "lucide-react";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "Frontend",
    icon: Code,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js", "Nest.js", "C#", "Python", "Express", "API Design", "REST API"],
  },
  {
    name: "AI",
    icon: Smartphone,
    items: ["Cursor", "Github Copilot", "Vibe-Coding", "Prompt Engineering"],
  },
  {
    name: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "MySQL Workbench"],
  },
];

const Skills = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;