/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            keyframes: {
                // Gradient shifting effect
                gradientShift: {
                    '0%, 100%': {
                        backgroundPosition: '0% 50%',
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                    },
                },
                // Fade and scale effect
                fadeInScale: {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(0.9)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'scale(1)',
                    },
                },
                // Slow bouncing effect
                bounceSlow: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)',
                    },
                },
                // Shimmer effect
                shimmer: {
                    '0%': {
                        backgroundPosition: '-200% 0',
                    },
                    '100%': {
                        backgroundPosition: '200% 0',
                    },
                },
                // Slow spin effect
                'spin-slow': {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
                // Bounce in and out effect
                bounceInOut: {
                    '0%': { transform: 'scale(4)', opacity: 0 },
                    '50%': { transform: 'scale(0.5)', opacity: 1 },
                    '100%': { transform: 'scale(4)', opacity: 0 },
                },
            },
            animation: {
                // Gradient shift animation
                exchange: 'gradientShift 2s ease-in-out infinite',
                // Fade in scale animation
                fadeInScale: 'fadeInScale 0.6s ease-out',
                // Slow bounce animation
                bounceSlow: 'bounceSlow 1.5s infinite',
                // Shimmer effect animation
                shimmer: 'shimmer 1.5s infinite linear',
                // Slow spin animation
                'spin-slow': 'spin-slow 2s linear infinite',
                // Bounce in and out animation
                bounceInOut: 'bounceInOut 2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
            },
        },
    },
    plugins: [],
};
