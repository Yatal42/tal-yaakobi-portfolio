export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  videoId?: string;
}

export interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

export interface ProjectCarouselProps {
  projects: Project[];
}
