# Tal Yaakobi - Portfolio Website

A modern, responsive portfolio website showcasing Tal Yaakobi's work as a creative developer focused on accessibility solutions and innovative experiences.

Built with React Router v7, TypeScript, custom CSS with CSS Variables, and Framer Motion.

## Features

- 🚀 Server-side rendering with React Router v7
- ⚡️ Hot Module Replacement (HMR)
- 📦 Optimized asset bundling
- 🎨 Modern, professional design
- 📱 Fully responsive design
- ♿ Accessibility-focused development
- 🔒 TypeScript for type safety
- 🎨 Custom CSS with CSS Variables and modern design system
- ✨ Smooth animations with Framer Motion
- 📧 Contact form with EmailJS integration
- 🌟 Interactive skills showcase
- 📄 Featured projects section

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t tal-yaakobi-portfolio .

# Run the container
docker run -p 3000:3000 tal-yaakobi-portfolio
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Project Structure

```
tal-yaakobi-portfolio/
├── app/
│   ├── components/     # React components
│   │   ├── AboutMe.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Heading.tsx
│   │   ├── MainHeadline.tsx
│   │   ├── Navigation.tsx
│   │   ├── Project.tsx
│   │   └── Skills.tsx
│   ├── routes/        # Route components
│   │   └── home.tsx
│   └── styles/        # CSS modules and global styles
│       ├── global.css
│       ├── navigation.css
│       ├── hero.css
│       ├── skills.css
│       ├── contact.css
│       └── contact-form.css
├── public/            # Static assets
│   └── icons/        # SVG icons
└── build/            # Production build output
```

## Technologies Used

- **React Router v7** - Full-stack React framework
- **React 19** - Latest React version
- **TypeScript** - Type-safe JavaScript
- **Custom CSS** - Modern CSS with CSS Variables and design system
- **Framer Motion** - Animation library
- **EmailJS** - Contact form handling
- **React Icons** - Icon components
- **Vite** - Build tool and dev server

## About the Developer

Tal Yaakobi is a computer science graduate who transitioned from TV production to development, with a focus on creating accessibility solutions. At 29, she brings creative energy and problem-solving skills from her production background into building thoughtful software that makes a real difference.

---

Built with ❤️ by Tal Yaakobi using React Router v7.
