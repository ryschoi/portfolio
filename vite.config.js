import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      background: path.resolve(__dirname, './src/background'),
      projects: path.resolve(__dirname, './src/projects'),
      navigation: path.resolve(__dirname, './src/navigation'),
    },
  },
})