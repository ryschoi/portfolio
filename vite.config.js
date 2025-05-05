import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import tailwindcss from "@tailwindcss/vite";
import tailwind from '@tailwindcss/postcss';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,
    host: true
  }
});