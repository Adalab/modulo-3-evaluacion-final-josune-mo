import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/modulo-3-evaluacion-final-josune-mo/',
  server: {
    open: "/index.html",
    watch: {
      usePolling: true
    }
  },
})
