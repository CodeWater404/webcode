<!-- 个人用户动态页面 -->
<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <!-- 这是view父组件，userprofileinfo是子组件；这里父向子传递数据用v-bind，但是一般省略写法 -->
                <!-- <UserProfileInfo v-bind:user="user" /> -->
                <!-- @follow名称随便写，主要是子组件里面emit里面那里传过来的对应上就行; @绑定事件，：绑定属性 -->
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
                <!-- post_a_post为一个事件，绑定js脚本中的post_a_post函数 -->
                <UserProfileWrite @post_a_post="post_a_post" v-if="is_me" />
            </div>
            <div class="col-9">
                <UserProfilePosts :user="user" :posts="posts" @delete_a_post="delete_a_post" />
            </div>
        </div>
    </ContentBase>
</template>
  
<script>
import ContentBase from "../components/ContentBase.vue";
import UserProfileInfo from "../components/UserProfileInfo.vue";
import UserProfilePosts from "../components/UserProfilePosts.vue";
import UserProfileWrite from "../components/UserProfileWrite.vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import $ from "jquery";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
    name: 'UserList',
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePosts,
        UserProfileWrite,
    },
    //setup初始化函数
    setup() {
        const store = useStore();
        // 从链接上获取参数   
        const route = useRoute();
        const userId = parseInt(route.params.userId);

        // 数据如果发生改边，reactive类型的会自动变化修改过的值
        const user = reactive({});
        const posts = reactive({});

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
            type: "GET",
            // 请求接口时需要的参数
            data: {
                user_id: userId,
            },
            headers: {
                "Authorization": "Bearer " + store.state.user.access,
            },
            // 接口成功时获取到的用户信息resp
            success(resp) {
                user.id = resp.id;
                user.username = resp.username;
                user.photo = resp.photo;
                user.followerCount = resp.followerCount;
                user.is_followed = resp.is_followed;
            },
        });
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/post/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                "Authorization": "Bearer " + store.state.user.access,
            },
            success(resp) {
                posts.count = resp.length;
                posts.posts = resp;

            },
        });

        const follow = () => {
            // 已经关注过，再点不用触发，直接返回
            if (user.is_followed) return;
            user.is_followed = true;
            user.followerCount++;
        };

        const unfollow = () => {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followerCount--;
        };

        // 这里的参数content是子组件UserProfileWrite中传递过来的
        const post_a_post = content => {
            posts.count++;
            // 在数组的开头加一个元素：最新的帖子在最上方
            posts.posts.unshift({
                id: posts.count,
                userId: 1,
                content: content,
            })
        };
        const delete_a_post = post_id => {
            // filter循环遍历找到对应的帖子
            posts.posts = posts.posts.filter(post => post.id !== post_id);
            posts.count = posts.posts.lengh;
        };

        const is_me = computed(() => userId === store.state.user.id);

        return {
            user,
            follow,
            unfollow,
            posts,
            post_a_post,
            is_me,
            delete_a_post,
        }
    }
}
</script>
  
<style scoped></style>