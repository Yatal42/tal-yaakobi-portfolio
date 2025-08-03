import { useState } from "react";
import { Play } from "lucide-react";
import VideoOverlay from "./VideoOverlay";

const GithubIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  status?: string;
  statusColor?: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  videoId?: string;
}

export default function Project({ 
  title, 
  description, 
  technologies, 
  status = "Completed",
  statusColor = "#295a7d", 
  featured = false,
  githubUrl,
  liveUrl,
  videoId
}: ProjectProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="bg-[#fdfcf9]/95 border border-[#e8e3d8] rounded-lg p-1.5 sm:p-2 md:p-3 shadow-[0_2px_8px_rgba(5,8,46,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(5,8,46,0.16)] group h-[200px] sm:h-[220px] md:h-[240px] flex flex-col">
        <div className="flex flex-col flex-grow min-h-0">
          <div className="mb-0.5 sm:mb-1">
            {featured && (
              <div className="inline-block bg-[#295a7d] text-white px-2 py-0.5 rounded-full text-xs font-semibold mb-1">
                Featured
              </div>
            )}
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#05082e] tracking-tight leading-tight font-display">
              {title}
            </h3>
          </div>

          <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-[#e8e3d8] scrollbar-track-transparent">
            <p className="text-[#295a7d] leading-tight text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-0.5 sm:gap-1 mb-1.5 sm:mb-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-[#f8f6f1] text-[#05082e] px-1 sm:px-1.5 md:px-2 py-0.5 rounded text-[10px] sm:text-xs md:text-sm font-medium border border-[#e8e3d8]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <span 
              className="inline-block px-2 py-0.5 rounded-full text-white text-xs font-medium"
              style={{ backgroundColor: statusColor }}
            >
              {status}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-end pt-1.5 mt-auto border-t border-[#e8e3d8]">
          <div className="flex gap-1">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0.5 px-1 sm:px-1.5 md:px-2 py-0.5 bg-transparent border border-[#05082e] text-[#05082e] rounded text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 hover:bg-[#05082e] hover:text-white hover:scale-105"
              >
                <GithubIcon />
                Code
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0.5 px-1 sm:px-1.5 md:px-2 py-0.5 bg-[#295a7d] text-white rounded text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 hover:bg-[#05082e] hover:scale-105"
              >
                <ExternalLinkIcon />
                Demo
              </a>
            )}
            {videoId && (
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-0.5 px-1 sm:px-1.5 md:px-2 py-0.5 bg-[#05082e] text-white rounded text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 hover:bg-[#295a7d] hover:scale-105"
              >
                <Play className="w-3 h-3" />
                Video
              </button>
            )}
          </div>
        </div>
      </div>

      {videoId && (
        <VideoOverlay
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoId={videoId}
        />
      )}
    </>
  );
}