const dashbord = {
  path: "/dashboard",
  name: "dashbord",
  component: () => import("@/pages/dashboard/h5/index.vue"),
  children: [
    {
      path: "/dashboard",
      redirect: "/dashboard/home",
      // 是否数据缓存

      meta: {
        keepAlive: true
      }
    },
    {
      // 主页
      path: "home",
      name: "home",
      component: () => import("@/pages/home/h5/index.vue"),
      // 是否数据缓存
      meta: {
        keepAlive: true
      }
    },
    {
      path: "category",
      name: "category",
      component: () => import("@/pages/category/h5/index.vue"),
      // 是否数据缓存
      meta: {
        keepAlive: true
      }
    },

    {
      path: "eat",
      name: "eat",
      component: () => import("@/pages/eat/h5/index.vue"),
      // 是否数据缓存
      meta: {
        keepAlive: true
      }
    },
    {
      path: "cart",
      name: "cart",
      component: () => import("@/pages/cart/h5/index.vue"),
      // 是否数据缓存
      meta: {
        keepAlive: true
      }
    },
    {
      path: "mine",
      name: "mine",
      component: () => import("@/pages/mine/h5/index.vue"),
      // 是否数据缓存
      meta: {
        keepAlive: true
      }
    }
  ]
};

export default dashbord;
