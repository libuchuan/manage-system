// 环境配置封装  2021.10.4

const env=import.meta.env.MODE || 'prod'
const EnvConfig = {
    dev:{
        baseApi:'/',
        mockApi:''
    },
    test:{
        baseApi:'/',
        mockApi:''
    },
    prod:{
        baseApi:'/',
        // mockApi:''一般不需要模拟接口
        //mock开发模拟接口
    }
}
export default {
    env:'dev',
    mock:true,
    // baseApi:'/api',
    
    // ？
}