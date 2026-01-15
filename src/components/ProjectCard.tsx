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
    projectUrl?: string | null
    isVisible: boolean
    githubUrl?: string | null
    techList: string[]
    banner: ProjectBanner
}

export default function ProjectCard(props: ProjectCardProps) {
    const hasProjectLink = Boolean(props.projectUrl)
    const hasGithubLink = Boolean(props.githubUrl)

    function renderTechItems(techList: string[]) {
        return techList.map((tech, i) => (
            <li key={i} className="project__tech-item">
                {tech}
            </li>
        ))
    }

    const BannerImage = (
        <Image
            sizes="(max-width: 920px) 100vw, 50vw"
            className="project__banner-img"
            src={props.banner.url}
            alt={props.name}
            width={props.banner.width}
            height={props.banner.height}
        />
    )

    return (
        <MotionContainer
            once
            elementType="div"
            elementProps={{
                initial: "hidden",
                className: `project ${props.isVisible ? "project--visible" : ""}`.trim(),
                custom: props.index % 2,
                variants: projectsVariants.projectCard
            }}
        >
            <div className="project__skew">
                <div className="project__banner">
                    {hasProjectLink ? (
                        <Link
                            className="project__link-banner"
                            href={props.projectUrl!}
                            ariaLabel={`Abrir projeto ${props.name}`}
                        >
                            {BannerImage}
                        </Link>
                    ) : (
                        BannerImage
                    )}
                </div>

                <div className="project__content">
                    <h3 className="project__title">
                        {hasProjectLink ? (
                            <Link className="project__link-title" href={props.projectUrl!}>
                                {props.name}
                            </Link>
                        ) : (
                            props.name
                        )}
                    </h3>

                    <p className="project__description">{props.children}</p>

                    <ul className="project__tech-list">
                        {renderTechItems(props.techList)}
                    </ul>

                    <div className="project__external-links">
                        {hasGithubLink && (
                            <Link
                                className="project__ext-link"
                                href={props.githubUrl!}
                                ariaLabel="GitHub do projeto"
                            >
                                <SlSocialGithub className="project__ext-icon" />
                            </Link>
                        )}

                        {hasProjectLink && (
                            <Link
                                className="project__ext-link"
                                href={props.projectUrl!}
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
