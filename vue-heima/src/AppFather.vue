<!-- 父子通信：父传子 -->
<!-- 组合式API下的子传父
    基本思想：
    1.父组件中给子组件标签通过@绑定事件
    2.子组件内部通过$emit方法触发事件 
-->
<script setup>
import { ref } from 'vue'
import SonCom from './AppSon-com.vue'

// 响应式数据
const count = ref(0)

setTimeout(() => {
    count.value = 3
}, 3000);

const getMessage = (msg) => {
    console.log("son to father:", msg)
}
</script>

<template>
    <div class="father">
        <h2>父组件app:示例是第一个框</h2>
        <!-- 响应式数据用：绑定；冒号后面的count是对应子组件中定义的key；引号中的count是对应父组件这里定义的count变量
            静态数据直接写，不用冒号
        -->
        <SonCom :count="count" message="father message"></SonCom>
    </div>
    <div class="father2">
        <h2>父组件app2：示例是第二个框</h2>
        <!-- 绑定事件：@后面是子组件定义的函数名称，引号里面的是父组件这里的函数名 -->
        <SonCom @get-Message="getMessage"></SonCom>
    </div>
</template>

<style scoped>
.father {
    border-style: solid;
    border-width: 3px 3px 3px 3px;
    border-color: red;
    margin-bottom: 100px;
}

.father2 {
    border-style: solid;
    border-width: 3px 3px 3px 3px;
    border-color: turquoise;
}
</style>