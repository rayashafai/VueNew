import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";` // Optional for custom SCSS variables
      }
    }
  },
  build: {
    assetsInlineLimit: 4096, // Files smaller than 4kb will be inlined as base64
    manifest: false, // Disable manifest.json generation if not needed
    emptyOutDir: true // Clear dist folder on rebuild
  },
  server: {
    port: 5173, // Set your preferred port
    open: true // Automatically open browser
  }
})