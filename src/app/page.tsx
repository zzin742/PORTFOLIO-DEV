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
        id: "calculadora-iphone",
        name: "Calculadora iPhone (Clone)",
        description:
            "Clone fiel da calculadora do iPhone, desenvolvido com foco em interface, animações e experiência do usuário.",
        projectUrl: "https://v0-ip-hone-calculator-clone-sigma.vercel.app/",
        githubUrl: "https://github.com/zzin742/calculadora-iphone-nb.git",
        banner: {
            url: "/imgs/calculadora-iphone.png",
            width: 1200,
            height: 630
        },
        techList: ["HTML", "CSS", "JavaScript"]
    },

{
    id: "nfse-hub",
    name: "NFS-e Hub",
    description:
        "Landing page e produto digital para um robô desktop que automatiza o download de NFS-e (XML e PDF) diretamente do Portal Nacional. Focado em contadores e escritórios contábeis, o projeto destaca automação fiscal, economia de tempo e compatibilidade com o novo layout do Portal Nacional.",
    projectUrl: "https://nfse-hub.vercel.app/",
    githubUrl: "https://github.com/zzin742/nfse-hub-site.git",
    banner: {
        url: "/imgs/nfse-hub.png",
        width: 1200,
        height: 630
    },
    techList: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"]
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
            "Landing page institucional desenvolvida para apresentação de serviços, identidade visual e posicionamento digital.",
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
        id: "duplo-foco",
        name: "Duplo Controle Financeiro",
        description:
            "Aplicação web para organização financeira pessoal, com controle de receitas, gastos, caixinhas e ciclos de pagamento.",
        projectUrl: "https://duplo-foco-financeiro.lovable.app/",
        banner: {
            url: "/imgs/duplo-foco.png",
            width: 1200,
            height: 630
        },
        techList: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },

    {
        id: "site-compras",
        name: "Smart Cart Assistant",
        description:
            "Aplicação web para criação e organização de listas de compras, permitindo adicionar produtos, valores e acompanhar o custo total.",
        projectUrl: "https://shop-plan-daily.lovable.app/",
        githubUrl: "https://github.com/zzin742/smart-cart-assistant.git",
        banner: {
            url: "/imgs/site-compras.png",
            width: 1200,
            height: 630
        },
        techList: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
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
