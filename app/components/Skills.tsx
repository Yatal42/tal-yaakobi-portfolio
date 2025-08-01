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
    items: ["Node.js", "nest.js", "C#", "Python", "Express", "API Design","REST API"],
  },
  {
    name: "AI",
    icon: Smartphone,
    items: ["Cursor", "github copilot", "OpenAI", "vibe-coding", "prompt engineering"],
  },
  {
    name: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "mySQL Workbench"],
  },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-6">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default Skills; 