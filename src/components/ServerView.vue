<template>
    <div id="server">
        <div v-if="loading">loading...</div>
        <b-table striped hover :items="items" caption-top>
            <template slot="table-caption">
                lxd server
            </template>
        </b-table>
    </div>
</template>

<script>
import store from '../store'

import { mapState } from 'vuex'

export default {
    name: 'ServerView',
    computed: {
        items () {
            var res = []
            res.push([ "Name", this.$store.state.server.server ])
            console.log(this.$store)
            return (res)
        }
    },
    // data () {
    //     return {
    //         items: []
    //     }
    // },
    // beforeEnterRoute: (to, from, next) => {
    //     console.log('beforeenter')
    //     store.dispatch('LOAD_SERVER_DETAILS').then((res) => {
    //         console.log('load finish')
    //         next()
    //     })
    // },
    created () {
    }
}
</script>

<style scoped>
</style>