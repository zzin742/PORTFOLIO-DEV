export default function PageHead() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
            />

            {/* Título e descrição principal */}
            <title>José Luiz | Desenvolvedor Full Stack & TI</title>
            <meta
                name="description"
                content="José Luiz, desenvolvedor Full Stack e estudante de Análise e Desenvolvimento de Sistemas. Experiência com React, Next.js, TypeScript, Node.js, bancos de dados e infraestrutura de TI."
            />

            <meta name="copyright" content="José Luiz 2026" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:title"
                content="José Luiz | Desenvolvedor Full Stack & TI"
            />
            <meta
                name="twitter:description"
                content="Portfólio de José Luiz, desenvolvedor Full Stack com foco em aplicações web modernas, automações e infraestrutura."
            />
            <meta name="twitter:image" content="/preview.png" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="José Luiz | Desenvolvedor Full Stack & TI" />
            <meta
                property="og:description"
                content="Portfólio profissional de José Luiz, desenvolvedor Full Stack e estudante de ADS, com foco em web, automações e infraestrutura."
            />
            <meta property="og:image" content="/preview.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="José Luiz Portfolio" />
            <meta property="og:url" content="/" />

            {/* Ícones */}
            <link rel="icon" type="image/png" href="/icon.png" />
            <link rel="apple-touch-icon" type="image/png" href="/icon.png" />
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />

            {/* Canonical (ajusta depois do deploy se quiser) */}
            <link rel="canonical" href="/" />

            {/* Fontes */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap"
                rel="stylesheet"
            />
        </>
    )
}
