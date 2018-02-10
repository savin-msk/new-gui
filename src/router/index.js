import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import ServerView from '../components/ServerView.vue'
import ContainerView from '../components/ContainerView.vue'
import store from '../store'

import { mapGetters, mapActions } from 'vuex'

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