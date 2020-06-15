import BScroll from './BScroll.vue'   //https://github.com/huangjincq/vue-better-scroll

/* istanbul ignore next */
BScroll.install = function (Vue) {
  Vue.component(BScroll.name, BScroll)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BScroll);
}

export default BScroll


