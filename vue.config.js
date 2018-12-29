const SwPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const OUTPUT_DIR = 'dist'
const isPord = process.env.NODE_ENV === 'production'

module.exports = {
  assetsDir: 'public',

  pwa: {
    name: 'Himself65',
    themeColor: '#6cb2eb'
  },

  devServer: {
    proxy: {
      '/luogu': {
        target: 'http://localhost:3001',
        changeOrigin: false
      },
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: false
      }
    }
  },

  configureWebpack: {
    plugins: [
      new SwPrecacheWebpackPlugin({
        minify: false,
        cacheId: `kuen`,
        staticFileGlobs: [
          'src/assets/**/*'
        ],
        filename: 'sw-register.js',
        mergeStaticsConfig: true,
        staticFileGlobsIgnorePatterns: [/\.map$/]
      })
    ]
  }
}
