import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './../components/Home.vue'

const router = [
    {
        name:'home',
        path:'/',
        component:Home，
        children:[
            {
                name:'welcome',
                
            }
        ]
    }
]

// 环境变量 vite hash？

