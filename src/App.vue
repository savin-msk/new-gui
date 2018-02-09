<template>
  <div id="app">
    <top-nav-bar></top-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNavBar from './components/TopNavBar.vue'
import { eventHub } from './utils/eventhub'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    TopNavBar
  },
  data() {
    return {
      spinnerVisible: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$store.dispatch("LOAD_SERVER_DETAILS").then(response => {
      console.log("Got some data, now lets show something in this component")
    }, error => {
      console.error("Got nothing from server. Prompt user to check internet connection and try again")
      reject(error)
    })
  }
  // ,
  // beforeCreate () {
  //   console.log('loadServer')
  // 	this.$store.dispatch('LOAD_SERVER_DETAILS').then(() => {
  //       console.log('load finish')
  //       console.log(this.$store)
  //     }
  //   )
  // }
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
