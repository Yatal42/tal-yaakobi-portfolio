import React from "react";
import { Code, Database, Server, Smartphone } from "lucide-react";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "Frontend",
    icon: Code,
    items: ["React", "Vue.js", "TypeScript", "Next.js"],
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js", "Python", "Express", "API Design"],
  },
  {
    name: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Flutter", "iOS", "Android"],
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