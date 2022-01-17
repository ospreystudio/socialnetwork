export default function guest ({next, store}) {

    if (store.getters.auth.loggedIn && store.getters.auth.token) {
        return next('dashboard')
    }
    return next()
}


