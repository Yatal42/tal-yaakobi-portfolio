import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
}

export default function Project({ title, description, technologies }: ProjectProps) {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h3 
        className="card-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <motion.div 
        className="tags"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {technologies.map((tech, index) => (
          <motion.span 
            key={index} 
            className="tag"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
} 