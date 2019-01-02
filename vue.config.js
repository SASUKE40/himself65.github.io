// const isPord = process.env.NODE_ENV === 'production'

module.exports = {
  assetsDir: 'public',

  pwa: {
    name: 'Himself65',
    theme_color: '#6cb2eb'
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
