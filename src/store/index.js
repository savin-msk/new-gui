import Vue from 'vue'
import Vuex from 'vuex'
import {HTTPS} from '../utils/https-get'
import modServer from './modules/server'
import modContainers from './modules/containers'

Vue.use(Vuex)

const modules = {
    server: modServer,
    containers: modContainers
}

const state = {}

const actions = {}

const mutations = {}

const getters = {}

const store = new Vuex.Store({
  modules,
  state,
  actions,
  mutations,
  getters
})

export default store