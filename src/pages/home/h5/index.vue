<template>
  <div class="home">
    <!-- <h1>h5</h1> -->
    <van-button type="info" @click="getHomeData">h5 小程序</van-button>
    {{permission.routes}}
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { getMenu } from "@/api/index";
import { Button, Toast } from "vant";
export default {
  components: {
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  data() {
    return {};
  },
  mounted() {
    //console.log(this.getHomeData());
  },
  computed: {
    ...mapState(["permission"])
  },
  methods: {
    ...mapActions(["getMenuData"]),
    getHomeData() {
      getMenu().then(res => {
        this.$toast("提示文案");
        if (res.data.code == 20000) {
          alert("success");
          this.$toast("提示文案");
        }
      });

      //this.getMenuData("Action");
      this.$store.dispatch("permission/getMenuData", "action");
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
.home {
  height: 300px;
  background: red;
}
</style>
