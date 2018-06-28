import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    remotesList: [
      {_id: 0, alias: 'alias 1', url: 'http://localhost:9090', interval: 10},
      {_id: 1, alias: 'alias 2', url: 'http://localhost:9091', interval: 11},
      {_id: 2, alias: 'alias 3', url: 'http://localhost:9092', interval: 12},
      {_id: 3, alias: 'alias 4', url: 'http://localhost:9093', interval: 13}
    ]
  },
  getters: {
    allRemotes: state => {
      return state.remotesList
    },
    remote: (state, getters) => id => {
      return state.remotesList.find(({ _id }) => _id == id)
    }
  },
  actions: {
    save: ({ commit } , payload) => {
      commit('saveRemote', payload)
    },
    delete: ({ commit }, payload) => {
      commit('deleteRemote', payload)
    }
  },
  mutations: {
    saveRemote: (state, remote) => {
      let index = state.remotesList.findIndex(({ _id }) => _id === remote._id)
      if (index >= 0) {
        state.remotesList[index] = remote
      } else {
        state.remotesList.unshift(remote)
      }
    },
    deleteRemote: (state, id) => {
      let index = state.remotesList.findIndex(({ _id }) => _id === id)
      state.remotesList.splice(index, 1)
    }
  }
})
