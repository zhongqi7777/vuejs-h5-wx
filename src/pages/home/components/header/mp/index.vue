<template>
  <div class="head">
    <van-search
      :value="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
      @change="inputChange"
    />

    <swiper
      class="swiper"
      indicator-dots="true"
      autoplay="true"
      interval="5000"
      duration="1000"
    >
      <block v-for="(item, index) in movies" :index="index" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" mode="aspectFill" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      value: "",
      movies: [
        "/static/images/goods/e5a5a02309a41f9f5def56684808d9ae.jpeg",
        "/static/images/goods/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
      ]
    };
  },
  methods: {
    onSearch(event) {
      console.log(event);

      //要搜索的值
      let val = event.mp.detail;
      console.log(val);

      console.log(this.value1);

      wx.showToast({
        title: val, //提示的内容,
        icon: "success", //图标,
        duration: 2000, //延迟时间,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: res => {
          console.log(res);
        }
      });

      // 最好 把模型同步一下
      this.value1 = val;
    },
    //取消
    onCancel(event) {
      //这个参数好像没有啥用
      console.log(event);

      this.value1 = "";
    },
    // add loadsh debounce 函数防抖
    inputChange(val) {
      console.log("正在输入...");
      //防抖time（非立即执行）
      this.$dt.start({
        type: "debounce",
        immediate: false,
        time: 1000,
        success: () => {
          console.log(val.mp.detail);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
