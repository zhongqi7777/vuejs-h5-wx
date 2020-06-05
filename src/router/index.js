/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import('../pages/login/h5/index.vue')
    }
  ]
});
