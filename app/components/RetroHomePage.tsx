import { useState, useEffect } from 'react';
import StarfieldBackground from './StarfieldBackground';
import RetroNavbar from './RetroNavbar';
import ProjectCarousel from './ProjectCarousel';
import Skills from './Skills';
import SocialLinks from './SocialLinks';
import type { Project } from '../types/project';

const RetroHomePage = () => {
  // Projects data from the existing codebase
  const projects: Project[] = [
    {
      title: "My Portfolio",
      description: "My personal portfolio website, the one you are currently viewing. Built with React, TypeScript, and Tailwind CSS, and includes a 3D scene made with Spline. It was developed with the help of Cursor AI.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Spline", "Framer Motion", "Cursor AI"],
      status: "Completed",
      githubUrl: "https://github.com/Yatal42/tal-yaakobi-portfolio"
    },
    {
      title: "Chord-I",
      description: "AI-powered chord detection system that extracts chords from songs using machine learning algorithms and audio processing techniques. Currently in active development with focus on accuracy and real-time processing.",
      technologies: ["AI", "Machine Learning", "Audio Processing", "Python", "Typescript", "React", "Next.js", "Tailwind CSS", "Vercel", "OpenAI", "Hugging Face", "Web Audio API"],
      status: "In Development"
    },
    {
      title: "Popcorn Palace",
      description: "Backend cinema ticket booking system built with NestJS, PostgreSQL, TypeORM, and Docker. Features a robust REST API, scalable architecture, and comprehensive test coverage with unit & E2E tests.",
      technologies: ["NestJS", "PostgreSQL", "TypeORM", "Docker", "Unit Tests", "E2E Tests"],
      status: "Completed",
      githubUrl: "https://github.com/Yatal42/popcorn-palace"
    },
    {
      title: "Task & projects Gantt Chart",
      description: "Full-stack project for managing tasks and projects with dependency handling, date shifting, and live updates. Built with React + TypeScript on the frontend and Node.js + Express + MySQL on the backend.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
      status: "Completed",
      githubUrl: "https://github.com/Yatal42/React-task-Gantt-Chart",
      videoId: "mx6-K3wZFmE"
    },
    {
      title: "Calories Tracker - Frontend",
      description: "Frontend interface for the calories tracking application. Provides user-friendly interface for meal logging and calorie monitoring with responsive design.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "indexDB"],
      status: "Completed",
      githubUrl: "https://github.com/Yatal42/Calories_Frontend_Project",
      liveUrl: "https://yatal42.github.io/Calories_Frontend_Project/",
      videoId: "KPf_iX9jZ7U"
    }
  ];



  return (
    <div className="retro-theme min-h-screen">
      <StarfieldBackground />
      <RetroNavbar />
      
      <div className="retro-container">
        {/* Hero Section */}
        <section className="retro-section relative">
          {/* Side Social Links */}
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
            <SocialLinks className="flex-col gap-4" />
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
            {/* Left Side - Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="pixel-heading">
                TAL<br />YAAKOBI
              </h1>
              <p className="pixel-subheading">FULL STACK DEVELOPER</p>
              <p className="retro-text mb-8">
                A passionate Computer Science BSc graduate, combining strong technical skills with creative vision.
              </p>
              
              <button className="journey-button">
                Journey.Start();
              </button>
            </div>
            
            {/* Right Side - Computer */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="retro-computer-container">
                <img 
                  src="/assets/retro-computer.svg" 
                  alt="Retro Computer Setup" 
                  className="w-80 lg:w-96 h-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Develops & Deploys Section */}
        <section id="projects" className="retro-section">
          <h2 className="retro-section-title">Develops & Deploys</h2>
          <ProjectCarousel projects={projects} />
        </section>

        {/* Skills Section */}
        <Skills />

        {/* About Section */}
        <section id="about" className="retro-section">
          <h2 className="retro-section-title">About Me</h2>
          
          <div className="max-w-4xl">
            <p className="retro-text text-center">
              A passionate Computer Science BSc graduate, combining strong technical skills with creative vision. 
              With expertise in full-stack development and a love for creating innovative solutions.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="retro-section mb-20">
          <h2 className="retro-section-title">Let's Collaborate</h2>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="retro-footer">
        Ready to build something amazing together?
      </div>
    </div>
  );
};

export default RetroHomePage;
