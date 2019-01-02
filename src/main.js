import Vue from 'vue'
import Vuetify from 'vuetify'
import Vee from 'vee-validate'
import 'vuetify/dist/vuetify.min.css'
import '@kuen/components/dist/kuen.css'
import Kuen from '@kuen/components'
import './sw-register'
import routerConf from './router'
import storeConf from './store'
import App from './App.vue'
import { startApp } from '@kuen/loader'

Vue.use(Kuen)
Vue.use(Vee)
Vue.use(Vuetify, {
  theme: {
    primary: '#03A9F4',
    secondary: '#424242',
    accent: '#4CAF50',
    error: '#e74c3c',
    info: '#0e90d2',
    success: '#5eb95e',
    warning: '#f1c40f'
  }
})

startApp({
  routerConf: routerConf,
  storeConf: storeConf,
  appView: App
})
