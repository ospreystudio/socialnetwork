import Vuex from 'vuex'


import middleware from "./modules/middleware";
import auth from "./modules/auth";

export default new Vuex.Store({
    modules: {
        middleware,
        auth
    }
})
