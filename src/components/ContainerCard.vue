<template>
    <div>
        <b-card header="featured"
                header-tag="header"
                footer="Card Footer"
                footer-tag="footer"
                :title="containerURL.name">
            <p class="card-text">Name</p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'ContainerCard',
    props: {
        containerURL: ""
    },
    methods: {
        fetchData () {
            console.log(this.$store)
            this.containerDetails = this.$store.state.containers[0]
            console.log(this.containerDetails)
        }
    },
    data () {
        return {
            containerDetails: {},
            loading: false
        }
    },
    created () {
        this.fetchData()
    }
}
</script>

<style scoped>
</style>