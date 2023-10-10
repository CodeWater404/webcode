import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    // 这个配置项可以让你对于@的导入可以直接跳转，也就是路径转换
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
