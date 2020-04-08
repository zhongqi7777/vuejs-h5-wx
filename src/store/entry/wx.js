import Vue from 'vue'
import Vuex from 'vuex'
import getters from "../getters";
import permission from "../modules/permission";
import createLogger from "@/plugins/logger";
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
    getters,
    modules: {
        permission
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
