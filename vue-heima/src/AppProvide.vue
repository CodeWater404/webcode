<!-- 跨层传递数据：可以传递静态数据、响应式数据、函数
    provide：给底层提供数据
    inject：底层接收数据
-->
<script setup>
import { provide, ref } from 'vue'
import underlyingComponent from './AppInject.vue'

// 这里模拟顶层
// 1. 传递静态数据:key-value
provide('static-data', "this is static message")

//2. 传递响应式数据
const count = ref(0)
provide('responsive-data', count)
setTimeout(() => {
    count.value = 100
}, 3000)

// 3. 传递函数
const addCount = () => {
    count.value++
}
provide('func-data', addCount)

</script>

<template>
    <div class="top_floor">
        This is top level component!
        <underlyingComponent />
    </div>
</template>

<style scoped>
.top_floor {
    border-style: solid;
    border-color: aqua;
}
</style>