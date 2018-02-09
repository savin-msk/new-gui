<template>
  <div id="app">
    <top-nav-bar></top-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNavBar from './components/TopNavBar.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    TopNavBar
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate () {
    console.log('loadServer')
  	this.$store.dispatch('LOAD_SERVER_DETAILS').then(() => {
        console.log('load finish')
        console.log(this.$store)
      }
    )
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0px;
}

a {
  color: #42b983;
}
</style>
