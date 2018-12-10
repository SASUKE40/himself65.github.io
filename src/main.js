import '@kuen/components/dist/kuen.css'
import './registerServiceWorker'
import routerConf from './router'
import storeConf from './store'
import App from './App.vue'
import { startApp } from '@kuen/loader'

startApp({
  routerConf: routerConf,
  storeConf: storeConf,
  appView: App
})
