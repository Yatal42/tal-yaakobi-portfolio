import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "My Portfolio",
    description:
      "Personal portfolio site built with React, TypeScript, and Tailwind CSS. Includes a custom retro UI, interactive sections, and accessibility-focused structure.",
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
    id: "chord",
    title: "Chord-I",
    description:
      "AI-powered chord detection system that extracts chords from songs using machine learning and audio processing. Currently focused on accuracy and real-time performance.",
    technologies: [
      "AI",
      "Machine Learning",
      "Audio Processing",
      "Python",
      "TypeScript",
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
    id: "popcorn",
    title: "Popcorn Palace",
    description:
      "Backend cinema ticket-booking system built with NestJS, PostgreSQL, TypeORM, and Docker. Includes a scalable REST API and strong unit and end-to-end test coverage.",
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
    id: "gantt",
    title: "Task & Projects Gantt Chart",
    description:
      "Full-stack task and project planner with dependency handling, date shifting, and live updates. Built with React + TypeScript on the frontend and Node.js + Express + MySQL on the backend.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    status: "Completed",
    githubUrl: "https://github.com/Yatal42/React-task-Gantt-Chart",
    videoId: "mx6-K3wZFmE",
  },
  {
    id: "calories",
    title: "Calories Tracker - Frontend",
    description:
      "Frontend for a calorie-tracking application with meal logging, calorie monitoring, and a responsive experience.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "IndexedDB"],
    status: "Completed",
    githubUrl: "https://github.com/Yatal42/Calories_Frontend_Project",
    liveUrl: "https://yatal42.github.io/Calories_Frontend_Project/",
    videoId: "KPf_iX9jZ7U",
  },
];
