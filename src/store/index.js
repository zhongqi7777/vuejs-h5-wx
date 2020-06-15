import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import dashboard from "./modules/dashboard";
import permission from "./modules/permission";
import createLogger from "@/plugins/logger";
import createPersistedState from "vuex-persistedstate";

const platform = process.env.mpvuePlatform;

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

var vuexPersisted = "";
var plugins = [];

if (platform == "h5") {
  vuexPersisted = new createPersistedState({
    key: "myVuex",
    storage: window.localStorage,
    reducer: state => ({
      permission: {
        routes: state.permission.routes
      }
    })
  });
  plugins = debug ? [createLogger(), vuexPersisted] : [vuexPersisted];
} else {
  plugins = debug ? [createLogger()] : [];
}

export default new Vuex.Store({
  getters,
  modules: {
    permission,
    dashboard
  },
  strict: debug,
  plugins: plugins
});
