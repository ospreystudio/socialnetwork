
const state = {
    user: {
        loggedIn: true,
        isSubscribed: true,
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
