import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  base: '/profile-landing-page/',
  plugins: [
    react(),
    sitemap(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src/') },
  },
});
