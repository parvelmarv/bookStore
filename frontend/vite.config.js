import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // or another port if needed
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Update to match your backend server's address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Adjust if needed
      }
    }
  }
})
