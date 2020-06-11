<template>
  <div class="big-box">
    <div class="type-box">
      <div class="big-title">
        名词解释
      </div>
      <div class="info">
        函数节流(throttle)模式，锁定事件后无法触发，解锁后才可以触发
      </div>
      <div class="info1">1.传入time字段为指定时间后自动解锁</div>
      <div class="info1">
        2.不传time字段，需要执行this.$dt.releaseKey(key)来解锁，用于请求结束后解锁这种
      </div>
      <div class="info1">
        3.传入immediate字段为true，则会立即执行一次，默认为true
      </div>
      <div class="info1">
        4.传入immediate字段为false，则不会立即执行，time结束后才会执行，理解为延时执行
      </div>
      <div class="info1">
        5.由于节流模式，不传时间，且非立即执行，所以没有无time且不立即执行这种模式
      </div>

      <div class="info">函数防抖(debounce)模式</div>
      <div class="info1">1.如果不传time则默认time字段为300毫秒</div>
      <div class="info1">
        2.传入immediate字段为true，则会立即执行一次，time结束后会再执行一次，默认为true
      </div>
      <div class="info1">
        3.传入immediate字段为false，则不会立即执行，time结束后才会执行，理解为延时执行
      </div>

      <div class="info3">
        注意：请查看console，如事件写了fail回调，则重复提交时，被锁定的事件会执行fail回调
      </div>
    </div>

    <div class="type-box">
      <div class="big-title">
        函数节流(throttle)模式↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      </div>
      <div class="info">
        由于函数节流(throttle)模式，不传时间，且非立即执行，所以没有无time且不立即执行这种模式
      </div>
      <div class="line">
        <button @click="throttleTime">
          函数节流(throttle)time（非立即执行）配置了3000毫秒后执行
        </button>
      </div>
      <div class="line">
        <button @click="throttleTimeImmediate">
          函数节流(throttle)time（立即执行）配置了3000毫秒后才能再次执行
        </button>
      </div>
      <div class="line">
        <button @click="throttleNoTimeImmediate">
          函数节流(throttle)无time（立即执行）
        </button>
        <button @click="unLock('throttleNoTimeImmediate')">
          解锁左侧被锁定的事件
        </button>
      </div>
    </div>

    <div class="type-box">
      <div class="big-title">
        函数防抖(debounce)模式↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      </div>
      <div class="info">
        由于函数防抖(debounce)模式，不传时间，setTimeout默认为下一次操作就执行，所以这里默认了300毫秒，不存在不传time的模式
      </div>
      <div class="line">
        <button @click="debounceTime">
          函数防抖(debounce)time（非立即执行）300毫秒后才会执行
        </button>
      </div>
      <div class="line">
        <button @click="debounceTimeImmediate">
          函数防抖(debounce)time（立即执行）300毫秒后再次执行
        </button>
      </div>
    </div>

    <div class="type-box">
      <div class="big-title">
        混合使用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      </div>
      <div class="info">
        例如，立即支付与取消订单，不同方法传入相同的key，可以做到混合拦截
      </div>
      <div class="line">
        <button @click="payOrder">立即支付</button>
      </div>
      <div class="line">
        <button @click="cancelOrder">取消订单</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    throttleTime() {
      //节流time（非立即执行）
      this.$dt.start({
        type: "throttle",
        immediate: false,
        //key: "throttleTime",
        time: 3000,
        success: () => {
          Toast(
            "由于我传了time，并且非立即执行，所以我在time时间（当前配置为3秒）后触发了"
          );
        }
      });
    },
    throttleTimeImmediate() {
      //节流time（立即执行）
      this.$dt.start({
        type: "throttle",
        immediate: true,
        //key: "throttleTimeImmediate",
        time: 3000,
        success: () => {
          // Toast(
          //   "由于我传了time，并且立即执行，所以我被console了，且time时间内（3000毫秒）不会重复触发"
          // );

          console.log(
            "由于我传了time，并且立即执行，所以我被console了，且time时间内（3000毫秒）不会重复触发"
          );
        }
      });
    },
    throttleNoTimeImmediate() {
      //节流无time（立即执行）
      this.$dt.start({
        type: "throttle",
        immediate: true,
        //key: "throttleNoTimeImmediate",
        success: () => {
          Toast(
            "由于我没有传time，并且立即执行，所以我被console了，且time时间内（3000毫秒）不会重复触发"
          );
        }
      });
    },
    debounceTime() {
      //防抖time（非立即执行）
      this.$dt.start({
        type: "debounce",
        immediate: false,
        // key: "debounceTime",
        time: 1000,
        success: () => {
          Toast(
            "由于我非立即执行，所以我被console了，且time时间内（300毫秒）不会重复触发，这期间就不会被触发了，期间点击，会重新刷新time时间的定时器"
          );
        }
      });
    },
    debounceTimeImmediate() {
      //防抖time（立即执行）
      this.$dt.start({
        type: "debounce",
        immediate: true,
        //key: "debounceTimeImmediate",
        time: 3000,
        success: () => {
          Toast(
            "由于我立即执行，所以我立刻被console了，且time时间后（300毫秒）我还会被触发一次，这期间就不会被触发了，期间点击，会重新刷新time时间的定时器"
          );
        }
      });
    },
    unLock(key) {
      this.$dt.releaseKey(key);
    },
    payOrder() {
      //支付订单
      this.$dt.start({
        time: 3000,
        key: "orderAction",
        success: () => {
          Toast("支付订单");
        },
        fail: () => {
          Toast("频繁操作");
        }
      });
    },
    cancelOrder() {
      //取消订单
      this.$dt.start({
        time: 3000,
        key: "orderAction",
        success: () => {
          Toast("取消订单");
        },
        fail: () => {
          Toast("频繁操作");
        }
      });
    },
    showMsg(str) {
      Toast("请查看控制台的console");
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
