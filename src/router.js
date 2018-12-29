import Home from './views/Home.vue'
import About from './views/About.vue'
import Checkin from './views/Checkin.vue'
import Luogu from './views/Luogu.vue'

export default {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/checkin',
      name: 'checkin',
      component: Checkin
    },
    {
      path: '/luogu',
      name: 'luogu',
      component: Luogu
    }
  ]
}
