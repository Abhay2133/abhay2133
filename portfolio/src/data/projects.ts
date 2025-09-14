export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with Vue 3, TypeScript, and TailwindCSS featuring dark mode and smooth animations.',
    technologies: ['Vue.js', 'TypeScript', 'TailwindCSS', 'Vite'],
    imageUrl: '/placeholder-project-1.jpg', // Replace with actual image
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio.example.com'
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A full-stack task management application with real-time updates, user authentication, and team collaboration features.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
    imageUrl: '/placeholder-project-2.jpg', // Replace with actual image
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://taskmanager.example.com'
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description:
      'A comprehensive e-commerce solution with product management, shopping cart, payment integration, and admin dashboard.',
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Stripe API'],
    imageUrl: '/placeholder-project-3.jpg', // Replace with actual image
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://shop.example.com'
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description:
      'A responsive weather application with location-based forecasts, interactive maps, and weather alerts.',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS Grid'],
    imageUrl: '/placeholder-project-4.jpg', // Replace with actual image
    githubUrl: 'https://github.com/username/weather-app',
    liveUrl: 'https://weather.example.com'
  }
]
