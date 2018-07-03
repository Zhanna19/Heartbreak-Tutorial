<template>
  <v-app dark>
    <v-toolbar dart fixed dense style="-webkit-app-region: drag;">
      <v-toolbar-title>Heartbeat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="closeWindow">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <main>
      <v-container fluid style="padding-top: 70px">
        <v-layout column>
          <v-flex xs12>
            <v-slide-y-transition mode="out-in">
              <keep-alive include="RemotesList">
                <router-view></router-view>
              </keep-alive>
            </v-slide-y-transition>
          </v-flex>
        </v-layout>
      </v-container>
    </main>

    <v-footer :fixed="true">
      <v-btn icon>
        <v-icon class="grey--text text--darken-3">settings</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn absolute fab top right color="success" to="/remote">
        <v-icon>add</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
  let win = nw.Window.get()
  export default {
    data () {
      return {
      }
    },
    methods: {
      closeWindow () {
        win.close()
      }
    }
  }
</script>

<style scoped>
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
</style>