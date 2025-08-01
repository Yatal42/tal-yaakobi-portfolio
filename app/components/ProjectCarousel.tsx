import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Project from "./Project";

import VideoDialog from "./VideoDialog";

const projects = [
  {
    title: "My Portfolio",
    description: "My personal portfolio website, the one you are currently viewing. Built with React, TypeScript, and Tailwind CSS, and includes a 3D scene made with Spline. It was developed with the help of Cursor AI.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Spline", "Framer Motion", "Cursor AI"],
    status: "Completed",
    statusColor: "#295a7d",
    featured: true,
    category: "frontend",
    githubUrl: "https://github.com/Yatal42/tal-yaakobi-portfolio",
    liveUrl: ""
  },
  {
    title: "Chord-I",
    description: "AI-powered chord detection system that extracts chords from songs using machine learning algorithms and audio processing techniques. Currently in active development with focus on accuracy and real-time processing.",
    technologies: ["AI", "Machine Learning", "Audio Processing", "Python", "Typescript", "React", "Next.js", "Tailwind CSS", "Vercel", "OpenAI", "Hugging Face", "Web Audio API"],
    status: "In Development",
    statusColor: "#295a7d",
    featured: false,
    category: "ai",
    githubUrl: "https://github.com/Yatal42/chord-I",
    liveUrl: ""
  },
  {
    title: "Popcorn Palace",
    description: "Backend cinema ticket booking system built with NestJS, PostgreSQL, TypeORM, and Docker. Features a robust REST API, scalable architecture, and comprehensive test coverage with unit & E2E tests.",
    technologies: ["NestJS", "PostgreSQL", "TypeORM", "Docker", "Unit Tests", "E2E Tests"],
    status: "Completed",
    statusColor: "#295a7d",
    featured: false,
    category: "backend",
    githubUrl: "https://github.com/Yatal42/popcorn-palace",
    liveUrl: ""
  },
  {
    title: "Task & projects Gantt Chart",
    description: "Full-stack project for managing tasks and projects with dependency handling, date shifting, and live updates. Built with React + TypeScript on the frontend and Node.js + Express + MySQL on the backend.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    status: "Completed",
    statusColor: "#295a7d",
    featured: false,
    category: "fullstack",
    githubUrl: "https://github.com/Yatal42/React-task-Gantt-Chart",
    liveUrl: "",
    videoId: "mx6-K3wZFmE"
  },
  {
    title: "Calories Tracker - Backend",
    description: "Backend service for tracking meals and calorie intake, built with Express.js and MongoDB. Features REST API with validation and comprehensive meal tracking capabilities.",
    technologies: ["Express.js", "MongoDB", "Node.js", "REST API", "Validation"],
    status: "Completed",
    statusColor: "#295a7d",
    featured: false,
    category: "backend",
    githubUrl: "https://github.com/Yatal42/Calories_Backend_Project",
    liveUrl: ""
  },
  {
    title: "Calories Tracker - Frontend",
    description: "Frontend interface for the calories tracking application. Provides user-friendly interface for meal logging and calorie monitoring with responsive design.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "indexDB"],
    status: "Completed",
    statusColor: "#295a7d",
    featured: false,
    category: "frontend",
    githubUrl: "https://github.com/Yatal42/Calories_Frontend_Project",
    liveUrl: "https://yatal42.github.io/Calories_Frontend_Project/",
    videoId: "KPf_iX9jZ7U"
  },
  {
    title: "Paint App (.NET)",
    description: "A drawing application supporting shapes, colors, file operations, and real-time rendering events. Built as a team project using C# and WinForms with comprehensive drawing logic.",
    technologies: ["C#", "WinForms", ".NET", "GDI+", "File I/O", "Team Project"],
    status: "Completed",
    statusColor: "#295a7d",
    featured: false,
    category: "desktop",
    githubUrl: "https://github.com/snuffles5/Paint",
    liveUrl: "",
    videoId: "EjdscaC1MF0"
  },
  {
    title: "Othello Game (.NET)",
    description: "Classic Othello (Reversi) game implemented in C# and WinForms. Features encapsulated game logic, turn-based gameplay, interactive UI, and visual feedback for an engaging gaming experience.",
    technologies: ["C#", "WinForms", ".NET", "OOP", "Game Logic", "Interactive UI"],
    status: "Completed",
    statusColor: "#295a7d",
    featured: false,
    category: "desktop",
    githubUrl: "https://github.com/Yatal42/OthelloGameWinApp",
    liveUrl: ""
  }
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const nextProject = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    
    if (currentIndex > 0) {
      visibleProjects.push({
        project: filteredProjects[currentIndex - 1],
        position: 'prev'
      });
    }
    
    visibleProjects.push({
      project: filteredProjects[currentIndex],
      position: 'current'
    });
    
    if (currentIndex < filteredProjects.length - 1) {
      visibleProjects.push({
        project: filteredProjects[currentIndex + 1],
        position: 'next'
      });
    }
    
    return visibleProjects;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Enhanced navigation buttons */}
      <button
        onClick={prevProject}
        disabled={currentIndex === 0}
        className={`absolute left-2 sm:left-0 md:left-4 lg:left-0 top-1/2 transform -translate-y-1/2 z-20 rounded-none p-3 sm:p-3.5 md:p-4 lg:p-3.5 transition-all duration-300 group ${
          currentIndex === 0 
            ? "bg-[#f8f6f1] border border-[#e8e3d8] text-[#e8e3d8] cursor-not-allowed" 
            : "bg-[#fdfcf9] border border-[#e8e3d8] text-[#295a7d] hover:bg-[#05082e] hover:border-[#05082e] hover:text-white hover:scale-125 active:scale-110 active:translate-x-1"
        }`}
        aria-label="Previous project"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110" />
        {/* Focus ring for accessibility */}
        <div className="absolute inset-0 border-2 border-transparent group-focus:border-[#05082e]"></div>
      </button>

      <button
        onClick={nextProject}
        disabled={currentIndex === filteredProjects.length - 1}
        className={`absolute right-2 sm:right-0 md:right-4 lg:right-0 top-1/2 transform -translate-y-1/2 z-20 rounded-none p-3 sm:p-3.5 md:p-4 lg:p-3.5 transition-all duration-300 group ${
          currentIndex === filteredProjects.length - 1
            ? "bg-[#f8f6f1] border border-[#e8e3d8] text-[#e8e3d8] cursor-not-allowed"
            : "bg-[#fdfcf9] border border-[#e8e3d8] text-[#295a7d] hover:bg-[#05082e] hover:border-[#05082e] hover:text-white hover:scale-125 active:scale-110 active:-translate-x-1"
        }`}
        aria-label="Next project"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110" />
        {/* Focus ring for accessibility */}
        <div className="absolute inset-0 border-2 border-transparent group-focus:border-[#05082e]"></div>
      </button>

      <div className="px-8 sm:px-12 md:px-16 lg:px-12">
        <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-4 overflow-hidden">
          {getVisibleProjects().map(({ project, position }, index) => (
            <div
              key={`${currentIndex}-${position}`}
              className={`transition-all duration-500 ease-in-out ${
                position === 'current' 
                  ? 'scale-100 opacity-100 z-10' 
                  : 'scale-85 opacity-30 blur-sm z-0 hidden sm:block'
              } ${
                position === 'prev' ? 'transform -translate-x-2' : 
                position === 'next' ? 'transform translate-x-2' : ''
              }`}
              style={{
                width: position === 'current' ? '100%' : '300px',
                maxWidth: position === 'current' ? '400px' : '300px',
                flexShrink: 0
              }}
            >
              <Project
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                status={project.status}
                statusColor={project.statusColor}
                featured={project.featured}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                videoId={project.videoId}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced navigation dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {filteredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`group relative transition-all duration-300 ${
              index === currentIndex
                ? "w-8 md:w-10 lg:w-8 h-2 md:h-2.5 lg:h-2 bg-[#05082e]"
                : "w-2 md:w-2.5 lg:w-2 h-2 md:h-2.5 lg:h-2 bg-[#e8e3d8] hover:bg-[#295a7d]"
            }`}
            aria-label={`Go to project ${index + 1}`}
          >
            <div className="absolute inset-0 bg-[#05082e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            {/* Focus ring for accessibility */}
            <div className="absolute -inset-1 border-2 border-transparent group-focus:border-[#05082e]"></div>
          </button>
        ))}
      </div>

      <div className="text-center mt-3">
        <span className="text-xs md:text-sm lg:text-xs text-[#295a7d]">
          {currentIndex + 1} of {filteredProjects.length}
        </span>
      </div>
    </div>
  );
} 