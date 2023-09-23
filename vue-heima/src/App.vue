<script setup>
import { reactive } from 'vue';
import { ref } from 'vue';

// reactive接收对象类型参数(不能是简单类型的！)，返回响应式对象
const state = reactive({
  count: 0
})

const setCount = () => {
  state.count++
}

// ref接收基本类型和对象类型参数，返回响应式对象
const state2 = ref(0)

const setCount2 = () => {
  //脚本区域修改ref产生的响应式对象数据必须通过.value属性！！！！
  state2.value++
}
</script>

<template>
  <div><button @click="setCount">count1:{{ state.count }}</button></div>
  <div><button @click="setCount2">count2:{{ state2 }}</button></div>
</template>