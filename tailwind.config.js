import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{css}",
  ],
  theme: {
        extend: {
            borderRadius: {
                'none': '0',
                'sm': '0.25rem',
                DEFAULT: '0.5rem',
                'md': '0.75rem',
                'lg': '1rem',
                'full': '9999px',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'setxo': {
                    50: '#f4f3ff',
                    100: '#eceafd',
                    200: '#dad8fc',
                    300: '#beb8fa',
                    400: '#9d90f5',
                    500: '#7d62f0',
                    600: '#673ce5',
                    700: '#5c2fd2',
                    800: '#4c27b0',
                    900: '#402290',
                    950: '#261362',
                },
                'primaryBlue': {
                    50: '#f2f4fc',
                    100: '#e1e7f8',
                    200: '#cad5f3',
                    300: '#a5bbeb',
                    400: '#7a97e0',
                    500: '#5b76d6',
                    600: '#4c5fcb',
                    700: '#3d49b8',
                    800: '#373d96',
                    900: '#303778',
                    950: '#21244a',
                },
            },
        },
        
    },
  plugins: [],
}

