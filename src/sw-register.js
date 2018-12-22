import { register } from 'register-service-worker'

const CACHE_NAME = 'himself65-cache-v1'

const PRECACHE_LIST = [
  'index.html',
  /^(app|chunk).+\.(js|css)$/,
  /.+\.md/
]

const HOSTNAME_WHITELIST = [
  self.location.hostname,
  'himself65.com'
]

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })

  self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          console.log('Opened cache.')
          return cache.addAll(PRECACHE_LIST)
        })
    )
  })

  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response
          }
          return fetch(event.request)
        })
    )
  })
}
