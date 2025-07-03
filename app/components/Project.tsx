import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  status?: string;
  statusColor?: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export default function Project({ 
  title, 
  description, 
  technologies, 
  status = "Completed",
  statusColor = "#f59e0b", // amber-500
  featured = false,
  githubUrl,
  liveUrl
}: ProjectProps) {
  return (
    <div className="bg-amber-50/80 border border-amber-200/60 rounded-lg p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300/60 group h-[320px] flex flex-col">
      <div className="space-y-2 flex-grow">
        <div className="space-y-1.5">
          {featured && (
            <div className="inline-block bg-amber-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
          <h3 className="text-base font-bold text-amber-900 tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-amber-800 leading-relaxed text-xs line-clamp-3 min-h-[45px]">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1 min-h-[60px] content-start">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="inline-block bg-amber-100/50 text-amber-900 px-1.5 py-0.5 rounded text-xs font-medium border border-amber-200/60 hover:bg-amber-200/50 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-3 mt-2 border-t border-amber-200/60">
        <span 
          className="px-2 py-0.5 rounded-full text-white text-xs font-medium"
          style={{ backgroundColor: statusColor }}
        >
          {status}
        </span>
        <div className="flex gap-1.5">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 bg-transparent border border-amber-700 text-amber-800 rounded text-xs font-medium transition-all duration-200 hover:bg-amber-700 hover:text-white hover:scale-105"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 bg-amber-600 text-white rounded text-xs font-medium transition-all duration-200 hover:bg-amber-700 hover:scale-105"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 