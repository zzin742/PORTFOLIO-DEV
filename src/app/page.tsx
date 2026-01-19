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
            "Sistema interno desenvolvido para centralizar consultas, controles operacionais e rotinas administrativas.",
        banner: {
            url: "/imgs/central-operacoes.png",
            width: 1200,
            height: 630
        },
        techList: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
    },

    {
        id: "graciano-glow",
        name: "Site Institucional – Graciano Soluções",
        description:
            "Landing page institucional desenvolvida para apresentação de serviços, identidade visual e posicionamento digital da empresa Graciano Soluções.",
        projectUrl: "https://janailson.vercel.app/",
        githubUrl: "https://github.com/zzin742/graciano-grow-guide.git",
        banner: {
            url: "/imgs/graciano-glow.png",
            width: 1200,
            height: 630
        },
        techList: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },

    {
        id: "calculadora-iphone",
        name: "Calculadora iPhone (Clone)",
        description:
            "Clone fiel da calculadora do iPhone, desenvolvido com foco em interface, animações e experiência do usuário, reproduzindo o visual e comportamento do app original.",
        projectUrl: "https://v0-ip-hone-calculator-clone-sigma.vercel.app/",
        githubUrl: "https://github.com/zzin742/calculadora-iphone-nb.git",
        banner: {
            url: "/imgs/calculadora-iphone.png",
            width: 1200,
            height: 630
        },
        techList: ["HTML", "CSS", "JavaScript"]
    }
]


/* =======================
   SKILLS
======================= */
const skillsMap: SkillsMap = {
    html: { name: "HTML5", description: "Estruturação semântica de páginas web." },
    css: { name: "CSS3", description: "Estilização e layout responsivo." },
    sass: { name: "Sass", description: "Pré-processador CSS." },
    javascript: { name: "JavaScript", description: "Interatividade web." },
    react: { name: "React", description: "Interfaces componentizadas." },
    next: { name: "Next.js", description: "Framework React moderno." },
    node: { name: "Node.js", description: "Backend em JavaScript." },
    mongodb: { name: "MongoDB", description: "Banco NoSQL." },
    mysql: { name: "MySQL", description: "Banco relacional." },
    git: { name: "Git", description: "Controle de versão." },
    github: { name: "GitHub", description: "Hospedagem de código." }
}

/* =======================
   PAGE
======================= */
export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <Hero cvURL="/cv/Jose-Luiz-Full-Stack.pdf" />
                <About />
                <Projects projectList={projects} />
                <Skills skillsMap={skillsMap} />
            </Main>
            <Footer />
            <ScrollToTopButton />
        </>
    )
}
