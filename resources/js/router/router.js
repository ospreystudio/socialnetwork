import { createRouter, createWebHistory } from 'vue-router';
import Container from "../views/layuot/Container";
import Register from "../views/Auth/Register";
import Login from "../views/Auth/Login";
import Dashboard from "../views/pages/Dashboard";
import UserProfile from "../views/pages/UserProfile";
import Middleware from "../middleware";
import store from "../store";
import middlewarePipeline from "./middlewarePipeline"
import ForgotPassword from "../views/Auth/ForgotPassword";
import ResetPassword from "../views/Auth/ResetPassword";
import Settings from "../views/pages/Settings";
import middleware from "../store/modules/middleware";


const routes = [
    {
        path: "/",
        name: Container,
        component: Container
    },
    {
        path: "/login",
        name: Login,
        component: Login,

    },
    {
        path: "/register",
        name: Register,
        component: Register,

    } ,
    {
        path: "/settings",
        name: Settings,
        component: Settings,
        meta: {
            middleware: [Middleware.auth]
        },
        roles: ['admin']

    } ,
    {
        path: "/dashboard",
        name: Dashboard,
        component: Dashboard,
        meta: {
            middleware: [Middleware.auth, Middleware.checkRole]
        },
        roles: ['admin']

    },

    {
        path: "/profile",
        name: UserProfile,
        component: UserProfile,
        meta: {
        middleware: [Middleware.auth,  Middleware.admin]
        },
        // beforeEnter: (to, from, next) => {
        //     if (store.getters["auth/isAdmin"]) next();
        //     else next(false);
        // }

    },

    {
        path: "/forgot-password",
        name: ForgotPassword,
        component: ForgotPassword,

    } ,

    {
        path: "/reset-password/:token",
        name: ResetPassword,
        component: ResetPassword,
        props: (route) => ({ query: route.query.token })

    } ,

    {   path: '/reset-password/:token',
        name: 'ResetPassword',
        component: ResetPassword,
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
    if(!to.meta.middleware) {
        return next()
    }

    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }

    return middleware[0] ({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

export default router
