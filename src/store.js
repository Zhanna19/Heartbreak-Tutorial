
export const storeDef = {
  state: {
    remotesList: [
      {_id: 0, alias: 'alias 1', url: 'http://localhost:9090'},
      {_id: 1, alias: 'alias 2', url: 'http://localhost:9091'},
      {_id: 2, alias: 'alias 3', url: 'http://localhost:9092'},
      {_id: 3, alias: 'alias 4', url: 'http://localhost:9093'}
    ]
  },
  getters: {
    allRemotes: state => {
      return state.remotesList
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
      state.remotesList.unshift(remote)
    },
    deleteRemote: (state, id) => {
      let index = state.remotesList.findIndex(({ _id }) => _id === id)
      state.remotesList.splice(index, 1)
    }
  }
}