import { experiences as experiencesData } from '../content/experiences'

export interface Experience {
  id: string
  company: string
  position: string
  period: string
  location: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = experiencesData
