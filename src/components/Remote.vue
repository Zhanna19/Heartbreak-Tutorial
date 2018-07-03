<template>
  <v-list-tile avatar>
      <v-list-tile-avatar>
         <transition name="fade">
             <v-icon class="white--text" :class="icon.classes">{{ icon.name }}</v-icon>
         </transition>
      </v-list-tile-avatar>
      <v-list-tile-content>
          <v-list-tile-title>{{ remote.alias }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ remote.url }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
          <v-layout>
              <v-switch v-model="remote.monitoring" @change="toggleMonitor"></v-switch>
              <v-menu>
                  <v-btn icon slot="activator" class="ml-2">
                      <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                      <v-list-tile :to="'/remote/' + remote._id">
                          <v-list-tile-title>Edit</v-list-tile-title>
                      </v-list-tile>
                      <v-list-tile @click="removeRemote(remote._id)">
                          <v-list-tile-title>Remove</v-list-tile-title>
                      </v-list-tile>
                  </v-list>
              </v-menu>
          </v-layout>
      </v-list-tile-action>
  </v-list-tile>
</template>

<script>
  import Monitor from '../mixins/pingLogic'
  export default {
    name: 'Remote',
    mixins: [Monitor],
    props: {
      remote: {
        type: Object,
        default () {
          return {
            alias: '',
            url: '',
            status: '-',
            _id: '',
            interval: 0,
            monitoring: true
          }
        }
      }
    },
    data () {
      return {
        currentStatus: this.remote.status
      }
    },
    methods: {
      removeRemote: function(id)  {
        this.$store.dispatch('delete', id)
      },
      toggleMonitor () {
        if(this.remote.monitoring) {
          this.createMonitor()
        } else {
          this.currentStatus = '-'
          this.destroyMonitor()
        }
      }
    },
    computed: {
      icon () {
        const icon = {
          '-': {
            name: 'report_problem',
            classes: ['gray', 'lighten-2']
          },
          'online': {
            name: 'swap_vert',
            classes: ['light-green', 'darken-1']
          },
          'offline': {
            name: 'not_interested',
            classes: ['red', 'darken-1']
          }
        }
        return icon[this.currentStatus || '-']
      }
    }
  }
</script>

<style scoped>
    .fade-leave-active,
    .fade-enter-active {
        transition: opacity 0.8s;
    }
    .fade-enter,
    .fade-leave-to {
     opacity: 0;
    }
</style>