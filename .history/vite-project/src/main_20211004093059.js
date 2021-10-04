import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')
console.log("环境变量=》",import.meta.env)
