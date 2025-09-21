import type { ProjectCardProps } from '../types/project';

const ProjectCard = ({ project, isActive }: ProjectCardProps) => {
  if (!isActive) return null;

  return (
    <div className="svg-project-window">
      <img 
        src="/assets/project-window.svg" 
        alt="Project Window" 
        className="window-background"
      />
      
      {/* Content overlay positioned on the SVG */}
      <div className="project-content-overlay">
        {/* Title in title bar */}
        <div className="project-title-overlay">
          <h3>{project.title}</h3>
        </div>
        
        {/* Main content in window area */}
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
                  className="project-link project-link--video"
                  onClick={() => window.open(`https://youtube.com/watch?v=${project.videoId}`, '_blank')}
                >
                  Video
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
