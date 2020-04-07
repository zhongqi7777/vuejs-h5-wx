

const state = {
  routes: "test2021",
};

const mutations = {
  SET_MENU: (state, data) => {
    state.routes = data;
  }
};

const actions = {
  getMenuData({ commit }, data) {
    commit("SET_MENU", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
