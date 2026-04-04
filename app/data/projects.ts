import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "My Portfolio",
    description:
      "My personal portfolio website, the one you are currently viewing. Built with React, TypeScript, and Tailwind CSS, with a custom retro-inspired UI and interactive sections. It was developed with the help of Cursor AI.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Cursor AI",
    ],
    status: "Completed",
    githubUrl: "https://github.com/Yatal42/tal-yaakobi-portfolio",
  },
  {
    title: "Chord-I",
    description:
      "AI-powered chord detection system that extracts chords from songs using machine learning algorithms and audio processing techniques. Currently in active development with focus on accuracy and real-time processing.",
    technologies: [
      "AI",
      "Machine Learning",
      "Audio Processing",
      "Python",
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "OpenAI",
      "Hugging Face",
      "Web Audio API",
    ],
    status: "In Development",
  },
  {
    title: "Popcorn Palace",
    description:
      "Backend cinema ticket booking system built with NestJS, PostgreSQL, TypeORM, and Docker. Features a robust REST API, scalable architecture, and comprehensive test coverage with unit & E2E tests.",
    technologies: [
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Docker",
      "Unit Tests",
      "E2E Tests",
    ],
    status: "Completed",
    githubUrl: "https://github.com/Yatal42/popcorn-palace",
  },
  {
    title: "Task & projects Gantt Chart",
    description:
      "Full-stack project for managing tasks and projects with dependency handling, date shifting, and live updates. Built with React + TypeScript on the frontend and Node.js + Express + MySQL on the backend.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    status: "Completed",
    githubUrl: "https://github.com/Yatal42/React-task-Gantt-Chart",
    videoId: "mx6-K3wZFmE",
  },
  {
    title: "Calories Tracker - Frontend",
    description:
      "Frontend interface for the calories tracking application. Provides user-friendly interface for meal logging and calorie monitoring with responsive design.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "indexDB"],
    status: "Completed",
    githubUrl: "https://github.com/Yatal42/Calories_Frontend_Project",
    liveUrl: "https://yatal42.github.io/Calories_Frontend_Project/",
    videoId: "KPf_iX9jZ7U",
  },
];
