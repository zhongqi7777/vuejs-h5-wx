<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */

// 禁止手机端扩大和缩小手势
window.onload = function() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
};

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
    // console.log("mpvuePlatform", process.env.mpvuePlatform);
  }
};
</script>

<style lang="less">
body {
  height: 100vh;
  #app {
    width: 100%;
    height: 100%;
  }
}

/** 解决 [Intervention] Unable to preventDefault 
inside passive event listener due to target being treated as
**/
* {
  touch-action: pan-y;
}
</style>
