import Header from "@/components/layout/Header"
import Main from "@/components/layout/Main"
import Hero from "@/components/layout/sections/Hero"
import About from "@/components/layout/sections/About"
import Projects from "@/components/layout/sections/Projects"
import Skills from "@/components/layout/sections/Skills"
import Footer from "@/components/layout/Footer"
import ScrollToTopButton from "@/components/buttons/ScrollToTopButton"

import { Project, SkillsMap } from "@/types/general"

/* =======================
   PROJETOS
======================= */
const projects: Project[] = [
    {
        id: "duplo-foco",
        name: "Duplo Controle Financeiro",
        description:
            "Aplicação web para organização financeira pessoal, com controle de ciclos de pagamento, receitas, gastos, caixinhas e visualização clara da vida financeira.",
        projectUrl: "https://duplo-foco-financeiro.lovable.app/",
        githubUrl: null,
        banner: {
            url: "/imgs/duplo-foco.png",
            width: 1200,
            height: 630
        },
        techList: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },

    {
        id: "central-operacoes",
        name: "Central de Operações Empresariais",
        description:
            "Sistema interno desenvolvido para centralizar consultas, controles operacionais e rotinas administrativas, com foco em produtividade, organização e visão estratégica.",
        projectUrl: null,
        githubUrl: null,
        banner: {
            url: "/imgs/central-operacoes.png",
            width: 1200,
            height: 630
        },
        techList: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
    },

    {
        id: "graciano-glow",
        name: "Portfólio Empresarial",
        description:
            "Landing page institucional desenvolvida para a Graciano Soluções, focada em identidade visual forte, apresentação de serviços e conversão de leads.",
        projectUrl: "https://janailson.vercel.app/",
        githubUrl: "https://github.com/zzin742/graciano-grow-guide.git",
        banner: {
            url: "/imgs/graciano-glow.png",
            width: 1200,
            height: 630
        },
        techList: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    }
]

/* =======================
   SKILLS (IDs NORMALIZADOS)
======================= */
const skillsMap: SkillsMap = {
    html: {
        id: "html",
        name: "HTML5",
        description: "Estruturação semântica de páginas web."
    },

    css: {
        id: "css",
        name: "CSS3",
        description: "Estilização e layout responsivo."
    },

    sass: {
        id: "sass",
        name: "Sass",
        description: "Pré-processador CSS para organização e reutilização de estilos."
    },

    javascript: {
        id: "javascript",
        name: "JavaScript",
        description: "Interatividade e comportamento dinâmico em aplicações web."
    },

    react: {
        id: "react",
        name: "React",
        description: "Biblioteca para criação de interfaces componentizadas."
    },

    next: {
        id: "next",
        name: "Next.js",
        description: "Framework React com renderização híbrida e otimizações."
    },

    node: {
        id: "node",
        name: "Node.js",
        description: "Execução de JavaScript no backend."
    },

    express: {
        id: "express",
        name: "Express.js",
        description: "Framework minimalista para APIs em Node.js."
    },

    mongodb: {
        id: "mongodb",
        name: "MongoDB",
        description: "Banco de dados NoSQL orientado a documentos."
    },

    mysql: {
        id: "mysql",
        name: "MySQL",
        description: "Banco de dados relacional amplamente utilizado."
    },

    git: {
        id: "git",
        name: "Git",
        description: "Controle de versão distribuído."
    },

    github: {
        id: "github",
        name: "GitHub",
        description: "Hospedagem e colaboração de código."
    }
}

/* =======================
   PAGE
======================= */
export default function Home() {
    return (
        <>
            <Header />
            <Main>
            <Hero cvURL="/cv/José%20Luiz%20-%20Full%20Stack.pdf" />

                <About />
                <Projects projectList={projects} />
                <Skills skillsMap={skillsMap} />
            </Main>
            <Footer />
            <ScrollToTopButton />
        </>
    )
}
