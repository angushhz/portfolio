/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    variants: {
      animation: ['motion-safe'],
    },
    extend: {
      colors: {
        'white-rgba': 'rgba(255, 255, 255, 0.66)',
        primary: 'rgba(255,255,255,0.75)',
        secondary: 'rgba(255,255,255,0.5)',
      },
      boxShadow: {
        'outline-white': '3px 3px 20px rgb(80 78 78 / 50%)',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(2, minmax(400px, 1fr))',
      },
      linearGradientColors: {
        primary: 'linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%)',
      },
      borderColor: {
        primary: 'rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
