<!-- 模板引用的跳念
通过ref标识获取真实的dom对象或者组件实例对象
 -->
<script setup>
import { onMounted, ref } from 'vue'
import TestCom from './AppTestCom.vue'

// 用ref函数，获取ref对象
const h1Ref = ref(null)
const comRef = ref(null)

// 组件挂载完毕之后才能获取，用onMounted函数确保这一点
onMounted(() => {
    // 打印获取到的dom对象
    console.log("h1ref:", h1Ref.value)
    // 获取到的组件对象，如果需要内部的属性和函数，需要在组件内使用defineExpose暴露出来
    console.log("comRef:", comRef.value)
})

</script>

<template>
    <!-- 通过ref标识获取真实的dom对象或者组件实例对象,绑定到变量h1Ref、comRef上去 -->
    <h1 ref="h1Ref">我是dom标签h1</h1>
    <TestCom ref="comRef" />
</template>