import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    // 设置路径别名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('./src')
      }
    ]
  },
  base:'/animation-lottie/',
  build:{
    outDir: "docs"
  }
})
