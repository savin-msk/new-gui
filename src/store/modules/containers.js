import {HTTPS} from '../../utils/https-get'

const state = {
    containers: []
}

const actions = {
    LOAD_CONTAINERS_LIST: function ({commit}) {
        console.log('LOAD_CONTAINERS_LIST')
        HTTPS.get('/1.0/containers').then((response) => {
            console.log('LOAD_CONTAINERS_LIST')
            commit('SET_CONTAINERS_LIST', { list: response.data.metadata })
        }, (err) => {
            console.log(err)
        })
    }
}

const mutations = {
    SET_CONTAINERS_LIST: (state, { list }) => {
        console.log('SET_CONTAINERS_LIST')
        state.name = list
    }
}

const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}