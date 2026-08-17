import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed as a GitHub *project* page at:
//   https://clarkouyang.github.io/Personal-Website/
// so the base must be the repository name (with leading & trailing slash).
// This makes every asset (JS, CSS, and /public images like the avatar) resolve
// to /Personal-Website/... and load correctly on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/Personal-Website/',
})
