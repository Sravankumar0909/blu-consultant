/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef4fb',
                    100: '#d4e4f5',
                    200: '#a9c9eb',
                    300: '#7baddf',
                    400: '#4d90d2',
                    500: '#2a74be',
                    600: '#1f5fa8',
                    700: '#194e8c',
                    800: '#133d6f',
                    900: '#0e2d53',
                },
                accent: {
                    50: '#fdf7ed',
                    100: '#f9ebd2',
                    200: '#f2d5a4',
                    300: '#e9bb70',
                    400: '#dfa03e',
                    500: '#c98620',
                    600: '#a96e17',
                    700: '#875614',
                    800: '#674213',
                    900: '#4a2f10',
                }
            }
        },
    },
    plugins: [],
};