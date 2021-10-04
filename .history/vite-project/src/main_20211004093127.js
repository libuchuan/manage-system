import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).mount('#app')
console.log("环境变量=》",import.meta.env)
