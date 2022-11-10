import Vue from 'vue'
import Router from 'vue-router'
import ImageProcess from '../views/imageProcess/imageProcess.vue'
Vue.use(Router)

const routes = [{
    path: '/', redirect: '/imageprocess'
}, {
    path: '/imageprocess',
    component: ImageProcess

}]
const router = new Router({
    mode: 'hash',
    routes: routes
})
export default router