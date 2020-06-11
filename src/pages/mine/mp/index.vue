<template>
  <div class="mine">
    <img class="user-poster" src="/static/images/mine/banner.png" />
    <van-row class="user-links">
      <van-col span="6"> <van-icon name="pending-payment" />待付款 </van-col>
      <van-col span="6"> <van-icon name="records" />待接单 </van-col>
      <van-col span="6"> <van-icon name="tosend" />待发货 </van-col>
      <van-col span="6"> <van-icon name="logistics" />已发货 </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
      <van-cell
        icon="points"
        title="演示"
        is-link
        url="/pages/demo/mp/index/main"
      />
    </van-cell-group>
    <vTabBar></vTabBar>
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
    setFieldStatus(result, id) {
      if (!result) {
        this.isFormError = true;
        this[`is${id}Error`] = true;
      } else {
        this.isFormError = false;
        this[`is${id}Error`] = false;
      }
    },

    // bind date
    onNormalPhoneChange(e) {
      this.normal.phone = e.mp.detail;
    },
    onNormalPasswordChange(e) {
      this.normal.password = e.mp.detail;
    },
    onMessagePhoneChange(e) {
      this.message.phone = e.mp.detail;
    },
    onMessageCodeChange(e) {
      this.message.code = e.mp.detail;
    },

    // validate
    checkNormalPhoneValue() {
      this.setFieldStatus(phoneRegExp.test(this.normal.phone), "NormalPhone");
    },
    checkNormalPasswordValue() {
      this.setFieldStatus(
        passwordRegExp.test(this.normal.password),
        "NormalPassword"
      );
    },
    checkMessagePhoneValue() {
      this.setFieldStatus(phoneRegExp.test(this.message.phone), "MessagePhone");
    },
    checkMessageCodeValue() {
      this.setFieldStatus(codeRegExp.test(this.message.code), "MessageCode");
    },

    onCodeSend() {
      wx.showToast({
        title: `验证码已发送`
      });
      // Countdown
      const countdown = 60;
      const rawText = this.codeText;
      this.isCodeDesabled = true;

      for (let index = countdown; index >= 0; index--) {
        setTimeout(() => {
          this.codeText = `已发送（${index}s）`;
          if (index === 0) {
            this.codeText = rawText;
            this.isCodeDesabled = false;
          }
        }, 1000 * (countdown - index));
      }
    },

    onSubmit() {
      let formDate;

      if (this.active === 0) {
        this.checkNormalPhoneValue();
        this.checkNormalPasswordValue();
        formDate = this.normal;
      } else {
        this.checkMessagePhoneValue();
        this.checkMessageCodeValue();
        formDate = this.message;
      }

      if (!this.isFormError) {
        wx.showToast({
          title: `发送数据 ${JSON.stringify(formDate)}`,
          icon: "none"
        });

        // router jump
        setTimeout(() => {
          wx.switchTab({
            url: "/pages/index/main"
          });
        }, 1000);
      }
    },

    onTabsChange(event) {
      this.active = event.mp.detail.index;
      // reset form status
      this.isFormError = false;
    }
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
