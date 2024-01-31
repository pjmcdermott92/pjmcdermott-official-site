/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                current: 'currentColor',
                brand: '#339AF0',
                'background-dark': '#1d1d24',
                'gray-light': '#C7CBD2',
            },
        },
    },
    plugins: [],
};
