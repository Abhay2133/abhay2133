export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Acorn Globus',
    role: 'Full Stack Engineer',
    period: 'Jun 2025 - Present',
    location: 'Remote, Gachibowli, Hyderabad',
    description: 'Working as a maintainer for an in-house product, focusing on releasing new features, enhancing UI for better user experience, and identifying and resolving bugs to ensure optimal performance.',
    technologies: ['Vue.js', 'React.js', 'TypeScript', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    company: 'Acorn Globus',
    role: 'Full Stack Intern',
    period: 'Feb 2025 - Jun 2025',
    location: 'Remote, Gachibowli, Hyderabad',
    description: 'Contributed to the in-house product: added features, improved UI/UX, and fixed bugs.',
    technologies: ['Vue.js', 'React.js', 'JavaScript', 'CSS3', 'API Integration']
  },
  {
    id: 3,
    company: 'CodeQuotient',
    role: 'Software Engineer Intern',
    period: 'Jun 2024 - Jul 2024',
    location: 'Remote, Mohali, India',
    description: 'Learned low-level C/C++ and web development; built a text editor and snake game in C++; built a landing page and a to-do web app.',
    technologies: ['C++', 'Web Development', 'HTML', 'CSS', 'JavaScript']
  }
];