const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.base.config')
const vueConfig = require('./vue-loader.config')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const outputPath = require('../config')
const utils = require('./utils')
const isProd = process.env.NODE_ENV === 'production' ? true : false

const config = Object.assign({}, base, {
  output: {
    path: isProd ? outputPath.prod.client.path : outputPath.dev.path,
    publicPath: isProd ? outputPath.prod.client.publicPath : outputPath.dev.publicPath,
    filename: 'js/[name].[chunkhash:8].js'
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
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
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
    new ExtractTextPlugin('css/styles.[hash:8].css'),
    // minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../public'),
        to: outputPath.prod.client.path + '/public',
        toType: 'dir',
        ignore: ['\.js$']
      }
    ])
  )
}

module.exports = config