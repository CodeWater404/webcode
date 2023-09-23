<!-- settup -->
<!-- 根组件 -->

<!-- <script>
export default {
  setup() {
    console.log("setup...")
    const message = "this is message..."
    const logMessage = () => {
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  },
  beforeCreate() {
    console.log("before create...")
  }
}
</script> -->

<!-- 更简洁的写法，不用返回方法 -->
<script setup>
const message = "this is message..."
const logMessage = () => {
  console.log(message)
}
</script>

<template>
  <div>
    {{ message }}
    <button @click="logMessage">log</button>
  </div>
</template>
