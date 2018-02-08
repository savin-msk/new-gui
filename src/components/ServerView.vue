<template>
    <div id="server">
        <b-table striped hover :items="items" caption-top>
            <template slot="table-caption">
                lxd server
            </template>
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
   created () {
        let servers = this.$store.getters.getServer
        console.log(servers)
        for (var i in servers){
            this.items.push(["address", servers[i]])
        }
        console.log(this.items)
   }   
}
</script>

<style scoped>
</style>