import Vue from "vue";
import Vuex from "vuex";
import getters from "../getters";
import dashboard from "../modules/dashboard";
import permission from "../modules/permission";
import createLogger from "@/plugins/logger";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const vuexPersisted = new createPersistedState({
  key: "myVuex",
  storage: window.localStorage,
  reducer: state => ({
    permission: {
      routes: state.permission.routes
    }
  })
});

export default new Vuex.Store({
  getters,
  modules: {
    permission,
    dashboard
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  plugins: debug ? [createLogger(), vuexPersisted] : [vuexPersisted]
});
