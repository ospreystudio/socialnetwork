
const state = {
    user: {
        loggedIn: false,
        isSubscribed: false,
        token: !localStorage.getItem('token') || ''
    },

}

const actions = {

}

const mutations = {

}

const getters = {
        auth(state) {
            return state.user
        },
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}
