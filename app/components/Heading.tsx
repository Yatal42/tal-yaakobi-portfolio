import { motion } from "framer-motion";

interface HeadingProps {
  children: React.ReactNode;
  id?: string;
}

export default function Heading({ children, id }: HeadingProps) {
  return (
    <h2 
      id={id} 
      className="section-title"
    >
      {children}
    </h2>
  );
} 