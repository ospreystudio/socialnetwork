export default function isSubscribed ({next, store}) {

    if (!store.getters.auth.isSubscribed) {
        return next('dashboard')
    }
    return next()
}
