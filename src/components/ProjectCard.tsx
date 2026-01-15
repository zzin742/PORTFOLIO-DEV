"use client"

import Image from "next/image"
import { ReactNode } from "react"
import { projectsVariants } from "../libs/framer-motion"
import { SlSocialGithub, VscLinkExternal } from "../libs/react-icons"

import Link from "./Link"
import { ProjectBanner } from "@/types/general"
import MotionContainer from "./layout/MotionContainer"

interface ProjectCardProps {
    name: string
    index: number
    children: ReactNode
    projectUrl?: string
    githubUrl?: string
    isVisible: boolean
    techList: string[]
    banner: ProjectBanner
}

export default function ProjectCard({
    name,
    index,
    children,
    projectUrl,
    githubUrl,
    isVisible,
    techList,
    banner
}: ProjectCardProps) {
    function renderTechItems(list: string[]) {
        return list.map((tech) => (
            <li key={tech} className="project__tech-item">
                {tech}
            </li>
        ))
    }

    const BannerImage = (
        <Image
            sizes="(max-width: 920px) 100vw, 50vw"
            className="project__banner-img"
            src={banner.url}
            alt={name}
            width={banner.width}
            height={banner.height}
        />
    )

    return (
        <MotionContainer
            once
            elementType="div"
            elementProps={{
                initial: "hidden",
                className: `project ${isVisible ? "project--visible" : ""}`.trim(),
                custom: index % 2,
                variants: projectsVariants.projectCard
            }}
        >
            <div className="project__skew">
                <div className="project__banner">
                    {projectUrl ? (
                        <Link
                            className="project__link-banner"
                            href={projectUrl}
                            ariaLabel={`Abrir projeto ${name}`}
                        >
                            {BannerImage}
                        </Link>
                    ) : (
                        BannerImage
                    )}
                </div>

                <div className="project__content">
                    <h3 className="project__title">
                        {projectUrl ? (
                            <Link className="project__link-title" href={projectUrl}>
                                {name}
                            </Link>
                        ) : (
                            name
                        )}
                    </h3>

                    <p className="project__description">{children}</p>

                    <ul className="project__tech-list">
                        {renderTechItems(techList)}
                    </ul>

                    <div className="project__external-links">
                        {githubUrl && (
                            <Link
                                className="project__ext-link"
                                href={githubUrl}
                                ariaLabel="GitHub do projeto"
                            >
                                <SlSocialGithub className="project__ext-icon" />
                            </Link>
                        )}

                        {projectUrl && (
                            <Link
                                className="project__ext-link"
                                href={projectUrl}
                                ariaLabel="Abrir projeto"
                            >
                                <VscLinkExternal className="project__ext-icon" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </MotionContainer>
    )
}
