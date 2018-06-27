require('../node_modules/vuetify/src/stylus/app.styl')

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import HBRemote from './components/Remote'
import HBRemotesList from './components/RemotesList'

import router from './router'
import { storeDef } from './store'

import {
  Vuetify,
  VApp,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VSubheader,
  VAvatar,
  VMenu,
  VSwitch,
  VCard,
  VTextField,
  VProgressLinear,
  transitions
} from 'vuetify'
import App from './App.vue'

Vue.use(Vuetify, {
  components: {
    VApp,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VToolbar,
    VGrid,
    VSubheader,
    VAvatar,
    VMenu,
    VSwitch,
    VCard,
    VTextField,
    VProgressLinear,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.component('hb-remote', HBRemote)
Vue.component('hb-remotes-list', HBRemotesList)

const store = new Vuex.Store(storeDef)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
