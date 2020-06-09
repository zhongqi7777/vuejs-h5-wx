

const state = {
    activeTab: 0,
    tabbars: [
      {
        name: "home",
        title: "home.home",
        normal: "/static/images/tabbar/home_default.png",
        active: "/static/images/tabbar/home_selected.png",
        text: "首页"
      },
      {
        name: "category",
        title: "home.category",
        normal: "/static/images/tabbar/category_default.png",
        active: "/static/images/tabbar/category_selected.png",
        text: "分类"
      },
      {
        name: "eat",
        title: "home.eat",
        normal: "/static/images/tabbar/eat_default.png",
        active: "/static/images/tabbar/eat_selected.png",
        text: "吃什么"
      },
      {
        name: "cart",
        title: "home.cart",
        normal: "/static/images/tabbar/shoppingcart_default.png",
        active: "/static/images/tabbar/shoppingcart_selected.png",
        num: 1,
        text: "购物车"
      },
      {
        name: "mine",
        title: "home.mine",
        normal: "/static/images/tabbar/mine_default.png",
        active: "/static/images/tabbar/mine_selected.png",
        text: "我的"
      }
    ]
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
  