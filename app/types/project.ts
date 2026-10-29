export interface Project {
  id: "portfolio" | "chord" | "popcorn" | "gantt" | "calories";
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
}

export interface ProjectCarouselProps {
  projects: Project[];
}
