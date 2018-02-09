import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import ServerView from '../components/ServerView.vue'
import HomeView from '../components/HomeView.vue'

import store from '../store'

import { mapGetters, mapActions } from 'vuex'

Vue.use(Router)

const routes = [
    { 
      path: '/',
      name: 'SV',
      component: ServerView,
      beforeUpdate: (to, from, next) => {
        console.log('beforeupdate')
        next()
      },
      beforeRouteEnter: (to, from, next) => {
        console.log('beforeroute')
        axios.get(`/1.0`).then((response) => {
          next(vm => Object.assign(vm.store.server.server, response.data.metadata.environment.server))
        })
      }
    },
      // })
      // beforeRouteEnter: (to, from, next) => {
      //   console.log('beforeenter')
      //   vm.store.dispatch('LOAD_SERVER_DETAILS').then((res) => {
      //       console.log('before load finish')
      //       console.log(res)
      //       next()
      //   })
      //   next()
      // }
    // },
    { 
      path: '/home',
      name: 'HV',
      component: HomeView
    },
  ]

const router = new Router({ routes })

export default router