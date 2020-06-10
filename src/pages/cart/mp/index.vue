<template>
  <div class="container">
    <div class="logo">
      <span @click="cart">cart</span>
    </div>
    <vTabBar></vTabBar>
  </div>
</template>

<script>
import vTabBar from "@/pages/dashboard/mp/index";

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
   cart(){
     this.$router.push({name:"order"});
   }
  }
};
</script>


<style scoped>
@import "./index.less";
</style>
