// axios基础封装
import axios from 'axios'

// 创建axios实例
const httpInstance = axios.create({
    'baseURL': 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    'timeout': 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

httpInstance.interceptors.response.use(res => res.data, e => {
    // axios响应式拦截器
    return Promise.reject(e)
})

export default httpInstance