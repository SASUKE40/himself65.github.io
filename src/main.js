import Vue from 'vue'
import Kuen from '@kuen/components'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.use(Kuen)

Vue.config.productionTip = false

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === 'complete' }),
  render: h => h(App),
  router,
  store
}).$mount('#app')

vm.isLoaded || window.addEventListener('load', () => {
  vm.isLoaded = true
  console.log('Website LOADED')
})
