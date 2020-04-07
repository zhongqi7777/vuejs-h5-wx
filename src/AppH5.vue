<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "App",
  created() {
    // 调用API从本地缓存中获取数据
    // 调用API从本地缓存中获取数据
    const logs = this.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    this.setStorageSync("logs", logs);
  },
  mounted() {
    console.log("mpvuePlatform", process.env.mpvuePlatform);
  }
};
</script>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
