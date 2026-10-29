import { useState } from 'react';
import ProjectCard from './ProjectCard';
import NavigationButton from './NavigationButton';
import type { ProjectCarouselProps } from '../types/project';
import { useI18n } from '../lib/locale';

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!projects || projects.length === 0) {
    return <p className="reviews-empty">{t.development.empty}</p>;
  }

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="project-carousel">
      <ProjectCard project={projects[currentIndex]} />
      <div className="carousel-controls">
        <NavigationButton
          direction="prev"
          onClick={prevProject}
          disabled={projects.length <= 1}
          ariaLabel={t.development.previous}
        />
        <span className="carousel-counter" dir="ltr">
          {currentIndex + 1} / {projects.length}
        </span>
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
