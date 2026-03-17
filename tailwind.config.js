/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A017',
          light: '#F0C040',
          dark: '#A07810',
        },
        orange: {
          superclass: '#E85D04',
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'floatBadge 3s ease-in-out infinite',
        'pulse-wa': 'pulse-wa 2s infinite',
      },
    },
  },
  plugins: [],
}