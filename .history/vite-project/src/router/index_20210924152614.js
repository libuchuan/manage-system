import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './../components/Home.vue'

const router = [
    {
        name:'home',
        path:'/',
        component:Home,
        redirect:Welcome,
        children:[
            {
                name:'welcome',
                path:'/welcome',
                component:Welcome
            },
            {
                name:'login',
                path:'/login',
                component:Login
            }
        ]
    }
]

// 环境变量 vite hash？

