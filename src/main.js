import Vue from 'vue'
import App from './App'
// import MpvueRouterPatch from 'mpvue-router-patch'
// Vue.use(MpvueRouterPatch)


import VueRouter from 'vue-router-mp'
Vue.use(VueRouter);

// 1. 定义路由
// 此处由于小程序页面路径与源码一一对应，故无需配置组件
const routes = [{
  name: 'home', // 命名路由
  path: '/pages/home/mp/main',
  isTab: true // 标记当前路由是一个 Tab
}, {
  name: 'category', // 命名路由
  path: '/pages/category/mp/main',
  isTab: true // 标记当前路由是一个 Tab
}]

// 2. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
})

import Vuex from 'vuex'
import store from './store/entry/wx'
Vue.use(Vuex)

Vue.prototype.$store = store
// Vue.prototype.$router = router
// Vue.prototype.$i18n = i18n


Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const {
    mockXHR
  } = require('../mock')
  mockXHR()
}
