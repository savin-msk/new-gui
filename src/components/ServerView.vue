<template>
    <div>
        <b-card-group deck>
            <div id="item" v-for="item in results">
                <b-card title= "{{ item }}"
                        header="featured"
                        header-tag="header"
                        footer="Card Footer"
                        footer-tag="footer">
                    <p class="card-text"> {{ item }}</p>
                    <b-button href="#"
                            variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
        </b-card-group>
    </div>
</template>

<script>

import {HTTPS} from '../utils/https-get'

export default {
   name: 'ServerView',
   data () {
     return {
       results: []
     }
   },
   mounted ()
   {
       HTTPS.get('1.0/containers')
       .then(response => {this.results = response.data.metadata})
   }
}
</script>

<style scoped>
</style>