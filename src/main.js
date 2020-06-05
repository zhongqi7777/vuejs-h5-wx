import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import Vuex from 'vuex'
import store from './store/entry/wx'
Vue.use(Vuex)

// import VueI18n from "vue-i18n";
// import i18n from "./i18n/index";
// // 多语言
// Vue.use(VueI18n, {
//   i18n: (key, value) => i18n.t(key, value)
// });


Vue.prototype.$store = store
// Vue.prototype.$i18n = i18n

Vue.use(MpvueRouterPatch)
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
    const { mockXHR } = require('../mock')
    mockXHR()
}

