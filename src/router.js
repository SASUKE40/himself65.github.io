import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'

import { kuen } from './main'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/checkin',
      name: 'checkin',
      component: () => import('./views/Checkin.vue')
    },
    {
      path: '/login',
      name: 'login',
      props: {
        loginPage: true
      },
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      props: {
        loginPage: false
      },
      component: () => import('./views/Login.vue')
    }
  ]
})

// hooks
router.beforeEach(async (to, from, next) => {
  const data = await axios.get(to.fullPath, {
    data: to.query,
    headers: {
      'X-Himself65-Type': 'json-only'
    }
  })
  kuen.$props = {
    currentData: data.currentData,
    currentUser: data.currentUser
  }
})
