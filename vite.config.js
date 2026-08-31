import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative asset paths so the same build works whether it's served from
  // the repo root (a custom domain) or a GitHub Pages project subpath
  // (https://<user>.github.io/irvingrivera/).
  base: './',
})
