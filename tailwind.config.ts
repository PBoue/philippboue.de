const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                body: ['var(--font-montserrat)']
            }
        }
    },
    plugins: [require("tailwindcss-animate"), nextui()],
}   