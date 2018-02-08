import Vue from 'vue'
import Vuex from 'vuex'
import {HTTPS} from '../utils/https-get'

Vue.use(Vuex)

const state = {
  server: [],
  containers: []
}

const actions = {
  LOAD_CONTAINERS_LIST: function ({commit}) {
    console.log('LOAD_CONTAINERS_LIST')
    HTTPS.get('/1.0/containers').then((response) => {
        commit('SET_CONTAINERS_LIST', { list: response.data.metadata })
      }, (err) => {
        console.log(err)
      })
  }
}

const mutations = {
  SET_CONTAINERS_LIST: (state, { list }) => {
    console.log('SET_CONTAINERS_LIST')
    state.containers = list
  }
}

const getters = {
  containersCount: state => {
    return state.containers.length
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})