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
  },

  LOAD_SERVER_DETAILS: function ({commit}) {
    console.log('LOAD_SERVER_DETAILS')
    HTTPS.get('/1.0').then((response) => {
        console.log(response.data.metadata.environment.addresses)
        commit('SET_SERVER_DETAILS', { list: response.data.metadata.environment.addresses })
      }, (err) => {
        console.log(err)
      })
  }
}

const mutations = {
  SET_CONTAINERS_LIST: (state, { list }) => {
    console.log('SET_CONTAINERS_LIST')
    state.containers = list
  },

  SET_SERVER_DETAILS: (state, { list }) => {
    console.log('SET_SERVER_DETAILS')
    console.log(list)
    state.server = list
  },
}

const getters = {
  getServer: state => {
    let server = state.server
    return server
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})