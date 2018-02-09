const state = {
  name
}
const actions = {
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
  SET_SERVER_DETAILS: (state, { list }) => {
    console.log('SET_SERVER_DETAILS')
    console.log(list)
    state.name = list
  }
}

const getters = {
  getServerName: state => {
    console.log(state)
    let servername = state.name
    return servername
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
