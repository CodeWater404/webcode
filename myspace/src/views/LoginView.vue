<template>
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3 ">
        <!-- @submit=""有自己默认事件； @submit.prevent=""阻止表单默认的行为 -->
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="username" class="form-label">用户名</label>
            <input v-model="username" type="text" class="form-control" id="username">

          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密码</label>
            <input v-model="password" type="password" class="form-control" id="password">
            <div class="error-message">{{ error_message }}</div>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </ContentBase>
</template>
  
<script>
import ContentBase from "../components/ContentBase.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import router from "@/router/index";

export default {
  name: 'LoginView',
  components: {
    ContentBase,
  },

  setup() {
    const store = useStore();
    let username = ref('');
    let password = ref('');
    let error_message = ref('');

    const login = () => {
      //每次登录前，清空下error_message
      error_message.value = "";

      // 调用user.js里面的函数，第一个参数是函数名，第二个是传递的数据
      store.dispatch("login", {
        username: username.value,
        password: password.value,
        // 成功和失败的回调函数
        success() {
          // 登录成功跳转到好友列表页面
          router.push({ name: "userlist" });
        },
        error() {
          error_message.value = "用户名或密码错误";
        },

      });
    };

    return {
      username,
      password,
      error_message,
      login,
    }
  }
}
</script>
  
<style scoped>
button {
  width: 100%;
}

.error-message {
  color: red;
}
</style>