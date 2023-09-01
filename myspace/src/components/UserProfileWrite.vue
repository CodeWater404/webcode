<!-- 发帖模块 -->

<template>
    <div class="card edit-field">
        <div class="card-body">
            <label for="edit-post" class="form-label">编辑帖子</label>
            <!-- v-model把这里的conten和下面js脚本中content变量绑定，内容实时显示 -->
            <textarea v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
            <button @click="post_a_post" type="button" class="btn btn-primary btn-sm">发帖</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "UserProfileWrite",
    setup(props, context) {
        //存储非对象元素用ref
        let content = ref('');
        const post_a_post = () => {
            // context.emit可以触发父组件的事件;第二个参数为事件的参数
            context.emit("post_a_post", content.value)
            content.value = "";
        }

        return {
            // 原本写法是content：content 这里名字都一样，可以缩写
            content,
            post_a_post,
        }
    }
}

</script>

<style scoped>
.edit-field {
    margin-top: 20px;
}

button {
    margin-top: 10px;
}
</style>