/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Add this line
  theme: {
    theme: {
      extend: {
        keyframes: {
          ring: {
            '0%, 100%': { transform: 'rotate(0deg)' },
            '20%, 60%': { transform: 'rotate(15deg)' },
            '40%, 80%': { transform: 'rotate(-15deg)' },
          },
        },
        animation: {
          shake: 'ring 0.5s ease-in-out',
        },
      },
    },
  },
  plugins: [],
}

