<template>
    <div>
        <b-card header="featured"
                header-tag="header"
                footer="Card Footer"
                footer-tag="footer"
                title="title">
            <p class="card-text">Name</p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'ContainerCard',
    props: {
        containerDetails: {}
    },
    data() {},
    created () {}
}
</script>

<style scoped>
</style>