import { Variants } from "framer-motion"

export interface CustomVariants {
    [key: string]: Variants
}

export interface ProjectBanner {
    url: string
    width: number
    height: number

    // opcionais para compatibilidade com plaiceholder / next-image
    alt?: string
    base64Url?: string
}

export interface Project {
    id: string
    name: string
    description: string
    projectUrl?: string
    githubUrl?: string
    techList: string[]
    banner: ProjectBanner
}

export interface Skill {
    name: string
    description: string
}

export interface SkillsMap {
    [key: string]: Skill
}
