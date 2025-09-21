import { useState } from 'react';
import ProjectCard from './ProjectCard';
import NavigationButton from './NavigationButton';
import type { ProjectCarouselProps } from '../types/project';

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (!projects || projects.length === 0) {
    return <div className="project-carousel-empty">No projects available</div>;
  }

  return (
    <div className="project-carousel">
      {/* Desktop: Navigation buttons on sides */}
      <div className="hidden lg:block">
        <NavigationButton 
          direction="prev" 
          onClick={prevProject}
          disabled={projects.length <= 1}
        />
      </div>
      
      <div className="project-carousel-content">
        <ProjectCard 
          project={projects[currentIndex]} 
          isActive={true}
        />
        
        <div className="project-counter">
          <span>{currentIndex + 1} / {projects.length}</span>
        </div>
      </div>
      
      <div className="hidden lg:block">
        <NavigationButton 
          direction="next" 
          onClick={nextProject}
          disabled={projects.length <= 1}
        />
      </div>
      
      {/* Mobile: Navigation buttons below */}
      <div className="project-carousel-nav lg:hidden">
        <NavigationButton 
          direction="prev" 
          onClick={prevProject}
          disabled={projects.length <= 1}
        />
        <NavigationButton 
          direction="next" 
          onClick={nextProject}
          disabled={projects.length <= 1}
        />
      </div>
    </div>
  );
};

export default ProjectCarousel;
