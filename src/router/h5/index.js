/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

const router = new Router({
  // 解决路由跳转页面没有置顶
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      // 是否数据缓存
      // meta: {
      //     keepAlive: true
      // },
    },
    {
      path: "/dashboard",
      name: "dashbord",
      component: () => import("@/pages/dashboard/h5/index.vue"),
      children: [
        {
          path: "/dashboard",
          redirect: "/dashboard/home",
          // 是否数据缓存

          meta: {
            keepAlive: true,
          },
        },
        {
          // 主页
          path: "home",
          name: "home",
          component: () => import("@/pages/home/h5/index.vue"),
          // 是否数据缓存
          meta: {
            keepAlive: true,
          },
        },
        {
          path: "category",
          name: "category",
          component: () => import("@/pages/category/h5/index.vue"),
          // 是否数据缓存
          meta: {
            keepAlive: true,
          },
        },

        {
          path: "eat",
          name: "eat",
          component: () => import("@/pages/eat/h5/index.vue"),
          // 是否数据缓存
          meta: {
            keepAlive: true,
          },
        },
        {
          path: "cart",
          name: "cart",
          component: () => import("@/pages/cart/h5/index.vue"),
          // 是否数据缓存
          meta: {
            keepAlive: true,
          },
        },
        {
          path: "mine",
          name: "mine",
          component: () => import("@/pages/mine/h5/index.vue"),
          // 是否数据缓存
          meta: {
            keepAlive: true,
          },
        },
      ],
    },

    {
      path: "/goods",
      name: "goods",
      component: () => import("@/pages/goods/h5/index.vue"),
      // 是否数据缓存
      meta: {
        keepAlive: true,
      },
    },

    {
      path: "/order",
      name: "order",
      component: () => import("@/pages/order/h5/index.vue"),
      // 是否数据缓存
      meta: {
        keepAlive: true,
      },
    },

    //demo
    {
      path: "/debounce",
      name: "debounce",
      component: () => import("@/pages/demo/debounce/h5/index.vue"),
    },
  ],
});

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (state.userInfo.token) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});

export default router;
