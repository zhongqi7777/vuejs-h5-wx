import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import Vuex from 'vuex'
import store from './store/entry/wx'
Vue.use(Vuex)

Vue.prototype.$store = store

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
