import { motion } from "framer-motion";

export default function ContactForm() {
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('taltal2345@gmail.com');
      alert('Email address copied to clipboard!\ntaltal2345@gmail.com');
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = 'taltal2345@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Email address copied to clipboard!\ntaltal2345@gmail.com');
    }
  };

  return (
    <motion.button
      onClick={handleEmailClick}
      className="social-link message-link"
      aria-label="Copy Email Address"
      whileHover={{ 
        y: -8, 
        rotate: 5, 
        scale: 1.1,
        color: "var(--primary)",
        transition: { duration: 0.15, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
      style={{ background: 'none', border: 'none' }}
    >
      <svg
        className="social-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </motion.button>
  );
} 