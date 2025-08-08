import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});
  const email = "taltal2345@gmail.com";
  const phone = "050-9251635"; 

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ [type]: true });
      setTimeout(() => setCopyStatus({ [type]: false }), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyStatus({ [type]: true });
      setTimeout(() => setCopyStatus({ [type]: false }), 2000);
    }
  };

  const buttonClasses = "flex items-center gap-3 px-4 py-2 text-[#05082e] transition-all duration-200 w-full sm:w-auto justify-center sm:justify-start";
  const iconClasses = "w-6 h-6";

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-8 p-4 sm:p-8">
      <motion.button
        onClick={() => handleCopy(email, 'email')}
        className={buttonClasses}
        aria-label="Copy email address"
        whileHover={{ 
          y: -8, 
          rotate: 5, 
          scale: 1.1,
          color: "#295a7d",
          transition: { duration: 0.15, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-3">
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="font-light whitespace-nowrap">{copyStatus['email'] ? 'Copied!' : 'Copy Email'}</span>
        </div>
      </motion.button>

      {/* Copy Phone Button */}
      <motion.button
        onClick={() => handleCopy(phone, 'phone')}
        className={buttonClasses}
        aria-label="Copy phone number"
        whileHover={{ 
          y: -8, 
          rotate: 5, 
          scale: 1.1,
          color: "#295a7d",
          transition: { duration: 0.15, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-3">
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="font-light whitespace-nowrap">{copyStatus['phone'] ? 'Copied!' : 'Copy Phone'}</span>
        </div>
      </motion.button>

      {/* View CV Button */}
      <motion.a
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        aria-label="View CV"
        whileHover={{ 
          y: -8, 
          rotate: 5, 
          scale: 1.1,
          color: "#295a7d",
          transition: { duration: 0.15, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-3">
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="font-light whitespace-nowrap">View CV</span>
        </div>
      </motion.a>
    </div>
  );
}