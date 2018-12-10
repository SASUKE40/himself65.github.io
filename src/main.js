import Vue from 'vue'
import '@kuen/components/dist/kuen.css'
import Kuen from '@kuen/components'
import './registerServiceWorker'
import routerConf from './router'
import storeConf from './store'
import App from './App.vue'
import { startApp } from '@kuen/loader'

Vue.use(Kuen)

startApp({
  routerConf: routerConf,
  storeConf: storeConf,
  appView: App
})
