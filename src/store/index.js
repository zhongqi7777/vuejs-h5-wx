// import h5 from "./entry/h5";
// import wx from "./entry/wx";

// const getProjectName = val => {
//   switch (val) {
//     case "h5":
//       return h5;
//     case "wx":
//       return wx;
//     default:
//     //return h5;
//   }
// };

// let result = process.env.mpvuePlatform || mpvuePlatform;
// export default getProjectName(result);

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
