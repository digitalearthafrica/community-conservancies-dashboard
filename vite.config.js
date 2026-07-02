import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/community-conservancies-dashboard/",
  build: {
    chunkSizeWarningLimit: 1600, // Optional: Increases the warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate node_modules into their own chunks
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
