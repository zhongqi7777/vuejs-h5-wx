<template>
  <div class="home">
    <vHeader></vHeader>
    <div class="v-content"></div>
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

  methods: {}
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
