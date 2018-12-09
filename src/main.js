import Vue from 'vue'
import KuenComponents from '@kuen/components'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// app css
import '@kuen/components/dist/kuen.css'

Vue.use(KuenComponents)

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
