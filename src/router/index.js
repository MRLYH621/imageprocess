import Vue from 'vue'
import Router from 'vue-router'
import MapCheck from '../views/imageProcess/imageProcess.vue'
import DetectionList from '../views/./imageProcess/DetectionList.vue'
Vue.use(Router)

const routes = [{
    path: '/', redirect: '/mapcheck'
}, {
    path: '/mapcheck',
    component: MapCheck
}, {
    path: '/detectionlist',
    component: DetectionList

}]
const router = new Router({
    mode: 'hash',
    routes: routes
})
export default router