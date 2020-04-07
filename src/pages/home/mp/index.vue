<template>
  <div class="home">
    <!-- <h1>h5</h1> -->
    <van-button type="info" @click="getHomeData">h5 小程序</van-button>
  </div>
</template>

<script>
/* eslint-disable */
import { getMenu } from "@/api/index";

export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    //console.log(this.getHomeData());
  },
  methods: {
    getHomeData() {
      getMenu();
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
.home {
  height: 300px;
  background: red;
}
</style>
