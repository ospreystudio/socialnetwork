
const state = {
    user: {
        loggedIn: false,
        isSubscribed: false

    }
}

const actions = {

}

const mutations = {

}

const getters = {
        auth(state) {
            return state.user
        }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
