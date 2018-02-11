<template>
    <div>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div v-if="!loading">
            <b-table striped hover :items="items" :fields="fields" caption-top>
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

function reqUrl(req) {
    return new Promise((resolve, reject) => {
    HTTPS.get(req)
        .then(response => resolve(response))
        .catch(() => reject)
  })
}

function getContdata(context) {
    return new Promise ((resolve, reject) => {
        console.log('getContdata')
        console.log(context)
        self = context
        for (let i in self.containerUrl) {
            let rowitem = {}
            reqUrl(self.containerUrl[i]).then((response) => {
                let urlArray = self.containerUrl[i].split('/')
                rowitem.name = urlArray[urlArray.length-1]
                rowitem.state = response.data.metadata.status
                self.containerDetails = response.data.metadata
                reqUrl(self.stateUrl[i]).then((response) => {
                    if (response.data.metadata.network != null) {
                        console.log('if true')
                        let networks = response.data.metadata.network
                        let ifName = Object.keys(networks)[0]
                        rowitem.IPV4 = networks[ifName].addresses[0].address
                        rowitem.IPV6 = networks[ifName].addresses[1].address
                    }
                    else {
                        console.log('if false')
                        rowitem.IPV4 = ''
                        rowitem.IPV6 = ''
                    }
                })
            })
            console.log(rowitem)    
            self.items.push(rowitem)
        }
        resolve()
    })
}

export default {
    name: 'ContainerGridCard',
    methods: {
        fetchData () {
            this.loading = true
            let prom = new Promise ((resolve, reject) => {
                getContdata(this).then(
                    this.loading = false
                )
            })
            console.log(this.items)
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
            fields: [ 'name', 'state', 'inet4', 'inet6'],
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