const webpack = require('webpack');
const base = require('./webpack.base.config');
const outputPath = require('../config')
const isProd = process.env.NODE_ENV === 'production' ? true : false

const config = Object.assign({}, base, {
  target: 'node',
  devtool: false,
  entry: './src/server-entry.js',
  output: Object.assign({}, base.output, {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2',
    path: isProd ? outputPath.prod.server.path  : outputPath.dev.path,
  }),
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})

module.exports = config