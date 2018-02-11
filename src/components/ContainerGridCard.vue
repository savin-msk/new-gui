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
                console.log(this)
                console.log(this.containerUrl[i])
                let rowitem = {}
                HTTPS.get(this.containerUrl[i]).then((response) => {
                    let urlArray = this.containerUrl[i].split('/')
                    rowitem.name = urlArray[urlArray.length-1]
                    console.log(response.data.metadata)
                    rowitem.state = response.data.metadata.status
                    
                    console.log(rowitem.IPV4)
                    console.log(rowitem.IPV6)
                    rowitem.snapshots = ''
                    console.log(rowitem)
                    this.containerDetails = response.data.metadata
                    console.log(rowitem)
                })
                HTTPS.get(this.stateUrl[i]).then((response) => {
                    console.log(response.data.metadata.network)
                    if (response.data.metadata.network != null) {
                        let networks = response.data.metadata.network
                        let ifName = Object.keys(networks)[0]
                        rowitem.IPV4 = networks[ifName].addresses[0].address
                        console.log(networks[ifName].addresses[0].address)
                        rowitem.IPV6 = networks[ifName].addresses[1].address
                        console.log(networks[ifName].addresses[1].address)
                    }
                    else {
                        rowitem.IPV4 = ''
                        rowitem.IPV6 = ''
                    }
                })
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