import { useEffect, useMemo, useState } from 'react';
import type { ProjectCardProps } from '../types/project';
import { useI18n } from '../lib/locale';

const ProjectCard = ({ project, isActive }: ProjectCardProps) => {
  const { locale, t } = useI18n();
  const copy = t.development.projectCopy[project.id];
  const title = copy.title;
  const description = copy.description;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoEmbedUrl = useMemo(() => {
    if (!project.videoId) return '';
    return `https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0`;
  }, [project.videoId]);

  useEffect(() => {
    setIsVideoOpen(false);
  }, [title, project.videoId]);

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
          alt={t.development.windowAlt}
          className="window-background"
        />

        <div className="project-content-overlay">
          <div className="project-title-overlay">
            <h3 dir={locale === "he" ? "rtl" : "ltr"}>{title}</h3>
          </div>

          <div className="project-main-content">
            <div className="project-content-area">
              <div className="project-description">
                <p dir={locale === "he" ? "rtl" : "ltr"}>{description.length > 250 ? description.substring(0, 250) + "..." : description}</p>
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
                  {t.development.status[project.status as "Completed" | "In Development"]}
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
                    {t.development.github}
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--live"
                  >
                    {t.development.live}
                  </a>
                )}
                {project.videoId && (
                  <button
                    type="button"
                    className="project-link project-link--video"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    {t.development.video}
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
          aria-label={`${title} video`}
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="project-video-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-video-close"
              onClick={() => setIsVideoOpen(false)}
              aria-label={t.development.closeVideo}
            >
              x
            </button>
            <iframe
              className="project-video-iframe"
              src={videoEmbedUrl}
              title={`${title} video`}
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
