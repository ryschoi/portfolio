/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Hanken-Grotesk', 'sans-serif'],
      },
      // colors: {
      //   white: '#ffffff',
      //   black: '#212121',
      //   'gray-text': '#8b8b8b',
      //   'accent-green': '#abab11',
      // },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      }
    },
  },
  plugins: [],
}