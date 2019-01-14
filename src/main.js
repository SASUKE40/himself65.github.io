import Vue from 'vue'
import Vuetify from 'vuetify'
import Vee from 'vee-validate'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'vuetify/dist/vuetify.min.css'
import Kuen from '@kuen/components'
import './sw-register'
import { router } from './router'
import { store } from './store'
import App from './App.vue'

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

export const kuen = new Vue({
  el: '#app',
  name: 'Himself65',
  data: () => ({
    isLoaded: document.readyState === 'complete'
  }),

  render: (h) => h(App),
  router,
  store
})

kuen.isLoaded || window.addEventListener('load', () => {
  kuen.isLoaded = true
  console.log('Website load')
})
