<template>
    <div>
        <b-card-group deck>
            <b-card header="featured"
                    header-tag="header"
                    footer="Card Footer"
                    footer-tag="footer"
                    title="Title">
                <p class="card-text">HomeView.</p>
                <b-button href="#"
                        variant="primary">Go somewhere</b-button>
            </b-card>
            <b-card title="Title"
                    header-tag="header"
                    footer-tag="footer">
                <h6 slot="header"
                    class="mb-0">Header Slot</h6>
                <em slot="footer">Footer Slot</em>
                <p class="card-text">HomeView.</p>
                <b-button href="#"
                        variant="primary">Go somewhere</b-button>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
export default {
   name: 'HomeView',
   data () {
     return {
       msg: 'Home View'
     }
   }
}
</script>

<style scoped>
</style>