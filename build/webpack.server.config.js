const webpack = require('webpack');
const base = require('./webpack.base.config');
const outputPath = require('../config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
const isServer = process.env.VUE_ENV === 'server'

const config = Object.assign({}, base, {
  target: 'node',
  devtool: false,
  entry: './src/server-entry.js',
  output: Object.assign({}, base.output, {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2',
    path: isProd ? outputPath.prod.server.path : outputPath.dev.path,
  }),
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})

if (isProd) {

  config.plugins.push(
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: 'dist/client/index.html',
      to: 'index.html',
      toType: 'file'
    }])
  )
}

module.exports = config