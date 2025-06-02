import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function AboutMe() {
  const interests = [
    "Accessibility Technology - Years supporting students with disabilities gave me deep insight into real user needs and technical requirements, with a dream to work on accessibility products",
    "Professional Journey - Love writing and sharing my career transition experiences.",
    "TV Production & Team Leadership - Experience managing crews and tight deadlines under pressure",
    "Gaming - Years of problem-solving, team coordination, and understanding what makes UX click", 
    "Music & Art - Creative outlets that keep my brain flexible and my solutions fresh",
    "Tech Meetups - Love connecting with other developers and learning from their experiences",
    "Learning New Technologies - Currently diving into AI integration and modern frameworks",
    "Project Management - From film sets to code sprints, organizing chaos into results"
  ];

  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <h3 className="card-title">Professional Interests & Strengths</h3>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ 
          margin: 0, 
          padding: 0, 
          listStyle: 'none',
          maxHeight: 'none',
          overflow: 'visible'
        }}
      >
        {interests.map((interest, index) => (
          <motion.li 
            key={index} 
            className="list-item"
            variants={itemVariants}
          >
            <span className="list-dot"></span>
            <span>{interest}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
} 