import butter from '@/store/butter'

export default {
  namespaced: true,
  state: {
    currentUser: null,
    currentSettings: {
      drawer: false
    },
    butter: butter
  },
  mutations: {
    setDrawer (state, val) {
      if (!val) {
        state.currentSettings.drawer = !state.currentSettings.drawer
      } else {
        state.currentSettings.drawer = val
      }
    }
  }
}
