<template>
  <v-list two-line>
    <v-subheader>Remotes List</v-subheader>
    <hb-remote :remote="remoteItem" v-for="remoteItem in list" :key="remoteItem._id"></hb-remote>
  </v-list>
</template>

<script>
  export default {
    name: 'RemotesList',
    data () {
      return {
        list: [
          {_id: 0, alias: 'alias 1', url: 'http://localhost:9090'},
          {_id: 1, alias: 'alias 2', url: 'http://localhost:9091'},
          {_id: 2, alias: 'alias 3', url: 'http://localhost:9092'},
          {_id: 3, alias: 'alias 4', url: 'http://localhost:9093'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>