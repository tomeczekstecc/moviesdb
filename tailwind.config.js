/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            raleway: ['Raleway', 'sans-serif'],
        },
        plugins: [],
    },
}
