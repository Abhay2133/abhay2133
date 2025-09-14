export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Vue 3, TypeScript, and TailwindCSS featuring dark mode, smooth animations, and mobile-first design.',
    technologies: ['Vue.js', 'TypeScript', 'TailwindCSS', 'Vite'],
    image: '/project-portfolio.jpg',
    githubUrl: 'https://github.com/abhay2133/portfolio',
    liveUrl: 'https://abhay2133.github.io/portfolio',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Full-stack task management application with real-time updates, team collaboration, and advanced filtering capabilities.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
    image: '/project-taskapp.jpg',
    githubUrl: 'https://github.com/abhay2133/task-app',
    liveUrl: 'https://task-app-demo.vercel.app',
    featured: true
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'Modern e-commerce platform with payment integration, inventory management, and admin dashboard.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    image: '/project-ecommerce.jpg',
    githubUrl: 'https://github.com/abhay2133/ecommerce',
    featured: false
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with location-based forecasts, charts, and severe weather alerts.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    image: '/project-weather.jpg',
    githubUrl: 'https://github.com/abhay2133/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.netlify.app',
    featured: false
  }
];