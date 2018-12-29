import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@kuen/components/dist/kuen.css'
import Kuen from '@kuen/components'
import './sw-register'
import routerConf from './router'
import storeConf from './store'
import App from './App.vue'
import { startApp } from '@kuen/loader'

Vue.use(Kuen)
Vue.use(Vuetify)

startApp({
  routerConf: routerConf,
  storeConf: storeConf,
  appView: App
})
