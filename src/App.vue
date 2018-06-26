<template>
  <v-app dark>
    <v-toolbar dart fixed dense>
      <v-toolbar-title>Heartbeat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <main>
      <v-container fluid style="padding-top: 70px">
        <v-layout column>
          <v-flex xs12>
            <hb-remotes-list></hb-remotes-list>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
