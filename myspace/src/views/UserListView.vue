<template>
    <ContentBase>
        <div class="card" v-for="user in users" :key="user.id" @click="open_user_profile(user.id)">
            <div class="body">
                <div class="row">
                    <div class="col-1 img-field">
                        <!-- img-fluid是bootstrap的自适应样式 -->
                        <img class="img-fluid" :src="user.photo" alt="">
                    </div>
                    <div class="col-11">
                        <div class="username">{{ user.username }}</div>
                        <div class="follower-count">{{ user.followerCount }}</div>
                    </div>
                </div>

            </div>
        </div>
    </ContentBase>
</template>
  
<script>
import ContentBase from "../components/ContentBase.vue"
// 使用ajax功能导入的
import $ from "jquery";
import { ref } from "vue";
// 导入的时候，有的加{}有的不加是因为：来源那里的export有没有加{}，来源没有加{}那么import这里就随意而且名字可变； 
// 如果export来源那里有{}，那么import这里也要加{}，而且名字不能发生改边！！！！
import router from "@/router/index";
import { useStore } from "vuex";

export default {
    name: 'UserList',
    components: {
        ContentBase,
    },

    setup() {
        const store = useStore();
        let users = ref([]);

        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
            type: 'get',
            success(resp) {
                users.value = resp;
            }
        });

        // 点击用户动态页面：未登录的时候跳转登录页面；登录的时候就正常跳转用户动态页面
        const open_user_profile = userId => {
            if (store.state.user.is_login) {
                router.push({
                    name: "userprofile",
                    params: {
                        // userId:userId的简写（名字一样时可以）
                        userId,
                    },
                })
            } else {
                router.push({
                    name: "login",
                })
            }

        };

        return {
            users,
            open_user_profile,
        }
    },

}

</script>
  
<style scoped>
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
    height: 50%;
}

.follower-count {
    font-size: 12px;
    color: gray;
    height: 50%;
}

.card {
    margin-bottom: 20px;
    cursor: pointer;
}

.card:hover {
    box-shadow: 2px 2px 10px lightgrey;
    /* 动画延迟500ms */
    transition: 500ms;
}

.img-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>