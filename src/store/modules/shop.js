import {
  getLanguage
} from "@/i18n/index";
const state = {
  // 购物车数据
  shopCart: {},
  // 用户信息
  userInfo: {},
  // 收货地址
  shippingAddress: [],
  language: getLanguage()
};

const mutations = {
  SET_MENU: (state, data) => {
    state.routes = data;
  }
};

const actions = {
  getMenuData({
    commit
  }, data) {
    commit("SET_MENU", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
