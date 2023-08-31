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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserProfilePost",
    props: {
        posts: {
            type: Object,
            // 表示必须传
            required: true,
        }
    }
}
</script>

<style scoped>
.single-post {
    margin-bottom: 10px;
}
</style>
