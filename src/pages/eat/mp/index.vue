<template>
  <div class="eat">
    <ul class="list-content">
      <li class="list-item" v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>

    <vTabBar></vTabBar>

    <!--这种特殊占位符是必须有的！-->
    <van-toast id="van-toast" />

    <!-- <div class="loading" v-show="isloadmore">
      <span>loading...</span>
    </div> -->
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
      toast: "",
      isloadmore: false,
      isNoMoreData: false
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
    //return;

    if (this.isNoMoreData) {
      Toast("没有更多数据啦");
      return;
    }

    Toast.loading({
      mask: false,
      message: "加载中...",
      duration: 3000,
      onClose: () => {
        this.getData().then(res => {
          this.items = this.items.concat(res);

          if (this.count < 40) {
          } else {
            this.isNoMoreData = true;
          }
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
