import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base: './' makes built asset paths relative, so the site works whether it is
// deployed to a GitHub project page (https://user.github.io/repo/) or a custom
// domain — no need to hard-code the repository name here.
export default defineConfig({
  plugins: [react()],
  base: './',
})
