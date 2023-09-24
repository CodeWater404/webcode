<!-- watch函数 -->

<script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const name = ref('name')
const changeName = () => {
    name.value = 'changed name...'
}
const setCount = () => {
    count.value++
}

// 1.watch监听单个数据源；ref对象不需要加value
// watch(count, (newVal, oldVal) => {
//     console.log("count has changed: ", newVal, oldVal)
// })

// 2.监听多个数据源
// watch(
//     [count, name],
//     (
//         [newCount, newName],
//         [oldCount, oldName]
//     ) => {
//         console.log("count or name has changed: ", [newCount, newName], [oldCount, oldName])
//     })

// 3.watch立即执行
watch(count, () => {
    console.log("count has changed....")
}, {
    immediated: true
})

// 4. watch:开启深层监听(递归来的，所以性能有损耗)
// 默认机制：通过watch监听的ref对象默认是浅层侦听的，直接修改嵌套的对象属性不会触发回调执行，需要开启deep选项
const obj = ref({
    count: 1,
    age: 18
})

const changeObjCount = () => {
    obj.value.count++
}

const changeObjAge = () => {
    obj.value.age++
}

// watch(obj, () => {
//     console.log("all obj's attributes have changed...")
// }, {
//     deep: true
// })

// 5.精确监听
watch(
    () => obj.value.age,
    () => console.log("obj's age attribute has changed....")
)
</script>

<template>
    <div>
        <button @click="setCount">{{ count }}</button>
    </div>
    <div>
        <button @click="changeName">{{ name }}</button>
    </div>
    <p>深层监听</p>
    <div>
        <button @click="changeObjCount">count:{{ obj.count }}</button>
        <button @click="changeObjAge">age:{{ obj.age }}</button>
    </div>
</template>