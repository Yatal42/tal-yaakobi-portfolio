import { motion } from "framer-motion";
import Laptop3D from "./Laptop3D";

export default function MainHeadline() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Hi, I'm Tal Yaakobi
          </motion.h1>
          <motion.div 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <p>I'm a computer science graduate who left TV production to pursue development, with a clear goal to create accessibility solutions that make a difference. At 29, I bring the same creative energy and problem-solving skills from my production background into building thoughtful software that solves real problems.</p>
            
            <h4>What drives me?</h4>
            <p>Exploring new technologies, approaching each project with curiosity and enthusiasm, connecting with new people at meetups to learn and share ideas, and documenting this journey honestly on <a href="https://www.linkedin.com/in/tal-yaakobi-191059227/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        >
          <Laptop3D />
        </motion.div>
      </div>
    </section>
  );
} 