import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store/store'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
    linkExactActiveClass: 'mm-active'
})

function isLoggedIn() {
    return store.state.admin.isLogin
}
/**
 * Check if the cookie is still alive
 * @Author: Hamdani
 * @Date: 2020-07-27 06:58:14
 * @
 */
function haveCookie() {
    if(store.state.admin.token){
        return true
    }
    return false
}
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLoggedIn() || !haveCookie()) {
            next({
                path: "/login/admin",
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (isLoggedIn()) {
            next({
                path: "/admin",
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
});

export default router
