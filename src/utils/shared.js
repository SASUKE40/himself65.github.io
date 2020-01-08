import EE from './EventEmitter'

export const themeEvent = new EE({
  preferredTheme: null
}, conf => {
  try {
    conf.preferredTheme = window.localStorage.getItem('theme') || 'light'
  } catch (err) {}
  document.body.className = conf.preferredTheme
}).on('setTheme', function (themeKey) {
  this.conf.preferredTheme = themeKey
}).on('setTheme', themeKey => {
  document.body.className = themeKey
}).on('setTheme', themeKey => {
  try {
    window.localStorage.setItem('theme', themeKey)
  } catch (err) {}
})
