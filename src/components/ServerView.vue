<template>
    <div id="server">
        <b-table striped hover :items="items" caption-top>
            <template slot="table-caption">
                lxd server
            </template>
        </b-table>
    </div>
</template>

<script>
import store from '../store'
import {eventHub} from '../utils/eventhub.js'

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
    methods: {
        showSpinner() {
            console.log('show spinner')
            this.spinnerVisible = true
        },
        hideSpinner() {
            console.log('hide spinner')
            this.spinnerVisible = false
        }
    },
    data() {
        return {
            spinnerVisible: null
        }
    },
    created () {
        eventHub.$on('before-request', this.showSpinner)
        eventHub.$on('request-error',  this.hideSpinner)
        eventHub.$on('after-response', this.hideSpinner)
        eventHub.$on('response-error', this.hideSpinner)
    },
    beforeDestroy () {
        eventHub.$off('before-request', this.showSpinner)
        eventHub.$off('request-error',  this.hideSpinner)
        eventHub.$off('after-response', this.hideSpinner)
        eventHub.$off('response-error', this.hideSpinner)
    }
}
</script>

<style scoped>
</style>