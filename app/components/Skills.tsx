import React from "react";
import { Code, Database, Server, Smartphone } from "lucide-react";
import SkillCard from "./SkillCard";
import Heading from "./Heading";

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
    <section id="skills" className="py-20 px-4 bg-[#fdfbf6]">
      <Heading>My Growing Toolkit</Heading>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills; 