<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/56988_sm_24a4075c18.jpg">
                </div>
                <div class="col-9">
                    <div class="username">{{ fullName }}</div>
                    <div class="fans">粉丝：{{ user.followerCount }}</div>
                    <!-- v-on:click 可以简写为@click  -->
                    <button @click="follow" v-if="!user.is_followed" type="button"
                        class="btn btn-secondary btn-sm">+关注</button>
                    <button @click="unfollow" v-if="user.is_followed" type="button"
                        class="btn btn-secondary btn-sm">取消关注</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    name: "UserProfileInfo",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    // 子组件向父组件传递信息用context
    setup(props, context) {
        // computed表示动态计算值
        let fullName = computed(() => props.user.lastName + " " + props.user.firstName);

        const follow = () => {
            context.emit("follow");
        }

        const unfollow = () => {
            context.emit("unfollow");
        }
        // 这里必须要返回，返回了才可以在template里面使用
        return {
            fullName,
            follow,
            unfollow,
        }
    }
}
</script>


<style scoped>
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
}

.fans {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>