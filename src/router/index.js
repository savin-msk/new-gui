import Vue from 'vue'
import Router from 'vue-router'
import ServerView from '../components/ServerView.vue'

Vue.use(Router)

const routes = [
    { path: '/', name: 'SV', component: ServerView}
  ]

export default new Router({ routes })