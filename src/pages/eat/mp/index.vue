<template>
  <div class="eat">
    <div class="logo">
      <ul class="list-content">
        <li class="list-item" v-for="item in items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <vTabBar></vTabBar>

    <!--这种特殊占位符是必须有的！-->
    <van-toast id="custom-selector" />
  </div>
</template>

<script>
import vTabBar from "@/pages/dashboard/mp/index";
import Toast from "../../../../static/vant/toast/toast";

export default {
  data() {
    return {
      items: [],
      count: 0,
      toast: ""
    };
  },

  components: {
    vTabBar
  },

  methods: {
    // 模拟数据请求
    getData() {
      return new Promise(resolve => {
        setTimeout(() => {
          const arr = [];
          for (let i = 0; i < 15; i++) {
            arr.push(this.count++);
          }
          resolve(arr);
        }, 1000);
      });
    }
  },

  onPullDownRefresh() {
    console.log("下拉刷新");
  },

  onReachBottom() {
    console.log("触底了");

    Toast.loading({
      duration: 3000, // 持续展示 toast
      forbidClick: true, // 禁用背景点击
      message: "loading...",
      loadingType: "spinner",
      selector: "#custom-selector",
      onClose: () => {
        this.getData().then(res => {
          this.items = this.items.concat(res);
        });
      }
    });
  },

  mounted() {
    this.count = 0;
    this.getData().then(res => {
      this.items = res;
    });
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
