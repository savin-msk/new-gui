<template>
    <div>
        <div v-if="loading">
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
    methods: {
        fetchData () {
            this.loading = true
            this.$store.dispatch("LOAD_SERVER_DETAILS").then(response => {
                this.loading = false
                console.log(this.$store)
                this.items.push([ "Name", this.$store.state.server.server])
            })
        }
    },
    data() {
        return {
            items: [],
            loading: false,
        }
    },
    created () {
        this.fetchData()
    }
}
</script>

<style scoped>
</style>