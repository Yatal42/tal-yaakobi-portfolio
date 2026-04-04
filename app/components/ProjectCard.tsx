import { useEffect, useMemo, useState } from 'react';
import type { ProjectCardProps } from '../types/project';

const ProjectCard = ({ project, isActive }: ProjectCardProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoEmbedUrl = useMemo(() => {
    if (!project.videoId) return '';
    return `https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0`;
  }, [project.videoId]);

  useEffect(() => {
    setIsVideoOpen(false);
  }, [project.title, project.videoId]);

  useEffect(() => {
    if (!isVideoOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVideoOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isVideoOpen]);

  if (!isActive) return null;

  return (
    <>
      <div className="svg-project-window">
        <img
          src="/assets/project-window.svg"
          alt="Project Window"
          className="window-background"
        />

        <div className="project-content-overlay">
          <div className="project-title-overlay">
            <h3>{project.title}</h3>
          </div>

          <div className="project-main-content">
            <div className="project-content-area">
              <div className="project-description">
                <p>{project.description.length > 250 ? project.description.substring(0, 250) + "..." : project.description}</p>
              </div>

              <div className="project-technologies">
                {project.technologies.slice(0, 6).map((tech: string, index: number) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-footer">
              <div className="project-status">
                <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>

              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--github"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--live"
                  >
                    Live
                  </a>
                )}
                {project.videoId && (
                  <button
                    type="button"
                    className="project-link project-link--video"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    Video
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && videoEmbedUrl && (
        <div
          className="project-video-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} video`}
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="project-video-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-video-close"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              x
            </button>
            <iframe
              className="project-video-iframe"
              src={videoEmbedUrl}
              title={`${project.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
