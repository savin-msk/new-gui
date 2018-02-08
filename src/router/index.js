import Vue from 'vue'
import Router from 'vue-router'
import ServerView from '../components/ServerView.vue'
import HomeView from '../components/HomeView.vue'

Vue.use(Router)

const routes = [
    { 
      path: '/',
      name: 'SV',
      component: ServerView
    },
    { 
      path: '/home',
      name: 'HV',
      component: HomeView
    },
  ]

const router = new Router({ routes })

export default router