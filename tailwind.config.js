/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0050B3',
        secondary: '#BAE7FF',
        'primary-light': '#91D5FF',
        'primary-lighter': '#E6F7FF',
        'text-dark': '#1F1F1F',
      },
    },
  },
  plugins: [],
};