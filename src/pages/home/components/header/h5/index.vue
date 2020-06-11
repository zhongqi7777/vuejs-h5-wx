<template>
  <div class="head">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
      @input="inputChange"
    />

    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img class="imgage" :src="thumb" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Toast } from "vant";
import { debounce } from "@/utils/util";

var Main = debounce(function(e) {
  //处理操作的主程序
  console.log("防抖成功！\n获取到的输入值为：", e.target.value);
}, 1000);

export default {
  data() {
    return {
      value: "",
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: [
          "/static/images/goods/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "/static/images/goods/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      }
    };
  },
  methods: {
    // press enter key call
    onSearch(val) {
      Toast(val);
    },
    // click cancel button call
    onCancel() {
      Toast("取消");
    },
    //debounce: debounce,
    debounceAjax: Main,

    // add loadsh debounce 函数防抖
    inputChange(val) {
      //防抖time（非立即执行）
      this.$dt.start({
        type: "debounce",
        immediate: false,
        time: 1000,
        success: () => {
          Toast(val);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
