import { useEffect, useState } from 'react';
import Window from './ui/Window';
import Modal from './ui/Modal';
import type { ProjectCardProps } from '../types/project';
import { useI18n } from '../lib/locale';

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useI18n();
  const { title, description } = t.development.projectCopy[project.id];
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const statusClass = project.status === 'Completed' ? 'badge-enrolled' : 'badge-soon';

  useEffect(() => {
    setIsVideoOpen(false);
  }, [project.id]);

  return (
    <>
      <Window title={`${project.id}.exe`} className="project-window">
        <div className="project">
          <div className="project-head">
            <h3 className="project-title">{title}</h3>
            <span className={`badge ${statusClass}`}>
              {t.development.status[project.status as 'Completed' | 'In Development']}
            </span>
          </div>
          <p className="project-description">{description}</p>
          <ul className="chip-list chip-list-sm" aria-label={t.development.technologiesLabel}>
            {project.technologies.map((tech) => (
              <li key={tech} className="chip" dir="ltr">{tech}</li>
            ))}
          </ul>
          <div className="project-links">
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                {t.development.github}
              </a>
            ) : null}
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                {t.development.live}
              </a>
            ) : null}
            {project.videoId ? (
              <button type="button" className="btn btn-primary btn-sm" onClick={() => setIsVideoOpen(true)}>
                <span aria-hidden="true">▶</span> {t.development.video}
              </button>
            ) : null}
          </div>
        </div>
      </Window>

      {project.videoId ? (
        <Modal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          windowTitle="video.mp4"
          label={`${title} video`}
          closeLabel={t.development.closeVideo}
        >
          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0`}
              title={`${title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default ProjectCard;
