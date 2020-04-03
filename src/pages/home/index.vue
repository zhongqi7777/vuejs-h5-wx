<template>
  <div class="home">
    <!-- <h1>h5</h1> -->
    <van-button type="info">h5 小程序2021</van-button>
  </div>
</template>

<script>
/* eslint-disable */
import { get } from "../../utils/request";
// import { Button, Toast } from "vant";

let instance = {
  components: {},
  data() {
    return {};
  },
  mounted() {
    //console.log(this.getHomeData());
  },
  methods: {
    getHomeData() {
      get("https://test.youbaobao.xyz:18081/book/home/v2?openId=1234").then(
        response => {
          console.log(response);
        }
      );
    },
    onBookMoreClick() {
      console.log("book click");
    },
    onHomeBookClick() {
      console.log("more click");
    },
    // 搜索跳转页
    onSearchBarkClick() {},
    onBannerClick() {}
  }
};

// console.log("process.env.PLATFORM home", process.env.PLATFORM);
if (process.env.PLATFORM == "h5") {
  // components = {
  //   [Button && Button.name]: Button
  // };
  //instance.set();
  instance = {
    ...instance,
    components: {
      [Button.name]: Button
    }
  };
}

export default instance;
</script>

<style lang="scss" scoped>
.home {
  height: 300px;
  background: red;
}
</style>
