export default function ({next, store}) {

    if (store.getters.auth.loggedIn && store.getters.auth.token) {
        return next('dashboard')
    }
    return next()
}


