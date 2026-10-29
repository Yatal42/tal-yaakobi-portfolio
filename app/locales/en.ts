export const en = {
  meta: {
    homeTitle: "Tal Yaakobi - CS Tutoring and Private Lessons",
    homeDescription:
      "Tutoring at the Student Advancement Center, private computer science lessons, and M.A. studies with a thesis on deaf people.",
    coursesTitle: "Courses | Tal Yaakobi",
    coursesDescription:
      "Coming soon: recorded courses in Probability for Undergraduate Computer Science, Automata and Formal Languages, and Computability and Complexity.",
    teachingTitle: "Teaching | Tal Yaakobi",
    teachingDescription:
      "Tutoring at the Student Advancement Center and private computer science lessons, with an emphasis on simple explanation and practice.",
    developmentTitle: "Development | Tal Yaakobi",
    developmentDescription:
      "Software engineering projects, technical experiments, and the stack Tal Yaakobi builds with.",
  },
  nav: {
    teaching: "</TEACHING>",
    courses: "</COURSES>",
    development: "</DEVELOPMENT>",
    about: "</ABOUT>",
    contact: "</CONTACT>",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    switchTo: "עברית",
    switchLabel: "עב",
  },
  hero: {
    subheading: "CS TUTOR · PRIVATE LESSONS · ACADEMIC",
    intro:
      "I tutor at the Student Advancement Center and give private computer science lessons. The focus is simple practice, from a point of view close to the student.",
    cta: "Get in touch",
    imageAlt: "Retro Computer Setup",
  },
  about: {
    title: "About",
    degree:
      "B.Sc. in computer science, Dean's List. M.A. student in Science and Technology Education, Well-being track. An academic researching how computer science is taught in academia, and specifically how deaf students experience academia. Tutor at the Student Advancement Center at Holon Institute of Technology, with an emphasis on simple practice that helps students understand the material in depth. At a remedial teaching center, I teach children across a wide age range, from grade 1 through grade 9, in English and math.",
    strengthsTitle: "My Strengths",
    strengths: [
      {
        title: "Simplicity",
        text: "Practice breaks the material into short steps. First the idea, then the exercises.",
      },
      {
        title: "The student side",
        text: "I look at the course where it gets stuck: what was not made clear, and what it takes to solve the exercise.",
      },
      {
        title: "Patience",
        text: "We can stop, ask again, and hear the same idea in another wording.",
      },
      {
        title: "Practice",
        text: "The session is built around practice. The aim is to be able to continue on your own afterward.",
      },
    ],
    previous: "Previous strength",
    next: "Next strength",
    slides: "Strength slides",
    show: "Show",
  },
  reviews: {
    title: "Student Reviews",
    leave: "Leave a Review",
    empty: "No reviews available",
    previous: "Previous review",
    next: "Next review",
    rating: "out of 5",
    close: "Close review form",
    dialog: "Leave a review",
    modalTitle: "Leave a Review",
  },
  reviewForm: {
    name: "Name",
    role: "Role (Optional)",
    rolePlaceholder: "Student, Colleague, etc.",
    rating: "Rating",
    ratings: [
      "★★★★★ 5 - Excellent",
      "★★★★☆ 4 - Very Good",
      "★★★☆☆ 3 - Good",
      "★★☆☆☆ 2 - Fair",
      "★☆☆☆☆ 1 - Needs Improvement",
    ],
    message: "Review",
    messagePlaceholder: "Share your experience...",
    submit: "Submit Review",
    submitting: "Submitting...",
    note: "Reviews are moderated before publishing.",
    fallbackError: "Could not submit your review.",
    network: "Network error. Please try again.",
  },
  reviewApi: {
    "Method not allowed.": "Method not allowed.",
    "Review submissions are not configured yet.": "Review submissions are not configured yet.",
    "Invalid review.": "Invalid review.",
    "Invalid request payload.": "Invalid request payload.",
    "Name must be between 2 and 80 characters.": "Name must be between 2 and 80 characters.",
    "Role must be up to 120 characters.": "Role must be up to 120 characters.",
    "Review must be between 20 and 800 characters.": "Review must be between 20 and 800 characters.",
    "Rating must be a whole number between 1 and 5.": "Rating must be a whole number between 1 and 5.",
    "Links are not allowed in reviews.": "Links are not allowed in reviews.",
    "Too many submissions. Please try again in a few minutes.": "Too many submissions. Please try again in a few minutes.",
    "Could not submit your review right now.": "Could not submit your review right now.",
    "Thanks! Your review was sent and will be added to the site soon.": "Thanks! Your review was sent and will be added to the site soon.",
  } as Record<string, string>,
  contact: {
    title: "Contact Me",
    email: "Email",
    phone: "Phone",
    copied: "Copied!",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    drive: "Drive",
    community: "Community",
    sendEmail: "Send email",
    copyPhone: "Copy phone number",
    openWhatsapp: "Open WhatsApp chat",
    openLinkedin: "Open LinkedIn profile",
    openDrive: "Open shared drive materials",
    openCommunity: "Open student community group",
  },
  footer: "Ready to build something amazing together?",
  courses: {
    heading: "COURSES",
    subheading: "COMING SOON",
    intro:
      "Recorded courses I'm preparing for students. Each one will include a simple explanation, practice, recordings, and materials.",
    catalog: "Course Catalog",
    status: "Coming soon",
    titles: {
      probability: "Probability for Undergraduate Computer Science",
      automata: "Automata and Formal Languages",
      computability: "Computability and Complexity",
    },
  },
  teaching: {
    heading: "TEACHING",
    subheading: "TUTORING · PRIVATE LESSONS",
    intro:
      "Tutoring at the Student Advancement Center, and private computer science lessons. The focus is simple practice that makes the course easier to follow.",
    subjectsTitle: "Courses I tutor",
    subjects: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Probability",
      "Computer Systems",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Software Engineering",
      "Automata",
      "Computability & Complexity",
      "Data Science",
      "Machine Learning",
    ],
    subjectsNote: "Not on the list? Reach out. Most core CS courses are on the table. Recorded courses are in the",
    catalogLink: "course catalog",
  },
  development: {
    heading: "DEV",
    subheading: "SOFTWARE DEVELOPER",
    intro: "I develop software first. Then I develop learning the same way I develop software. I also learn. Here are the projects and the tools.",
    projectsTitle: "Projects I built, and the tools they were built with.",
    empty: "No projects available",
    previous: "Previous project",
    next: "Next project",
    windowAlt: "Project Window",
    closeVideo: "Close video",
    github: "GitHub",
    live: "Live",
    video: "Video",
    skillsTitle: "Core Skills",
    skillsSubtitle: "Technical Skills",
    technologiesLabel: "Technologies",
    status: {
      Completed: "Completed",
      "In Development": "In Development",
    },
    projectCopy: {
      portfolio: {
        title: "My Portfolio",
        description:
          "Personal portfolio site built with React, TypeScript, and Tailwind CSS. Includes a custom retro UI, interactive sections, and accessibility-focused structure.",
      },
      chord: {
        title: "Chord-I",
        description:
          "AI-powered chord detection system that extracts chords from songs using machine learning and audio processing. Currently focused on accuracy and real-time performance.",
      },
      popcorn: {
        title: "Popcorn Palace",
        description:
          "Backend cinema ticket-booking system built with NestJS, PostgreSQL, TypeORM, and Docker. Includes a scalable REST API and strong unit and end-to-end test coverage.",
      },
      gantt: {
        title: "Task & Projects Gantt Chart",
        description:
          "Full-stack task and project planner with dependency handling, date shifting, and live updates. Built with React + TypeScript on the frontend and Node.js + Express + MySQL on the backend.",
      },
      calories: {
        title: "Calories Tracker - Frontend",
        description:
          "Frontend for a calorie-tracking application with meal logging, calorie monitoring, and a responsive experience.",
      },
    },
  },
};

export type Messages = typeof en;
