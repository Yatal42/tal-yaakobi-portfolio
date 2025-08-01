import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-8 p-4 sm:p-8">
      <ContactForm />
      
      <a
        href="https://www.linkedin.com/in/tal-yaakobi-191059227/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 flex items-center justify-center text-[#05082e] transition-all duration-200 hover:-translate-y-2 hover:rotate-6 hover:scale-110 hover:text-[#295a7d]"
        aria-label="LinkedIn"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
      
      <a
        href="https://github.com/Yatal42"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 flex items-center justify-center text-[#05082e] transition-all duration-200 hover:-translate-y-2 hover:rotate-6 hover:scale-110 hover:text-[#295a7d]"
        aria-label="GitHub"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      
      <a
        href="/CV.pdf"
        download="Tal_Yaakobi_Resume.pdf"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 flex items-center justify-center text-[#05082e] transition-all duration-200 hover:-translate-y-2 hover:rotate-6 hover:scale-110 hover:text-[#295a7d]"
        aria-label="Download Resume"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,15.5L8.5,12H11V8H13V12H15.5L12,15.5Z" />
        </svg>
      </a>
    </div>
  );
} 