// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  dev: {
    index: path.resolve(__dirname, '../dist/index.html'),
    path: path.resolve(__dirname, '../'),
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/dist',
  },
  prod: {
    server: {
      path: path.resolve(__dirname, '../dist/server'),
      assetsSubDirectory: '/',
      publicPath: '/',
    },
    client: {
      index: path.resolve(__dirname, '../dist/client/index.html'),
      path: path.resolve(__dirname, '../dist/client'),
      assetsSubDirectory: 'static',
      publicPath: '/',
    }
  }
}