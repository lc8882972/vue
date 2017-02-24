module.exports = {
  postcss: [
    require('autoprefixer')({
      browsers: ['ios >=8', 'andorid >=4.0']
    })
  ],
}