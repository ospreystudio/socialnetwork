export default function ({next, store}) {

    if (store.getters["auth/isAdmin"]) next('');
    else next(false);
}

