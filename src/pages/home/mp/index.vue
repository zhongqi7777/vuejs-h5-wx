<template>
  <div class="home">
    <vHeader></vHeader>
    <div class="v-content">
      <van-button type="info" @click="fetch">请求数据</van-button>
    </div>
    <vTabBar @onTabsChange="onTabsChange"></vTabBar>
  </div>
</template>

<script>
import vTabBar from "@/pages/dashboard/mp/index";

import vHeader from "../components/header/mp/index";
import { getMenu } from "@/api/index";

const phoneRegExp = /^1(3|4|5|6|7|8|9)\d{9}$/;
const passwordRegExp = /^\S{5,}$/;
const codeRegExp = /^\S{4}$/;

export default {
  data() {
    return {
      active: 0,

      codeText: "获取验证码",

      // error status
      isNormalPhoneError: false,
      isNormalPasswordError: false,
      isMessagePhoneError: false,
      isMessageCodeError: false,
      isFormError: false,
      isCodeDesabled: false,

      // form data
      normal: {
        phone: "",
        password: "",
      },
      message: {
        phone: "",
        code: "",
      },
    };
  },

  components: {
    vTabBar,
    vHeader,
  },

  methods: {
    onTabsChange(event) {
      // console.log(' onTabsChange(event) {',event);
      // this.$router.push(`/pages/${event.name}/mp/main`);
    },
    fetch() {
      getMenu();
    },
  },
  // beforeCreate() {
  //   console.log("beforeCreate home");
  // },
  // created() {
  //   console.log("created home");
  // },
  beforeMount() {
    console.log("beforeMount home");
  },
  mounted() {
    console.log("mounted home", this.$route.query.id);
  },
  // beforeUpdate() {
  //   console.log("beforeUpdate home");
  // },
  // updated() {
  //   console.log("updated home");
  // },
  // beforeDestroy() {
  //   console.log("beforeDestroy home");
  // },
  // destroyed() {
  //   console.log("destroyed home");
  // },

  // onLoad(options) {
  //   console.log("onLoad监听页面加载");
  // },

  // onReady() {
  //   console.log("onReady监听页面初次渲染完成");
  // },

  // onShow() {
  //   console.log("onShow监听页面显示");
  // },

  // onHide() {
  //   console.log("onHide监听页面隐藏");
  // },

  // onUnload() {
  //   console.log("onUnload监听页面卸载");
  // }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
