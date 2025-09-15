import { projects as projectsData } from '../content/projects'

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export const projects: Project[] = projectsData
