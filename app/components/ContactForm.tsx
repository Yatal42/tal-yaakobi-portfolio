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
      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 flex items-center justify-center text-amber-900 transition-all duration-200"
      aria-label="Copy Email Address"
      whileHover={{ 
        y: -8, 
        rotate: 5, 
        scale: 1.1,
        color: "#d97706",
        transition: { duration: 0.15, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8"
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