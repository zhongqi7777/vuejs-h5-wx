<template>
  <div class="home">
    <vHeader></vHeader>
    <div class="v-content">
      <van-button type="info" @click="fetch" class="btn-fetch"
        >请求数据</van-button
      >

      <van-button type="info" class="btn-fetch">vuex</van-button>
    </div>
  </div>
</template>

<script>
import vHeader from "../components/header/h5/index";
export default {
  data() {
    return {};
  },

  components: {
    vHeader
  },

  methods: {
    fetch() {
      this.$http.getMenu({ type: "get" }).then(function(res) {
        console.log("res", res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
