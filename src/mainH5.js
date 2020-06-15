// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import App from "./AppH5";
import router from "./router/h5/index";
import store from "./store/index";
import FastClick from "fastclick";
import "./icons"; // icon
import VueI18n from "vue-i18n";
import i18n from "./i18n/index";

import fly from "@/api/index";
Vue.prototype.$http = fly;

// 多语言
Vue.use(VueI18n, {
  i18n: (key, value) => i18n.t(key, value)
});

import dt from "./utils/debounce/index";
Vue.prototype.$dt = dt;

//全局引入rem
import "@/utils/rem";

// 全局引入UI库 vant
import "@/plugins/vant";

// 解决移动端点击延迟200ms的问题
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      FastClick.attach(document.body);
    },
    false
  );
}

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.mixin({
  data() {
    return {
      service: "", // 服务
      router: "/", // 路由路径
      imgSrc: "" // 图片路径
    };
  },
  methods: {
    newroot() {
      return this.$route;
    },
    navigatePageTo(url) {
      this.$router.push(url);
    },
    reLaunchPageTo(url) {
      this.$router.replace(url);
    },
    setStorageSync(name, data) {
      sessionStorage.setItem(name, JSON.stringify(data));
    },
    getStorageSync(name) {
      return JSON.parse(sessionStorage.getItem(name));
    }
  },
  created() {
    //this.service = httpService
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store,
  i18n
});

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}
