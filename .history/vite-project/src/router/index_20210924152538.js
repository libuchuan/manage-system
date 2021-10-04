import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './../components/Home.vue'

const router = [
    {
        name:'home',
        path:'/',
        component:Home,
        wx.redirectTo({
          url: '',
          complete: (res) => {},
          fail: (res) => {},
          success: (res) => {},
        })
        children:[
            {
                name:'welcome',
                path:'/welcome',
                component:Welcome
            }
        ]
    }
]

// 环境变量 vite hash？

