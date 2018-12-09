module.exports = {
  assetsDir: 'public',

  pwa: {
    name: 'Himself65',
    themeColor: '#6cb2eb'
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: false
      }
    }
  }
}
