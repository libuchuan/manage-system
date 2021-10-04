import { createApp } from 'vue'
import App from './App.vue'
import React, { PureComponent } from 'react'


createApp(App).mount('#app')
console.log("环境变量=》",import.meta.env)
