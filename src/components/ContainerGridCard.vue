<template>
    <div>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div v-if="!loading">
            <b-table striped hover :items="items"  :fields="fields" caption-top>
                <template slot="table-caption">
                    Containers
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import { HTTPS } from '../utils/https-get'
import { eventHub } from '../utils/eventhub.js'
import { mapGetters } from 'vuex'

import store from '../store'

export default {
    name: 'ContainerGridCard',
    methods: {
        fetchData () {
            this.loading = true
            for (let i in this.containerUrl) {
                let rowitem = {}
                HTTPS.get(this.containerUrl[i]).then((response) => {
                    let urlArray = this.containerUrl[i].split('/')
                    rowitem.name = urlArray[urlArray.length-1]
                    rowitem.state = response.data.metadata.status
                    rowitem.snapshots = ''
                    this.containerDetails = response.data.metadata
                })
                HTTPS.get(this.stateUrl[i]).then((response) => {
                    if (response.data.metadata.network != null) {
                        let networks = response.data.metadata.network
                        let ifName = Object.keys(networks)[0]
                        rowitem.IPV4 = networks[ifName].addresses[0].address
                        rowitem.IPV6 = networks[ifName].addresses[1].address
                    }
                    else {
                        rowitem.IPV4 = ''
                        rowitem.IPV6 = ''
                    }
                })
                console.log(rowitem)
                this.items.push(rowitem)
            }
            console.log('this.items')
            console.log(this.items)
            this.loading = false
        }
    },
    computed: {
        containerUrl () {
            return this.$store.getters.getContainersURL
        },
        stateUrl () {
            return this.$store.getters.getContainersStateURL
        }
    },
    data() {
        return {
            items: [],
            fields: [ 'name', 'state', 'IPV4', 'IPV6', 'snapshots' ],
            containersURL: [],
            loading: false
        }
    },
    created () {
        console.log('ContainerGridCard created')
        this.fetchData()
    }
}
</script>

<style scoped>
</style>