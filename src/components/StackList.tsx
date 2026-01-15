"use client"

import { SkillsMap } from "@/types/general"
import { motion, Variants } from "framer-motion"
import { JSX, MouseEvent } from "react"

import CssIcon from "./icons/CssIcon"
import GithubBigIcon from "./icons/GithubBigIcon"
import GitIcon from "./icons/GitIcon"
import HtmlIcon from "./icons/HtmlIcon"
import JavascriptIcon from "./icons/JavascriptIcon"
import NextIcon from "./icons/NextIcon"
import NodejsIcon from "./icons/NodejsIcon"
import ReactIcon from "./icons/ReactIcon"
import SassIcon from "./icons/SassIcon"
import TailwindIcon from "./icons/TailwindIcon"
import TypescriptIcon from "./icons/TypescriptIcon"
import MongodbIcon from "./icons/MongodbIcon"
import MysqlIcon from "./icons/MysqlIcon"

interface StackListProps {
    className: string
    skillsMap: SkillsMap
    animationConfigs: Variants
    onMouseLeave: () => void
    onMouseMove: <Element extends HTMLElement>(e: MouseEvent<Element>) => void
}

interface JSXIcon {
    id: string
    icon: (props: any) => JSX.Element
}

interface IconsMap {
    [key: string]: JSXIcon[]
}

const icons: IconsMap = {
    firstSection: [
        { id: "html", icon: HtmlIcon },
        { id: "react", icon: ReactIcon },
        { id: "sass", icon: SassIcon },
        { id: "css", icon: CssIcon },
        { id: "mysql", icon: MysqlIcon }
    ],
    secondSection: [
        { id: "javascript", icon: JavascriptIcon },
        { id: "tailwind", icon: TailwindIcon },
        { id: "mongodb", icon: MongodbIcon },
        { id: "nextjs", icon: NextIcon }
    ],
    thirdSection: [
        { id: "node", icon: NodejsIcon },
        { id: "typescript", icon: TypescriptIcon },
        { id: "git", icon: GitIcon },
        { id: "github", icon: GithubBigIcon }
    ]
}

export default function StackList(props: StackListProps) {
    function renderListIcons(list: JSXIcon[]) {
        return list.map((item) => (
            <li
                key={item.id}
                data-id={item.id}
                aria-label={props.skillsMap[item.id]?.name}
                className="stacks__tech-item"
            >
                <item.icon className="stacks__tech-icon" />
            </li>
        ))
    }

    return (
        <motion.div
            variants={props.animationConfigs}
            className={`stacks ${props.className || ""}`.trim()}
        >
            <div
                className="stacks__tech-list"
                onMouseLeave={props.onMouseLeave}
                onMouseMove={props.onMouseMove}
            >
                <ul className="stacks__sub-list">
                    {renderListIcons(icons.firstSection)}
                    {renderListIcons(icons.secondSection)}
                    {renderListIcons(icons.thirdSection)}
                    {renderListIcons(icons.firstSection)}
                    {renderListIcons(icons.secondSection).slice(0, 2)}
                </ul>

                <ul className="stacks__sub-list">
                    {renderListIcons(icons.thirdSection).reverse()}
                    {renderListIcons(icons.secondSection).reverse()}
                    {renderListIcons(icons.firstSection).reverse()}
                    {renderListIcons(icons.thirdSection).reverse()}
                    {renderListIcons(icons.secondSection).reverse().slice(0, 2)}
                </ul>
            </div>
        </motion.div>
    )
}
