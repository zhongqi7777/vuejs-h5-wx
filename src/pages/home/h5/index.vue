<template>
  <div class="home">
    <vHeader></vHeader>
    <div class="v-content">
    <van-button type="info" @click="fetch">请求数据</van-button>

    
    </div>
  </div>
</template>

<script>
import vHeader from "../components/header/h5/index";
import { getMenu } from "@/api/index";

export default {
  data() {
    return {};
  },

  components: {
    vHeader,
  },

  methods: {
    fetch() {
      //getMenu();

      var params = {
        // page: 1,
        // pageSize: 15,
      };
      this.$http.policy(params).then(function(res) {
        console.log("success");
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
