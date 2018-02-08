import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    server: 0,
    containers: 0
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
