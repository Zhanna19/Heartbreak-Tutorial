<template>
  <div>
    <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
    <form v-if="!loading">
      <v-card class="pa-5 elevation-0">
          <v-card-title>Remote</v-card-title>
          <v-card-text>
              <v-text-field prepend-icon="visibility" label="Alias" suffix=" " autofocus></v-text-field>
              <v-text-field prepend-icon="cloudy" prefix="http://" suffix=" " autofocus></v-text-field>
              <v-text-field prepend-icon="timer" label="Interval" suffix="s" autofocus></v-text-field>
          </v-card-text>
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="cancel">Cancel</v-btn>
              <v-btn class="secondary">Save</v-btn>
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
        loading: true
      }
    },
    created () {
      this.loading = false
    },
    methods: {
      cancel () {
        this.$router.push({ path: '/'})
      }
    }
  }
</script>

<style scoped>

</style>