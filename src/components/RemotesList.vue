<template>
  <v-list two-line v-if="allRemotes.length">
    <v-subheader>Remotes List</v-subheader>
    <transition-group name="list" type="transition">
      <hb-remote :remote="remoteItem" v-for="remoteItem in allRemotes" :key="remoteItem._id" class="list-item"></hb-remote>
    </transition-group>
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
.list-item {
  transition: all 1s;
  display: block;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>