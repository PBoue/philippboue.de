import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
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
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            keyframes: {
                morph: {
                    '0%': { backgroundPosition: '50em', backgroundSize: '50em' },
                    '100%': { backgroundPosition: '-50em', backgroundSize: '150em' }
                },
                shape1: {
                    '0%': { left: 'calc(-random(51) / 2) + px' },
                    '100%': { left: 'calc(random(2) * 4) + em' }
                },
                shape2: {
                    '0%': { left: '-random(50) / 16 + em', top: '-random(2) - 14 + em' },
                    '100%': { left: 'random(2) / 84 + em', top: 'random(10) * 8 + px' }
                },
                shape3: {
                    '0%': { left: 'random(50) * 10 + em', top: '-random(45) * 4 + em' },
                    '100%': { left: '-random(95) * 4 + em', top: '(random(10) - 7 + em)' }
                },
            },
            animation: {
                morph: 'morph 1s alternate infinite both',
                shape1: 'shape1 7s alternate infinite both cubic- bezier(1, 0.1, 0.58, 1)',
                shape2: 'shape2 4s alternate infinite both cubic-bezier(1,0.8,-0.1,1)',
                shape3: 'shape3 6s alternate infinite both',
            }
        }
    },
    plugins: [],
}
export default config