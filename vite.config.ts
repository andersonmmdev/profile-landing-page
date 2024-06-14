import { defineConfig } from 'vite'
import * as path from "path";
import react from '@vitejs/plugin-react'
import checker from "vite-plugin-checker";

export default defineConfig({
  base: '/profile-landing-page/',
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src/") },
  },
})
