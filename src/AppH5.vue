<template>
  <div id="app">
    <router-view></router-view>
    <van-icon name="share" class="share" size="35px" @click="share" />
    <van-popup v-model="show">
      <div class="content">
        h5
      </div>
    </van-popup>
  </div>
</template>

<script>
/* eslint-disable */
import Mshare from "@/utils/m-share/m-share-es6";

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
  data() {
    return {
      show: false
    };
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
    share() {
      // this.show = true;

      Mshare.to("wx", {
        title: "m-share", // 标题，默认读取document.title
        desc: "m-share的描述", // 描述, 默认读取head标签：<meta name="description" content="desc" />
        link: "http://www.dearhaoge.com/project/m-share/", // 网址，默认使用window.location.href
        imgUrl: "http://www.dearhaoge.com/project/m-share/shareIcon.jpg", // 图片, 默认取网页中第一个img标签
        fnDoShare: function(type) {
          console.log(1);
        }
      });
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

    .share {
      position: fixed;
      bottom: 150px;
      right: 10px;
    }

    .content {
      font-size: 15px;
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
