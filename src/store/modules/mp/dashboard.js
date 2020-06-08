

const state = {
    activeTab: 0,
  };
  
  const mutations = {
    ACTIVE_TAB: (state, data) => {
      state.activeTab = data;
    }
  };
  
  const actions = {
    setActiveTab({ commit }, data) {
      commit("ACTIVE_TAB", data);
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };
  