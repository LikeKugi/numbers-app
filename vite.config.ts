import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/numbers-app/',
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@store', replacement: fileURLToPath(new URL('./src/store', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: '@routes', replacement: fileURLToPath(new URL('./src/routes', import.meta.url)) },
      { find: '@styles', replacement: fileURLToPath(new URL('./src/styles', import.meta.url)) },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import \"@styles/styles.scss\";",
      }
    }
  }
})
