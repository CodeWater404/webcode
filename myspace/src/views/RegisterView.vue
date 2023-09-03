<template>
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3 ">
        <!-- @submit=""有自己默认事件； @submit.prevent=""阻止表单默认的行为 -->
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="username" class="form-label">用户名</label>
            <input v-model="username" type="text" class="form-control" id="username">

          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密码</label>
            <input v-model="password" type="password" class="form-control" id="password">
            <div class="error-message">{{ error_message }}</div>
          </div>
          <div class="mb-3">
            <label for="password_confirm" class="form-label">确认密码</label>
            <input v-model="password_confirm" type="password" class="form-control" id="password_confirm">
          </div>
          <div class="error-message">{{ error_message }}</div>

          <button type="submit" class="btn btn-primary">注册</button>
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
import $ from "jquery";

export default {
  name: 'RegisterView',
  components: {
    ContentBase,
  },

  setup() {
    const store = useStore();
    let username = ref('');
    let password = ref('');
    let password_confirm = ref('');
    let error_message = ref('');

    const register = () => {

      error_message.value = "";
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/user/",
        type: "POST",
        data: {
          username: username.value,
          password: password.value,
          password_confirm: password_confirm.value,
        },
        success(resp) {
          if (resp.result === "success") {
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
                error_message.value = "系统错误，请稍后重试！！！";
              },
            });
          } else {
            error_message.value = resp.result;
          }
        },
      });
    };

    return {
      username,
      password,
      password_confirm,
      error_message,
      register,
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