"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Fragment } from "react"
import { heroVariants, sideLinkVariants } from "@/libs/framer-motion"

import SideLinks from "@/components/SideLinks"
import profilePicture from "../../../../public/imgs/profile.png"
import MotionContainer from "../MotionContainer"

interface TitleSpan {
    id: number
    className: string
    content: string
}

const titleSpans: TitleSpan[] = [
    { id: 1, className: "hero__title hero__title--main", content: "José" },
    { id: 2, className: "hero__title hero__title--main", content: "Luiz" },
    { id: 3, className: "hero__title hero__title--sub", content: "Desenvolvedor" },
    { id: 4, className: "hero__title hero__title--sub", content: "Full Stack" },
    { id: 5, className: "hero__title hero__title--main", content: "." }
]

export default function Hero({ cvURL }: { cvURL: string }) {
    function renderTitleSpans(): JSX.Element[] {
        return titleSpans.map((span) => (
            <Fragment key={span.id}>
                <motion.span
                    custom={span.id}
                    variants={heroVariants.leftContentItems}
                    className={span.className}
                >
                    {span.content}
                </motion.span>

                {span.id === 1 || span.id === 4 ? <>&nbsp;</> : <br />}
            </Fragment>
        ))
    }

    return (
        <MotionContainer
            once={true}
            elementType="section"
            elementProps={{
                id: "home",
                className: "hero",
                initial: "hidden",
                variants: heroVariants.container
            }}
        >
            <div className="hero__inner-container">
                <div className="hero__content-wrapper">
                    <motion.div variants={heroVariants.avatar} className="hero__avatar-container">
                        <Image
                            sizes="(max-width: 920px) 100vw, 50vw"
                            className="hero__avatar-img"
                            src={profilePicture}
                            alt="José Luiz - Desenvolvedor Full Stack e TI"
                        />
                    </motion.div>

                    <div className="hero__left-content">
                        <h1 className="hero__title">{renderTitleSpans()}</h1>

                        <motion.a
                            custom={7}
                            variants={heroVariants.leftContentItems}
                            download
                            target="_blank"
                            role="button"
                            aria-label="Obtenha uma cópia do meu currículo"
                            href={cvURL}
                            className="btn btn--download hero__btn"
                            rel="noreferrer"
                        >
                            <span className="btn--download__content">Download CV</span>
                        </motion.a>

                        <SideLinks animationConfigs={sideLinkVariants} />
                    </div>
                </div>
            </div>
        </MotionContainer>
    )
}
