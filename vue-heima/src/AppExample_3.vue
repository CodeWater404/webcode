<!-- computed：
1.计算属性中不应该有“副作用”
    比如异步请求/修改dom
2.避免直接修改计算属性的值
    计算属性应该是只读的

-->
<script setup>
import { ref } from 'vue'
import { computed } from 'vue'

const list = ref([1, 2, 3, 4, 5, 6, 7, 8])

const computedList = computed(() => {
    return list.value.filter(item => item > 3)
})

setTimeout(() => {
    list.value.push(9, 10)
}, 3000)
</script>

<template>
    <div>
        原始响应式数据：{{ list }}
    </div>
    <div>
        计算属性数据：{{ computedList }}
    </div>
</template>