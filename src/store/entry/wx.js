import Vue from 'vue'
import Vuex from 'vuex'
import getters from "../getters";
import dashboard from "../modules/mp/dashboard";
import createLogger from "@/plugins/logger";
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
    getters,
    modules: {
        dashboard
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
