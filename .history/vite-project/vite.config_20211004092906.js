import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':Path2D.resolve(__dirname,'')
    }
  }
  server:{
    host:'localhost',
    port:8080,
    proxy:{
      
    }
  },
  plugins: [vue()]
})
 