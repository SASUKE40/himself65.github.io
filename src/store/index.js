import Vue from 'vue'
import Vuex from 'vuex'
import Global from './modules/global'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    global: Global
  },
  mutations: {},
  actions: {}
})

export default store
