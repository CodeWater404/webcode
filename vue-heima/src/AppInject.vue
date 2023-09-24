<!-- 底层组件 -->
<script setup >
import { inject } from 'vue';

// 1. 接收静态数据
const st_data = inject("static-data")

// 2. receive responsive data
const resp_data = inject("responsive-data")

//3. receive function
const fuc = inject('func-data')
</script>


<template>
    <div class="comment">
        <div class="comment-1">
            1. come from top_floor's static data: {{ st_data }}
        </div>
        <div class="comment-2">
            2. come from top_floor's responsive data: {{ resp_data }}
        </div>
        <div class="comment-3">
            <button @click="fuc">3.come from top_floor's function to change top_floor's data </button>
        </div>
    </div>
</template>

<style scoped>
.comment {
    border-style: dotted;
    width: 200px;
    border-color: blueviolet;
    margin: 10px;
}

.comment-1 {
    border-color: yellow;
    border-style: dotted;
    margin: 10px 10px 10px 10px;
}

.comment-2 {
    border-style: double;
    border-color: chartreuse;
    margin: 10px 10px 10px 10px;
}

.comment-3 {
    border-style: groove;
    border-color: tomato;
    margin: 10px 10px 10px 10px;
}
</style>