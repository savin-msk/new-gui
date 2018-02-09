import Vue from 'vue'
import Vuex from 'vuex'
import {HTTPS} from '../utils/https-get'

Vue.use(Vuex)

const modServer = {
  state: {
    name
  },
  actions: {
    LOAD_SERVER_DETAILS: function ({commit}) {
      console.log('LOAD_SERVER_DETAILS')
      HTTPS.get('/1.0').then((response) => {
          console.log(response.data.metadata.environment.addresses)
          commit('SET_SERVER_DETAILS', { list: response.data.metadata.environment.addresses })
        }, (err) => {
          console.log(err)
        })
    }
  },
  mutations: {
    SET_SERVER_DETAILS: (state, { list }) => {
      console.log('SET_SERVER_DETAILS')
      console.log(list)
      state.name = list
    }
  },
  getters: {
    getServerName: state => {
      console.log(state)
      let servername = state.name
      return servername
    }
  }
}

const modContainers = {
  state: {
    containers: []
  },
  actions: {
    LOAD_CONTAINERS_LIST: function ({commit}) {
      console.log('LOAD_CONTAINERS_LIST')
      HTTPS.get('/1.0/containers').then((response) => {
          commit('SET_CONTAINERS_LIST', { list: response.data.metadata })
        }, (err) => {
          console.log(err)
        })
    }
  },
  mutations: {
    SET_CONTAINERS_LIST: (state, { list }) => {
      console.log('SET_CONTAINERS_LIST')
      state.name = list
    }
  }
}

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