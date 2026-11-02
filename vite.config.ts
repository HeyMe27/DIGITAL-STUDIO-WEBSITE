import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages, set base to your repo name
  // Uncomment the line below if deploying to GitHub Pages
  // base: '/DIGITAL-STUDIO-WEBSITE/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
