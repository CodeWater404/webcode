<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <!-- 这是view父组件，userprofileinfo是子组件；这里父向子传递数据用v-bind，但是一般省略写法 -->
                <!-- <UserProfileInfo v-bind:user="user" /> -->
                <UserProfileInfo :user="user" />
            </div>
            <div class="col-9">
                <UserProfilePosts />
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

        return {
            user,
        }
    }
}
</script>
  
<style scoped></style>