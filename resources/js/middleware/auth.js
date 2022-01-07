export default function ({next, store}) {

    if (!store.getters.auth.loggedIn) {
        return next({
            name: 'login'
        })
    }
    return next()
}
