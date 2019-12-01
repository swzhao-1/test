import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import home from "./views/home";
import Tuzhi from "./views/Tuzhi.vue";
import matter from "./views/matter.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: home,
            redirect: 'login'

        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/',
            component: Tuzhi,
            redirect: 'Tuzhi'

        },
        {
            path: '/Tuzhi',
            component: Tuzhi
        },
        {
            path: '/',
            component: matter,
            redirect: 'matter'

        },
        {
            path: '/matter',
            component: matter
        }
        ]
})