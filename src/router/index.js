import Vue from 'vue'
import Router from 'vue-router'
import ServerView from '../components/ServerView.vue'
import ContainerView from '../components/ContainerView.vue'

Vue.use(Router)

const routes = [
    { 
        path: '/',
        name: 'SV',
        component: ServerView,
    },
    { 
        path: '/home',
        name: 'CV',
        component: ContainerView
    },
]

const router = new Router({ routes })

export default router