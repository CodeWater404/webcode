<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <!-- 这里采用router那里的路由，这样前端就能依靠点击进入，而不是直接修改地址栏。 -->
            <!-- 主要是router-link和：to这两个绑定实现 -->
            <router-link class="navbar-brand" :to="{ name: 'home' }">Myspace</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'userlist' }">好友列表</router-link>
                    </li>
                </ul>
                <!-- 如果不是登录的状态，显示登录页面 -->
                <ul class="navbar-nav" v-if="!$store.state.user.is_login">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'login' }">登录</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'register' }">注册</router-link>
                    </li>
                </ul>
                <!-- 如果是登录的状态，显示用户名 -->
                <ul class="navbar-nav" v-else>
                    <li class="nav-item">
                        <router-link class="nav-link"
                            :to="{ name: 'userprofile', params: { userId: $store.state.user.id } }">
                            {{ $store.state.user.username }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style="cursor: pointer" @click="logout">退出 </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { useStore } from "vuex";

export default {
    name: "NavBar",
    setup() {
        const store = useStore();
        // 如果调用的是mutation里面的内容用commit；如果是actions里面的用dispatch
        const logout = () => {
            store.commit("logout");
        };

        return {
            logout,
        };
    },

}
</script>


<style scpoed></style>