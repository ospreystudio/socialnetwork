import Vuex from 'vuex'


import middleware from "./modules/middleware";

export default new Vuex.Store({
    modules: {
        middleware
    }
})
