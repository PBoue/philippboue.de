/** @type {import('next').NextConfig} */
const nextConfig = {
    // Silence the workspace root warning
    turbopack: {
        root: __dirname,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'philippboue.de',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.prismic.io',
                port: '',
                pathname: '/**',
            }
        ],
    },
}

module.exports = nextConfig