<template>
  <div class="category">
    <div class="logo">
      <span @click="cart">category</span>
    </div>
    <vTabBar @onTabsChange="onTabsChange"></vTabBar>
  </div>
</template>

<script>
import vTabBar from "@/pages/dashboard/mp/index";
// import vImageView from "@/components/base/imageView";
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
        password: ""
      },
      message: {
        phone: "",
        code: ""
      }
    };
  },

  components: {
    vTabBar
  },

  methods: {
    onTabsChange(event) {
      //this.$router.push({ path: '/pages/home/mp/main' })
      //this.$router.push(`/pages/${event.name}/mp/main`);
      // this.$router.push({ path: `/pages/${event.name}/mp/main`, query: { id:event.name  } })
    },
    cart() {
      console.log(" cart(){");
      this.$router.push({ name: "goods" });
    }
  },
  beforeMount() {
    console.log("beforeMount category");
  },
  mounted() {
    console.log("mounted category ", this.$route.query.id);
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
