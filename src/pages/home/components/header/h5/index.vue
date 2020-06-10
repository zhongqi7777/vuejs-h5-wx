<template>
  <div class="head">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />

    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img class="imgage" :src="thumb" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script type="text/javascript">
import { Toast } from "vant";

export default {
  data() {
    return {
      value: "",
          goods: {
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
          '/static/images/goods/e5a5a02309a41f9f5def56684808d9ae.jpeg',
          '/static/images/goods/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      }
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
