import { type MetaFunction } from "react-router";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import MainHeadline from "../components/MainHeadline";
import Heading from "../components/Heading";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Contact from "../components/Contact";
import "../styles/contact-form.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Tal Yaakobi - Creative Developer" },
    { name: "description", content: "Creative developer focused on accessibility solutions and innovative experiences" },
  ];
};

export default function Home() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of the project and the technologies used to create amazing user experiences.",
      technologies: ["React", "TypeScript", "3D Graphics"]
    },
    {
      title: "Project Two", 
      description: "A brief description of the project and the technologies used to build modern applications.",
      technologies: ["React", "Tailwind", "Motion"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navigation />
      
      <MainHeadline />

      <motion.section 
        id="about" 
        className="section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Heading>About Me</Heading>
        <div className="grid grid-cols-1">
          <Skills />
          <AboutMe />
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Heading>Featured Projects</Heading>
        <div className="grid grid-cols-2">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Heading>Let's Connect</Heading>
        <Contact />
      </motion.section>
    </motion.div>
  );
} 