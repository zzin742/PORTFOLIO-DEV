"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { aboutVariants } from "@/libs/framer-motion"

import Link from "@/components/Link"
import { SocialLink } from "../types"
import profilePicture from "../../../../public/imgs/social.png"
import MarkerHeading from "./MarkerHeading"
import MotionContainer from "../MotionContainer"

import { SiGmail } from "@/libs/react-icons"
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from "@/libs/react-icons"

const linksList: SocialLink[] = [
    {
        id: 1,
        href: "https://github.com/zzin742",
        ariaLabel: "Meu perfil no GitHub",
        icon: SlSocialGithub
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/jos%C3%A9-luiz-115861362",
        ariaLabel: "Meu perfil no LinkedIn",
        icon: SlSocialLinkedin
    },
    {
        id: 3,
        href: "https://www.instagram.com/joselz_dev",
        ariaLabel: "Meu Instagram profissional",
        icon: SlSocialInstagram
    },
    {
        id: 4,
        href: "mailto:josehtl07@gmail.com",
        ariaLabel: "Email para contato",
        icon: SiGmail,
        target: "_self"
    }
]

export default function About() {
    return (
        <MotionContainer
            amount={0.25}
            once={true}
            elementType="section"
            elementProps={{
                id: "about",
                className: "about",
                initial: "hidden",
                variants: aboutVariants.container
            }}
        >
            <div className="about__inner-container">
                <div className="about__title-box">
                    <motion.h2 variants={aboutVariants.title} className="about__title">
                        Sobre mim
                    </motion.h2>
                    <motion.span variants={aboutVariants.titleLine} className="about__title-line" />
                </div>

                <motion.div variants={aboutVariants.contentWrapper} className="about__content-wrapper">
                    <motion.div variants={aboutVariants.avatar} className="about__avatar-container">
                        <Image
                            className="about__avatar-img"
                            src={profilePicture}
                            alt="José Luiz - Desenvolvedor Full Stack e TI"
                        />
                    </motion.div>

                    <div className="about__right-content">
                        <motion.div variants={aboutVariants.textContent} className="about__content-division">
                            <article>
                                <MarkerHeading markerClassName="about__marker" title="Apresentação" />
                                <p className="about__text">
                                    Sou José Luiz, desenvolvedor Full Stack e estudante de Análise e
                                    Desenvolvimento de Sistemas (2º ano), residente em Piracaia – SP.
                                    Tenho interesse e atuação em desenvolvimento web, automações,
                                    bancos de dados e infraestrutura de TI.
                                    <br />
                                    <br />
                                    Trabalho com tecnologias como React, Next.js, TypeScript, Node.js,
                                    bancos de dados SQL e NoSQL, além de possuir conhecimentos sólidos
                                    em redes, sistemas e infraestrutura. Busco sempre desenvolver
                                    soluções práticas, eficientes e escaláveis, com foco em
                                    performance, acessibilidade e boas práticas de desenvolvimento.
                                    <br />
                                    <br />
                                    Neste portfólio você encontrará alguns projetos que representam
                                    minha evolução técnica e meu compromisso com aprendizado contínuo.
                                </p>
                            </article>
                        </motion.div>

                        <motion.div variants={aboutVariants.textContent} className="about__content-division">
                            <MarkerHeading markerClassName="about__marker" title="Onde me encontrar" />
                            <div className="about__social-wrapper">
                                {linksList.map((link) => (
                                    <Link
                                        key={link.id}
                                        className="about__social-link"
                                        href={link.href}
                                        ariaLabel={link.ariaLabel}
                                        target={link.target}
                                    >
                                        <link.icon
                                            className="about__social-icon"
                                            aria-hidden="true"
                                            focusable="false"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </MotionContainer>
    )
}
