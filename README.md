# Tal Yaakobi - Portfolio Website

A modern, responsive portfolio website showcasing Tal Yaakobi's work as a creative developer focused on accessibility solutions and innovative experiences.

Built with React Router v7, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🚀 Server-side rendering with React Router v7
- ⚡️ Hot Module Replacement (HMR)
- 📦 Optimized asset bundling
- 🎨 Modern, professional design
- 💻 3D interactive laptop component
- 📱 Fully responsive design
- ♿ Accessibility-focused development
- 🔒 TypeScript for type safety
- 🎉 TailwindCSS for styling
- ✨ Smooth animations with Framer Motion

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

Your application will be available at `http://localhost:3000`.

## Building for Production

Create a production build:

```bash
npm run build
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
│   ├── routes/        # Route components
│   └── styles/        # CSS modules and global styles
├── public/            # Static assets
└── build/            # Production build output
```

## Technologies Used

- **React Router v7** - Full-stack React framework
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server

---

Built with ❤️ by Tal Yaakobi using React Router.
