/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            keyframes: {
                gradientShift: {
                    '0%, 100%': { transform: 'scale(10)', color: '#9089fc' }, // Pink
                    '50%': { transform: 'scale(0)', color: "#E4B1F0" },     // Purple
                },
            },
            animation: {
                exchange: 'gradientShift 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};