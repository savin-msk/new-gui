import Vue from 'vue'
import router from './router'
import store from './store'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
