export default function ({next, store}) {

    if (!store.getters.auth.isSubscribed) {
        return next('dashboard')
    }
    return next()
}
