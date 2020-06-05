/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import login from "../pages/login/h5/index.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: login,
    }
  ]
});
