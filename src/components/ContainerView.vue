<template>
    <div>
        <b-card-group deck>
            <div v-for="item in containers">
                <b-card header="featured"
                        header-tag="header"
                        footer="Card Footer"
                        footer-tag="footer"
                        :title="item">
                    <p class="card-text">{{item}}</p>
                    <b-button href="#"
                            variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
        </b-card-group>
    </div>
</template>

<script>
export default {
   name: 'ContainerView',
   methods: {
        fetchData () {
            this.loading = true
            this.$store.dispatch("LOAD_CONTAINERS_URL").then(response => {
                this.loading = false
                console.log(this.$store.state.server.containersURL)
                this.containers = this.$store.state.server.containersURL
            })
        }
    },
    data() {
        return {
            containers: [],
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