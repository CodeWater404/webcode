//导入一个方法 defineStore
import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useCounterStore = defineStore('counter' , () => {
    //定义数据 state
    const count = ref(0)
    //定义修改数据的方法（action 同步+异步）
    const increment = () => {
        count.value++
    }
    // 以对象的方式return供组件使用
    return {
        count,
        increment
    }
})