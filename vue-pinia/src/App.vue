<script setup>
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

// 执行方法得到store实例对象
const counterStore = useCounterStore()
console.log(counterStore)

//直接结构赋值（数据在页面上不会响应式的更新）
// const { count, doubleCount } = counterStore

// 通过storeToRefs方法将数据转换成响应式的数据
const { count, doubleCount } = storeToRefs(counterStore)

// 方法也可以从原来的counterStore中解构出来
const { increment, test } = counterStore

onMounted(() => {
  counterStore.getList()
})

</script>

<template>
  <button @click="increment">{{ count }}</button>
  {{ doubleCount }}
  <br />
  <!-- 多个方法的结构测试，没问题 -->
  <button @click="test">test</button>

  <ul>
    <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
