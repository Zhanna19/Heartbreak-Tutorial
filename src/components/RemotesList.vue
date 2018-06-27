<template>
  <v-list two-line v-if="allRemotes.length">
    <v-subheader>Remotes List</v-subheader>
    <hb-remote :remote="remoteItem" v-for="remoteItem in allRemotes" :key="remoteItem._id"></hb-remote>
  </v-list>
  <v-card v-else>
    <v-card-text>Please add remotes to monitor</v-card-text>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'RemotesList',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters(['allRemotes'])
    }
  }
</script>

<style scoped>

</style>