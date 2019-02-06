import Vue from 'vue'

Vue.http.interceptors.push(() => {
  if (window.localStorage.getItem('token')) {
    Vue.http.headers.common['Authorization'] = window.localStorage.getItem('token')
  }
})
