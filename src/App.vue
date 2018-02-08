<template>
  <div id="app">
    <top-nav-bar></top-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNavBar from './components/TopNavBar.vue'

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.$store.dispatch('LOAD_CONTAINERS_LIST')
  },
  components: {
    TopNavBar
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
