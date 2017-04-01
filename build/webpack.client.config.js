const webpack = require('webpack')
const base = require('./webpack.base.config')
const vueConfig = require('./vue-loader.config')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const outputPath =require('../config')

const isProd = process.env.NODE_ENV === 'production' ? true : false

const config = Object.assign({}, base, {
  output: {
    path: isProd ? outputPath.prod.client.path  : outputPath.dev.path,
    publicPath: isProd ? outputPath.prod.client.publicPath  : outputPath.dev.publicPath,
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: Object.assign({}, base.resolve.alias, {

    })
  },
  plugins: (base.plugins || []).concat([
    // strip comments in Vue code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // generate output HTML
    new HTMLPlugin({
      template: 'src/index.html'
    })
  ])
})

if (process.env.NODE_ENV === 'production') {
  // Use ExtractTextPlugin to extract CSS into a single file
  // so it's applied on initial render.
  // vueConfig is already included in the config via LoaderOptionsPlugin
  // here we overwrite the loader config for <style lang="stylus">
  // so they are extracted.
  vueConfig.loaders = {
    css: ExtractTextPlugin.extract({
      use: 'css-loader',
      fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
    }),
    sass: ExtractTextPlugin.extract({
      use: 'css-loader!sass-loader',
      fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
    })
  }

  config.plugins.push(
    new ExtractTextPlugin('styles.[hash].css'),
    // minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  )
}

module.exports = config