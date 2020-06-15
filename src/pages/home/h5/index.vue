<template>
  <div class="home">
    <vHeader></vHeader>
    <div class="v-content">
      <van-button type="info" @click="fetch" class="btn-fetch"
        >请求数据</van-button
      >

      <van-button type="info" class="btn-fetch" @click="testAction"
        >vuex action</van-button
      >

      <div>state: {{ permission.routes }}</div>
      <div>getter:{{ permission_routes }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import vHeader from "../components/header/h5/index";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["permission"]),
    ...mapGetters(["permission_routes"]),
  },

  components: {
    vHeader,
  },

  methods: {
    fetch() {
      this.$http.getMenu({ type: "get" }).then(function(res) {
        console.log("res", res);
      });
    },
    testAction() {
      this.$store.dispatch("permission/getMenuData", "hi,vuex!");
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
