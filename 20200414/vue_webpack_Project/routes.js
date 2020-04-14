import Vue from 'vue';
import Router from 'vue-router';
import indexPage from './src/components/header.vue'
import homePage from './src/views/home.vue'
import aboutPage from './src/views/about.vue'
 
Vue.use(Router)
 
export default new Router({
    routes:[
        {
            path:'/',
            component:homePage
        },
        {
            path:'/about',
            component:aboutPage
        }
    ]
})