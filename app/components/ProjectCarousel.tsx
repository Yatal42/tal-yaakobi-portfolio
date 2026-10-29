import { useState } from 'react';
import ProjectCard from './ProjectCard';
import NavigationButton from './NavigationButton';
import type { ProjectCarouselProps } from '../types/project';
import { useI18n } from '../lib/locale';

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (!projects || projects.length === 0) {
    return <div className="project-carousel-empty">{t.development.empty}</div>;
  }

  return (
    <div className="project-carousel">
      {/* Desktop: Navigation buttons on sides */}
      <div className="hidden lg:block">
        <NavigationButton 
          direction="prev" 
          onClick={prevProject}
          disabled={projects.length <= 1}
          ariaLabel={t.development.previous}
        />
      </div>
      
      <div className="project-carousel-content">
        <ProjectCard 
          project={projects[currentIndex]} 
          isActive={true}
        />
        
        <div className="project-counter">
          <span dir="ltr">{currentIndex + 1} / {projects.length}</span>
        </div>
      </div>
      
      <div className="hidden lg:block">
        <NavigationButton 
          direction="next" 
          onClick={nextProject}
          disabled={projects.length <= 1}
          ariaLabel={t.development.next}
        />
      </div>
      
      {/* Mobile: Navigation buttons below */}
      <div className="project-carousel-nav lg:hidden">
        <NavigationButton 
          direction="prev" 
          onClick={prevProject}
          disabled={projects.length <= 1}
          ariaLabel={t.development.previous}
        />
        <NavigationButton 
          direction="next" 
          onClick={nextProject}
          disabled={projects.length <= 1}
          ariaLabel={t.development.next}
        />
      </div>
    </div>
  );
};

export default ProjectCarousel;
