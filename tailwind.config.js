import tailwindcss from '@tailwindcss/vite';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Hanken-Grotesk', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      }
    },
  },
  plugins: [
    tailwindcss(),
  ],
}