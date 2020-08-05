<template>
  <div id="app">
    <router-view></router-view>
    <van-icon name="share" class="share" size="35px" @click="share" />
    <van-popup v-model="show" >
    <div class="content">
      <h3>h5</h3>
    </div>
    </van-popup>
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
  data(){
    return{
      show:false
    }
  },
  created() {
    // 调用API从本地缓存中获取数据
    // 调用API从本地缓存中获取数据
    const logs = this.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    this.setStorageSync("logs", logs);
  },
  mounted() {
    // console.log("mpvuePlatform", process.env.mpvuePlatform);
  },
  methods: {
    share(){
      this.show=true
    }
  }
};
</script>

<style lang="less">
body {
  height: 100vh;
  #app {
    width: 100%;
    height: 100%;

    .share{
      position: fixed;
      bottom: 150px;
      right: 10px;
    }

    .content{
      width: 300px;
      height: 70px;
      text-align: center;
    }
  }
}

/** 解决 [Intervention] Unable to preventDefault 
inside passive event listener due to target being treated as
**/
* {
  touch-action: pan-y;
}
</style>
