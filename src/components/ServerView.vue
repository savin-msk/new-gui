<template>
    <div>
        <div v-if="loading">
            <pulse-loader></pulse-loader>
            <div class="white-widget grey-bg author-area">
            <div class="auth-info row">
            <div class="timeline-wrapper">
            <div class="timeline-item">
                <div class="animated-background">
                    <div class="background-masker header-top"></div>
                    <div class="background-masker header-left"></div>
                    <div class="background-masker header-right"></div>
                    <div class="background-masker header-bottom"></div>
                    <div class="background-masker subheader-left"></div>
                    <div class="background-masker subheader-right"></div>
                    <div class="background-masker subheader-bottom"></div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div v-if="!loading">
            <b-table striped hover :items="items" caption-top>
                <template slot="table-caption">
                    lxd server
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import store from '../store'
import {eventHub} from '../utils/eventhub.js'

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
    name: 'ServerView',
    computed: {
        server () {
            var res = []
            res.push([ "Name", this.$store.state.server.server ])
            console.log(this.$store.state.server.server)
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
        },
        getUserDetails(transition)
        {
            this.$http.get('/users/' + this.$route.params.userName)
                .then(function (response) {
                    this.user = response.data;
                    transition.next();
                });

        },
        fetchData () {
            this.error = this.post = null
            this.loading = true
            this.$store.dispatch("LOAD_SERVER_DETAILS").then(response => {
                this.loading = false
                console.log(this.$store)
                this.items.push([ "Name", this.$store.state.server.server])
            })
        }
    },
    components: {
        PulseLoader
    },
    route: {
        data: function (transition) {
            this.getUserDetails(transition);
        }
    },
    data() {
        return {
            spinnerVisible: null,
            items: [],
            loading: false,
            post: null,
            error: null
        }
    },
    created () {
        this.fetchData()
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