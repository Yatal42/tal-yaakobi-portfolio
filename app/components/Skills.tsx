import React from "react";
import { Code, Database, Server, Smartphone } from "lucide-react";
import SkillCard from "./SkillCard";
import Heading from "./Heading";

const skills = [
  {
    name: "Frontend",
    icon: Code,
    items: ["React", "Vue.js", "TypeScript", "Next.js"],
    bgColor: "#f9f5ed",
    borderColor: "#e3d5b8",
    iconColor: "#d5a859",
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js", "Python", "Express", "API Design"],
    bgColor: "#f9f5ed",
    borderColor: "#e3d5b8",
    iconColor: "#d5a859",
  },
  {
    name: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
    bgColor: "#f9f5ed",
    borderColor: "#e3d5b8",
    iconColor: "#d5a859",
  },
  {
    name: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Flutter", "iOS", "Android"],
    bgColor: "#f9f5ed",
    borderColor: "#e3d5b8",
    iconColor: "#d5a859",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-[#fdfbf6]">
      <Heading>My Skills</Heading>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills; 