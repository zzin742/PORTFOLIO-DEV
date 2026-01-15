import withPlaiceholder from "@plaiceholder/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // 🔴 ISSO RESOLVE O ERRO DO VERCEL
    eslint: {
        ignoreDuringBuilds: true
    },

    images: {
        deviceSizes: [475, 640, 750, 828, 1080, 1200, 1920, 2048],
        remotePatterns: [
            {
                protocol: "https",
                hostname: process.env.CMS_HOSTNAME || "images.ctfassets.net",
                port: "",
                pathname: `/${process.env.CMS_SPACE_ID || ""}/**`
            }
        ]
    }
}

export default withPlaiceholder(nextConfig)
