<template>
  <div class="home">
    <h1>h5</h1>
  </div>
</template>

<script>
/* eslint-disable */
import { get } from "../../utils/request";

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

<style lang="stylus" scoped>
.book-home {
  margin-top: 23px;
}
</style>
