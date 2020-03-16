import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/dataset',
        name: 'DatasetSelect',
        component: () => import('../views/DatasetSelect.vue'),
    },
    {
        path: '/select',
        name: 'ClassSelect',
        component: () => import('../views/ClassSelect.vue'),
    },
    {
        path: '/result',
        name: 'Result',
        component: () => import('../views/Result.vue'),
    },
]

const router = new VueRouter({
    routes,
})

export default router
