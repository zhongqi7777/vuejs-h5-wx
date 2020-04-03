<template>
  <div class="home">
    <van-button type="info">信息按钮 小程序</van-button>
    <!-- <searchBar disabled @onClick="onSearchBarkClick" />
    <HomeCard />
    <HomeBanner
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      title="mpvue2.0实战多端小程序课程上线啦"
      subTitle="立即体验"
      @onClick="onBannerClick"
    />
    <div :style="{marginTop: '23px'}">
      <HomeBook
        title="为你推荐"
        :row="2"
        :col="2"
        :data="data"
        mode="category"
        btn-text="换一批"
        @onMoreClick="onBookMoreClick"
        @onBookClick="onHomeBookClick"
      />
    </div>-->
    <!-- <h1>小程序</h1> -->
  </div>
</template>

<script>
/* eslint-disable */
// import SearchBar from "../../components/home/SearchBar";
// import HomeCard from "../../components/home/HomeCard";
// import HomeBanner from "../../components/home/HomeBanner";
// import HomeBook from "../../components/home/HomeBook";
import { get } from "../../utils/request";
import { Button, Toast } from "vant";

// console.log("process.env.PLATFORM 小程序", process.env.PLATFORM);
export default {
  components: {
    // HomeBook,
    // HomeBanner,
    // HomeCard,
    // SearchBar
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
.book-home {
  margin-top: 23px;
}
</style>
