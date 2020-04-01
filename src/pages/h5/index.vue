<template>
  <div class="home">
    <!-- <h1>h5</h1> -->
    <van-button type="info">信息按钮</van-button>
  </div>
</template>

<script>
/* eslint-disable */
import { get } from "../../utils/request";
import { Button, Toast } from "vant";

export default {
  components: {
    [Button.name]: Button
  },
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
</script>

<style lang="scss" scoped>
</style>
