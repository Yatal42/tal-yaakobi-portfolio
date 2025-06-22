import { motion } from "framer-motion";

interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-8 text-[#05082e] relative">
      {children}
      <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-8 sm:w-10 md:w-12 lg:w-10 h-0.5 bg-[var(--error)] rounded-sm"></div>
    </h2>
  );
} 