import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Modules': path.resolve(__dirname, './src/App/Modules'),
    }
  },
  server: {fs: {strict: false}}
})
