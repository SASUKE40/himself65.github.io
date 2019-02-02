import Vue from 'vue'
import Vuex from 'vuex'
import butter from './butter'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    drawer: false,
    butter: butter
  },
  mutations: {},
  actions: {}
})
