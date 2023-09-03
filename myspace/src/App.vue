<!-- TODO：bug：刷新页面就会退出登录的状态 -->

<template>
  <NavBar />
  <!-- :key="$route.fullPath"用完整的链接判定，这样点击右上方的自己用户名的时候就可以跳转自己的页面；
  如果不写，不会跳转。
原因：不写的时候用 name: 'userprofile'判断，而我们在写路由的时候都是userprofile/ -->
  <router-view :key="$route.fullPath" />
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: "App",
  components: {
    NavBar,
  }
}
</script>


<style></style>
