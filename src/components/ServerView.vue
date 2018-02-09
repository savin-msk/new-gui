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
        ...mapState(['loading']),
        items () {
            console.log(this.$store)
            return (["Name", this.$store.getters.getServerName])
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
        console.log('created')
        console.log(store)
        var servers = store.getters.getServerName
        console.log('servers')
        console.log(servers)
        //this.items.push(["Name", servers])
    }
}
</script>

<style scoped>
</style>