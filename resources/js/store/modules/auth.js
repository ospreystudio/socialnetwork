import axios from '../../../axios/axios-instance'

const state = {
    userDetails: {},
    isLoggedIn: true,
    errors: [],
    invalidCredentials: '',

}

const actions = {

    registerUser(ctx, user, ) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/register', {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation
                })
                .then(response => {
                    if (response.data) {
                        window.location.replace("/login")
                        resolve(response)
                    } else  {
                        reject(response)
                    }
                }) .catch((error) => {
                if (error.response.status === 422) {
                    ctx.commit('setErrors', error.response.data.errors)
                } console.log(this.errors)
            })
        })
    },

    loginUser(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/login", payload)
                .then(response => {
                    if (response.data.access_token) {
                        localStorage.setItem('token', response.data.access_token)
                        console.log(response.data.access_token)
                        ctx.commit('setLoggedIn', true)
                        ctx.dispatch('currentUser').then(() => resolve(response))
                        window.location.replace("/dashboard")
                    }

                }).catch(error => {
                if(error.response.data.error) {
                    ctx.commit('setInvalidCredentials', error.response.data.error)
                }  else if (error.response.status === 422) {
                    ctx.commit('setErrors', error.response.data.errors)
                }
            })

        })
    },

    logout(ctx) {
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            ctx.commit('setLoggedIn', false)
            resolve(true)
            window.location.replace("login")
        })
    },

    setLoggedInstate(ctx) {
        return new Promise((resolve) => {
            if (localStorage.getItem('token')) {
                ctx.commit('setLoggedIn', true)
                resolve(true)
            } else {
                ctx.commit('setLoggedIn', false)
                resolve(false)
            }
        })
    },

    forgotPassword(ctx, user, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/forgot-password', {
                    email: user.email
                })
                .then(response => {
                    if (response.data) {
                        window.location.replace("/login")
                        resolve(response)
                    } else  {
                        reject(response)
                    }
                })
                .catch((error) => {
                    console.log(error.response)
                    if (error.response.status === 422) {
                        ctx.commit('setErrors', error.response.data.errors)
                    } else if (error.response.status === 500)
                        ctx.commit('setInvalidCredentials', error.response.data.error)
                })
        })
    },
    resetPassword(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/reset-password', payload)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    console.log(error.response)
                    if (error.response.status === 422) {
                        ctx.commit('setErrors', error.response.data.errors)
                    } else if (error.response.status === 500)
                        ctx.commit('setInvalidCredentials', error.response.data.error)
                })
        })
    },

    currentUser(ctx) {
        return new Promise((resolve, reject) => {
            axios.get('/api/user')
                .then((response) =>{
                    ctx.commit('setUserDetails', response.data.data)
                    console.log(response)
                }).catch((error) => {
                reject(error)
            })
        })
    },
    changePassword(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/change-password', payload)
                .then((response) => {
                    if (response.data.success) {
                        window.location.replace("/login")
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if(error.response.data.error) {
                        ctx.commit('setInvalidCredentials', error.response.data.error)
                    }  else if (error.response.status === 422) {
                        ctx.commit('setErrors', error.response.data.errors)
                    }
                })
        })
    },
    updateDetails(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/change-details', payload)
                .then((response) => {
                    if (response.data.success) {
                        window.location.replace("/profile")
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if(error.response.data.error) {
                        ctx.commit('setInvalidCredentials', error.response.data.error)
                    }  else if (error.response.status === 422) {
                        ctx.commit('setErrors', error.response.data.errors)
                    }
                })
        })
    },

}
const mutations = {
    setLoggedIn(state, payload) {
        state.isLoggedIn = payload
    },
    setErrors(state, invalidCredentials) {
        state.errors = invalidCredentials
    },
    setInvalidCredentials (state, invalidCredentials) {
        state.invalidCredentials = invalidCredentials
    },
    setUserDetails(state, payload) {
        state.userDetails = payload
    }
}

const getters = {
    loggedIn(state) {
        return state.isLoggedIn
    },
    userDetails(state) {
        return state.userDetails
    },

    errors(state) {
        return state.errors
    },

    invalidCredentials(state) {
        return state.invalidCredentials
    }

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

