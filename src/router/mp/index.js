import Vue from "vue";
// import VueRouter from 'vue-router-mp'
import VueRouter from "@/utils/vue-router-mp/src/index.js";
Vue.use(VueRouter);

import store from "@/store/entry/wx";

// 1. 定义路由
// 此处由于小程序页面路径与源码一一对应，故无需配置组件
const routes = [
  {
    name: "home", // 命名路由
    path: "/pages/home/mp/main",
    isTab: false, // 标记当前路由是一个 Tab
  },
  {
    name: "category", // 命名路由
    path: "/pages/category/mp/main",
    isTab: false, // 标记当前路由是一个 Tab
  },
  {
    name: "cart", // 命名路由
    path: "/pages/cart/mp/main",
    isTab: false, // 标记当前路由是一个 Tab
  },
  {
    name: "eat", // 命名路由
    path: "/pages/eat/mp/main",
    isTab: false, // 标记当前路由是一个 Tab
  },
  {
    name: "mine", // 命名路由
    path: "/pages/mine/mp/main",
    isTab: false, // 标记当前路由是一个 Tab
  },
  {
    name: "goods", // 命名路由
    path: "/pages/goods/mp/main",
    isTab: false, // 标记当前路由是一个 Tab
  },
  {
    name: "order", // 命名路由
    path: "/pages/order/mp/main",
    isTab: false, // 标记当前路由是一个 Tab
  },

  {
    name: "/pages/demo/mp/index/main", // 命名路由
    path: "/pages/demo/mp/index/main",
    isTab: false, // 标记当前路由是一个 Tab
  },
];

// 2. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

router.beforeEach((to, from, next) => {
  let result = store.state.dashboard.tabbars
    .map((value, key, arr) => {
      return value.name;
    })
    .indexOf(to.name);

  store.dispatch("dashboard/setActiveTab", result);
  next();
});

// export default router
