// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  dev: {
    index: path.resolve(__dirname, '../dist/index.html'),
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },
  prod: {
    server: {
      path: path.resolve(__dirname, '../dist/server'),
      aubDirectory: 'server',
      publicPath: '/',
    },
    client: {
      index: path.resolve(__dirname, '../dist/client/index.html'),
      path: path.resolve(__dirname, '../dist/client'),
      subDirectory: 'client',
      publicPath: '/',
    }
  }
}