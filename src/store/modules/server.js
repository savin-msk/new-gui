import {HTTPS} from '../../utils/https-get'

const state = {
    addresses: [],
    driver: "",
    driver_version: "",
    kernel: "",
    kernel_architecture: "",
    kernel_version: "",
    server: "",
    server_pid: "",
    server_version: "",
    storage: "",
    storage_version: ""
}

const actions = {
  LOAD_SERVER_DETAILS ({commit}) {
    return new Promise((resolve, reject) => {
        console.log('LOAD_SERVER_DETAILS')
        commit.SET_LOADING(true)
        HTTPS.get('/1.0').then((response) => {
            const payload = {
                'addresses': response.data.metadata.environment.addresses,
                'driver': response.data.metadata.environment.driver,
                'driver_version': response.data.metadata.environment.driver_version,
                'kernel': response.data.metadata.environment.kernel,
                'kernel_architecture': response.data.metadata.environment.kernel_architecture,
                'kernel_version': response.data.metadata.environment.kernel_version,
                'server': response.data.metadata.environment.server,
                'server_pid': response.data.metadata.environment.server_pid,
                'server_version': response.data.metadata.environment.server_version,
                'storage': response.data.metadata.environment.storage,
                'storage_version': response.data.metadata.environment.storage_version
            }
            console.log(payload)
            setTimeout(() => {
              console.log('commit')
                commit('SET_SERVER_DETAILS', { payload })
            }, 1000);
            commit.SET_LOADING(false)
            resolve ()
        }, (err) => {
            console.log(err)
            reject(err)
        })
    })
  }
}

const mutations = {
  SET_SERVER_DETAILS: (state, { payload }) => {
    console.log('SET_SERVER_DETAILS')
    console.log(payload)
    state.addresses = payload.addresses
    state.driver = payload.driver
    state.driver_version = payload.driver_version
    state.kernel = payload.kernel
    state.kernel_architecture = payload.kernel_architecture
    state.kernel_version = payload.kernel_version
    state.server = payload.server
    state.server_pid = payload.server_pid
    state.server_version = payload.server_version
    state.storage = payload.storage
    state.storage_version = payload.storage_version
  },
  SET_LOADING: (state, { loading }) => {
    rootState.loading = loading
  }
}

const getters = {
  getServerName: state => {
    console.log('getServer')
    console.log(state.server)
    let servername = state.server
    return servername
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
