import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  server: [],
  containers: []
}

const actions = {
  LOAD_CONTAINERS_LIST:function ({commit}) {
    console.log('LOAD_CONTAINERS_LIST')
  }
}

const mutations = {
  INIT_SERVER (state) {
    console.log('INIT_SERVER')
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