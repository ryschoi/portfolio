/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.html',
    './**/*.js',
    './**/*.ts',
    './**/*.jsx',
    './**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Hanken-Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}