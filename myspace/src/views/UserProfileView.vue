<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <!-- 这是view父组件，userprofileinfo是子组件；这里父向子传递数据用v-bind，但是一般省略写法 -->
                <!-- <UserProfileInfo v-bind:user="user" /> -->
                <!-- @follow名称随便写，主要是子组件里面emit里面那里传过来的对应上就行 -->
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
            </div>
            <div class="col-9">
                <UserProfilePosts :posts="posts" />
            </div>
        </div>
    </ContentBase>
</template>
  
<script>
import ContentBase from "../components/ContentBase.vue";
import UserProfileInfo from "../components/UserProfileInfo.vue";
import UserProfilePosts from "../components/UserProfilePosts.vue";
import { reactive } from "vue";
export default {
    name: 'UserProfileView',
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePosts,
    },
    //setup初始化函数
    setup() {
        const user = reactive({
            id: 1,
            username: "watercode",
            lastName: "code",
            firstName: "water",
            // 粉丝数
            followerCount: 9999,
            // 是否关注过
            is_followed: false,
        });

        const posts = reactive({
            count: 3,
            posts: [
                {
                    id: 1,
                    userId: 1,
                    content: "I had a web class today! \n I am very happy!!!!!"
                },
                {
                    id: 2,
                    userId: 2,
                    content: "I had a algorithm class today! \n I am very sad!!!!!"
                },
                {
                    id: 2,
                    userId: 2,
                    content: "I had a linux class today! \n I am very happy too!!!!!"
                },
            ]
        });

        const follow = () => {
            // 已经关注过，再点不用触发，直接返回
            if (user.is_follow) return;
            user.is_followed = true;
            user.followerCount++
        }

        const unfollow = () => {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followerCount--;
        }

        return {
            user,
            follow,
            unfollow,
            posts,
        }
    }
}
</script>
  
<style scoped></style>