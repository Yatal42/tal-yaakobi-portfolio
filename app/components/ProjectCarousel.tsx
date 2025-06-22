import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Project from "./Project";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, product management, and Stripe integration.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Stripe API", "JWT"],
    status: "Completed",
    statusColor: "#295a7d",
    featured: true,
    category: "fullstack",
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team collaboration features.",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Real-time DB", "Drag & Drop"],
    status: "In Development",
    statusColor: "#d29135",
    featured: false,
    category: "frontend",
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager-demo.com"
  },
  {
    title: "Weather Dashboard",
    description: "Responsive weather dashboard with 7-day forecasts and location-based services.",
    technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3", "Geolocation", "Local Storage"],
    status: "Completed",
    statusColor: "#295a7d",
    featured: false,
    category: "frontend",
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.com"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with multi-platform integration.",
    technologies: ["Vue.js", "Python", "Django", "Chart.js", "Twitter API", "Instagram API", "PostgreSQL"],
    status: "Completed",
    statusColor: "#295a7d",
    featured: false,
    category: "fullstack",
    githubUrl: "https://github.com/username/social-dashboard",
    liveUrl: "https://social-dashboard-demo.com"
  },
  {
    title: "AI Chat Application",
    description: "Modern chat application powered by AI with real-time messaging and smart responses.",
    technologies: ["React", "Socket.io", "OpenAI API", "MongoDB", "Express", "JWT", "Redis"],
    status: "In Development",
    statusColor: "#d29135",
    featured: false,
    category: "fullstack",
    githubUrl: "https://github.com/username/ai-chat",
    liveUrl: "https://ai-chat-demo.com"
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


      
      <button
        onClick={prevProject}
        disabled={currentIndex === 0}
        className={`absolute left-2 sm:left-0 md:left-4 lg:left-0 top-1/2 transform -translate-y-1/2 z-20 rounded-full p-2 sm:p-2.5 md:p-3 lg:p-2.5 shadow-md transition-all duration-200 ${
          currentIndex === 0 
            ? "bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed" 
            : "bg-white border border-[#e8e3d8] text-[var(--error)] hover:shadow-lg hover:bg-[var(--error)] hover:text-white hover:border-[var(--error)] hover:scale-110 active:scale-95 active:translate-x-1"
        }`}
        aria-label="Previous project"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 transition-transform duration-150 active:scale-75" />
      </button>

      <button
        onClick={nextProject}
        disabled={currentIndex === filteredProjects.length - 1}
        className={`absolute right-2 sm:right-0 md:right-4 lg:right-0 top-1/2 transform -translate-y-1/2 z-20 rounded-full p-2 sm:p-2.5 md:p-3 lg:p-2.5 shadow-md transition-all duration-200 ${
          currentIndex === filteredProjects.length - 1
            ? "bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white border border-[#e8e3d8] text-[var(--error)] hover:shadow-lg hover:bg-[var(--error)] hover:text-white hover:border-[var(--error)] hover:scale-110 active:scale-95 active:-translate-x-1"
        }`}
        aria-label="Next project"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 transition-transform duration-150 active:scale-75" />
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
                width: position === 'current' ? '100%' : '250px',
                maxWidth: position === 'current' ? '320px' : '250px',
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
              />
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-center mt-6 space-x-2">
        {filteredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 md:h-2 lg:h-1.5 rounded-full transition-all duration-200 hover:scale-125 active:scale-75 ${
              index === currentIndex
                ? "bg-[var(--error)] w-6 md:w-8 lg:w-6 scale-110"
                : "bg-[#e8e3d8] w-1.5 md:w-2 lg:w-1.5 hover:bg-[var(--error)] hover:h-2 md:hover:h-2.5 lg:hover:h-2"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
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