<template>
    <div id="server">
        <b-table striped hover :items="items">

        </b-table>
    </div>
</template>

<script>
export default {
   name: 'ServerView',
   data() {
     return {
       items: []
     }
   },
   beforeCreate () {
        let servers = this.$store.getters.getServer
        console.log(servers)
        for (var i in servers){
            this.items.push([servers[i]])
        }
        console.log(this.items)
   }   
}
</script>

<style scoped>
</style>