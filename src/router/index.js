/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import index from "../pages/home/h5/index.vue";
import goods from "../pages/goods/h5/index.vue";
import login from "../pages/login/h5/index.vue";
// import logs from '../pages/logs/index.vue'
// import counter from '../pages/counter/index.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: login,
    },
    // {
    //   path: "/logs",
    //   name: "logs",
    //   component: logs,
    //   alias: "/pages/logs/main"
    // },
    // {
    //   path: "/counter",
    //   name: "counter",
    //   component: counter,
    //   alias: "/pages/counter/main"
    // }
  ]
});
