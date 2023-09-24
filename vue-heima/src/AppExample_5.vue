<!-- 生命周期函数 -->

<script setup>
import { onMounted } from 'vue'

// 下面的会一次调用；
// 使用场景：接收别人的代码的时候，不敢改；再写一个函数加载
onMounted(() => {
    console.log("onMounted1111")
})

onMounted(() => {
    console.log("onMounted222")
})

onMounted(() => {
    console.log("onMounted3333")
})

/*其余的生命周期函数：
setup
onBeforeMount
onMounted
onBeforeUpdate
onUpdated
onBeforeUnmount
onUnmounted
*/
</script>

<template>
    <p>hello world!</p>
</template>