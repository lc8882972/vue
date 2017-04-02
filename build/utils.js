var path = require('path')
var config = require('../config')

exports.assetsPath = function (_path) {
  // var assetsSubDirectory = process.env.NODE_ENV === 'production'
  //   ? config.build.assetsSubDirectory
  //   : config.dev.assetsSubDirectory
  var dest =path.posix.join('img', _path);
  console.log(dest);
  return dest
}