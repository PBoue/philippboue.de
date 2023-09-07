import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'black': '#0D1F2D',
            'white': '#FFFFFF',
            'magenta': '#F63BCD',
            'red': '#A30015',
            'blue': '#3BBFF6',
            'cyan': '#3BF6EB',
            'green': '#4CB963',
            'yellow': '#FDE74C'
        },
        extend: {
            fontFamily: {
                body: ['var(--font-montserrat)']
            }
        }
    },
    plugins: [],
}
export default config
