<!-- AppFather的子组件 -->
<script setup>

// 这里定义接收父组件传过来的数据类型：
const props = defineProps({
    //数据名称：数据类型
    message: String,
    count: Number
})

console.log("son props:", props)

const emit = defineEmits(['get-message'])
const sendMsg = () => {
    // 触发自定义事件，传递给父组件
    emit('get-message', "this is son to message!!!!")
}
</script>

<template >
    <div class="son">
        <h3>子组件</h3>
        <div>
            父组件传入的数据(静态数据)：{{ message }}
            <br />
            父组件传入的数据(响应式数据)：{{ count }}
        </div>
    </div>
    <div class="son2">
        <h3>子组件2</h3>
        <br />
        <button @click="sendMsg">触发自定义事件，传递给父组件</button>
    </div>
</template>

<style scoped>
.son {
    border-style: solid;
    border-color: red;
    border-bottom: 10px;
}

.son2 {
    border-style: solid;
    border-color: turquoise;
}
</style>