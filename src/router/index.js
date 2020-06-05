/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  // 解决路由跳转页面没有置顶
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [

      {
        path: '/',
        redirect: '/dashboard',
        // 是否数据缓存
        // meta: {
        //     keepAlive: true
        // },
    },
    {
      path: "/dashboard",
      name: "dashbord",
      component: () => import('../pages/dashboard/h5/index.vue')
    }

    //demo
    //   {
    //   path: "/",
    //   name: "",
    //   component: () => import('../pages/demo/h5/index.vue')
    // }
  ]
});
