import Vue from 'vue'
import router from './router'
import store from './store'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,
  created () {
  	this.$store.dispatch('LOAD_SERVER_DETAILS')
  },
})
