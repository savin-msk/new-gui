<template>
    <div>
        <b-card-group deck>
            <b-card header="featured"
                    header-tag="header"
                    footer="Card Footer"
                    footer-tag="footer"
                    title="Title">
                <p class="card-text">Header and footers using props.</p>
                <b-button href="#"
                        variant="primary">Go somewhere</b-button>
            </b-card>
            <b-card title="Title"
                    header-tag="header"
                    footer-tag="footer">
                <h6 slot="header"
                    class="mb-0">Header Slot</h6>
                <em slot="footer">Footer Slot</em>
                <p class="card-text">Header and footers using slots.</p>
                <b-button href="#"
                        variant="primary">Go somewhere</b-button>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>

import {HTTPS} from '../utils/https-get'

export default {
   name: 'ServerView',
   data () {
     return {
       msg: []
     }
   },
   created ()
   {
       HTTPS.get('1.0')
       .then(function(response){
           console.log(response)
           this.msg = response.data
       })
       .catch(function(e) {
           console.log(e)
       })

       HTTPS.get('1.0/certificates')
       .then(function(response){
           console.log(response)
           this.msg = response.data
       })
       .catch(function(e) {
           console.log(e)
       })

       HTTPS.get('1.0/containers')
       .then(function(response){
           console.log(response)
           this.msg = response.data
       })
       .catch(function(e) {
           console.log(e)
       })
       
   }
}
</script>

<style scoped>
</style>