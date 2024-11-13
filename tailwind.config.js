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
                fadeInScale: {
                    '0%': { opacity: 0, transform: 'scale(0.9)' },
                    '100%': { opacity: 1, transform: 'scale(1)' },
                },
                bounceSlow: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            animation: {
                exchange: 'gradientShift 2s ease-in-out infinite',
                fadeInScale: 'fadeInScale 0.6s ease-out',
                bounceSlow: 'bounceSlow 1.5s infinite',
            },
        },
    },
    plugins: [],
};
