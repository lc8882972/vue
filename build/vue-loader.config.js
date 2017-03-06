module.exports = {
  postcss: [
    require('autoprefixer')({
      browsers: ['ios >=8', 'android >=4.0']
    })
  ],
}