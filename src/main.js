import Vue from "vue";
import App from "./App";

// import MpvueRouterPatch from 'mpvue-router-patch'
// Vue.use(MpvueRouterPatch)

import fly from '@/api/index';
Vue.prototype.$http = fly;


import "./router/mp/index";

import Vuex from "vuex";
import store from "./store/entry/wx";
Vue.use(Vuex);

Vue.prototype.$store = store;
// Vue.prototype.$i18n = i18n

import dt from "./utils/debounce/index";
Vue.prototype.$dt = dt;

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue(App);
app.$mount();

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
