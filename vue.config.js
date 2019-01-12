const isMock = process.env.TARGET === 'mock'

module.exports = {
  assetsDir: 'public',

  pwa: {
    name: 'Himself65',
    theme_color: '#6cb2eb'
  },

  devServer: {
    proxy: `http://localhost:300${isMock ? 1 : 0}`
  }
}
