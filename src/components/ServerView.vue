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
        console.log(this.$store)
        let servers = this.$store.getters.getServerName
        console.log(servers)
        this.items.push(["Name", servers])
    }   
}
</script>

<style scoped>
</style>