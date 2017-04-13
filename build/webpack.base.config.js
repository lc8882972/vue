const path = require('path')
const vueConfig = require('./vue-loader.config')
const isProd = process.env.NODE_ENV === 'production'
const isServer = process.env.VUE_ENV === 'server'
const utils = require('./utils')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  devtool: isProd ? false : '#cheap-module-source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: [
      'es6-promise',
      'vue',
      'vue-router',
      'vuex',
      'vuex-router-sync',
      'jroll',
      'babel-polyfill'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {

    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        options: {
          objectAssign: 'Object.assign'
        },
        include: [resolve('src')]
      }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
}

if (isServer) {
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader'
  })
} else {
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 5120,
      name: utils.assetsPath('[name].[hash:8].[ext]')
    }
  })
}

module.exports = config;