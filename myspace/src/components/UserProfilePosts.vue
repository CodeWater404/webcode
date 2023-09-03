<!-- 帖子列表模块 -->
<template>
    <div class="card">
        <div class="card-body">
            <!-- 两个{{}}表示取值 -->
            <!-- {{ posts }} -->

            <!--key没有用到，但是vue机制，所以必须写 另外一种写法(下标可能会变，不推荐)： -->
            <!-- <div v-for="(post, index) in posts.posts" :key="index"> -->
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card single-post">
                    <div class="card-body">
                        {{ post.content }}
                        <button @click="delete_a_post(post.id)" v-if="is_me" type="button"
                            class="btn btn-danger btn-sm">删除帖子</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import $ from "jquery";

export default {
    name: "UserProfilePosts",
    props: {
        posts: {
            type: Object,
            // 表示必须传
            required: true,
        },
        // 从父组件userprofileview那里过来的数据
        user: {
            type: Object,
            required: true,
        }
    },
    setup(props, context) {
        const store = useStore();
        let is_me = computed(() => store.state.user.id === props.user.id);

        const delete_a_post = post_id => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "DELETE",
                data: {
                    // key-value名字一样的时候，可以省略写成下面那样；正常时post_id:post_id
                    post_id,
                },
                headers: {
                    "Authorization": "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result === "success") {
                        // 触发父组件中的删除帖子事件
                        context.emit("delete_a_post", post_id);
                    }
                },
            });
        };

        return {
            is_me,
            delete_a_post,
        };
    },

}
</script>

<style scoped>
.single-post {
    margin-bottom: 10px;
}

button {
    /* 让元素浮动到右边 */
    float: right;
}
</style>
