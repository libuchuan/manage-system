import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':Path2D.resolve(__dirname,'./src')
      //快捷路径表示呗
    }
  },
  server:{
    host:'localhost',
    port:8080,
    proxy:{
      //接口默认地址显示
      "/api":{
        target:''
      }
    }
  },
  plugins: [vue()]
})
 