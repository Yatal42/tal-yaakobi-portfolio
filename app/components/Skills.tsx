import { motion } from "framer-motion";
import { 
  FaReact, 
  FaCss3Alt, 
  FaHtml5, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaGit,
  FaDatabase
} from "react-icons/fa";
import { 
  SiNestjs, 
  SiNextdotjs, 
  SiDotnet, 
  SiPostgresql, 
  SiPostman, 
  SiTailwindcss, 
  SiTypeorm, 
  SiJavascript, 
  SiTypescript,
  SiMongodb,
  SiMysql
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Skills() {
  const skills = [
    { name: "TypeScript", icon: <SiTypescript className="skill-icon" style={{ color: "#3178C6" }} /> },
    { name: "JavaScript", icon: <SiJavascript className="skill-icon" style={{ color: "#F7DF1E" }} /> },
    { name: "React", icon: <FaReact className="skill-icon" style={{ color: "#61DAFB" }} /> },
    { name: "Python", icon: <FaPython className="skill-icon" style={{ color: "#3776AB" }} /> },
    
    { name: "Node.js", icon: <FaNodeJs className="skill-icon" style={{ color: "#339933" }} /> },
    { name: "Next.js", icon: <SiNextdotjs className="skill-icon" style={{ color: "#000000" }} /> },
    { name: "Nest.js", icon: <SiNestjs className="skill-icon" style={{ color: "#E0234E" }} /> },
    { name: "C# .NET", icon: <SiDotnet className="skill-icon" style={{ color: "#512BD4" }} /> },
    
    { name: "SQL", icon: <FaDatabase className="skill-icon" style={{ color: "#336791" }} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="skill-icon" style={{ color: "#336791" }} /> },
    { name: "MongoDB", icon: <SiMongodb className="skill-icon" style={{ color: "#47A248" }} /> },
    { name: "MySQL", icon: <SiMysql className="skill-icon" style={{ color: "#4479A1" }} /> },
    { name: "TypeORM", icon: <SiTypeorm className="skill-icon" style={{ color: "#FE0902" }} /> },
    
    { name: "Docker", icon: <FaDocker className="skill-icon" style={{ color: "#2496ED" }} /> },
    { name: "Cursor", icon: <img src="/icons/cursor.svg" alt="Cursor" className="skill-icon" /> },
    { name: "OpenAI", icon: <img src="/icons/openai.svg" alt="OpenAI" className="skill-icon" /> },
    { name: "Git", icon: <FaGit className="skill-icon" style={{ color: "#F05032" }} /> },

    { name: "Tailwind", icon: <SiTailwindcss className="skill-icon" style={{ color: "#06B6D4" }} /> },
    { name: "CSS3", icon: <FaCss3Alt className="skill-icon" style={{ color: "#1572B6" }} /> },
    { name: "HTML5", icon: <FaHtml5 className="skill-icon" style={{ color: "#E34F26" }} /> },
  ];

  return (
    <motion.div 
      className="card skills-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="card-title">Skills & Technologies</h3>
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-item"
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.02 }}
          >
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
} 