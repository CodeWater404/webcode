// 封装请求函数测试
import httpInstance from '@/utils/http'

export function getCategory() {
    return httpInstance({
        url: 'home/category/head'
    })
}