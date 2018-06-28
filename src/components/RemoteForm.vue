<template>
  <div>
    <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
    <form v-if="!loading" @keyup.enter="save">
      <v-card class="pa-5 elevation-0">
          <v-card-title>Remote</v-card-title>
          <v-card-text>
              <v-text-field prepend-icon="visibility" label="Alias" suffix=" " autofocus v-model="remote.alias"></v-text-field>
              <v-text-field prepend-icon="cloudy" prefix="http://" suffix=" ":value="remote.url | hideProtocol" @input="val => remote.url = val"></v-text-field>
              <v-text-field prepend-icon="timer" label="Interval" suffix="s"  v-model="remote.interval"></v-text-field>
          </v-card-text>
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="cancel">Cancel</v-btn>
              <v-btn class="secondary" @click="save">Save</v-btn>
          </v-card-actions>
      </v-card>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'RemoteForm',
    data () {
      return {
        loading: true,
        remote: {
          _id: '',
          alias: '',
          url: '',
          interval: 10
        }
      }
    },
    created () {
      this.loading = false
      let id = this.$route.params.id
      if (id) {
        this.remote = { ...this.$store.getters.remote(id) }
      }
    },
    methods: {
      cancel () {
        this.$router.push({ path: '/'})
      },
      save () {
        this.remote._id = Date.now()
        this.remote.url = !this.remote.url.startsWith('http://') ? `http://${this.remote.url}` : this.remote.url
        this.$store.dispatch('save', this.remote)
          .then(res => {
            this.$router.push({path: '/'})
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    filters: {
      hideProtocol (value = '') {
        return value.replace('http://', '')
      }
    }
  }
</script>

<style scoped>

</style>