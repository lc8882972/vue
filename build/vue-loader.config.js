module.exports = {
  postcss: [
    require('postcss-px2rem')({remUnit: 75,baseDpr:2}),
    require('autoprefixer')({
      browsers: ['ios >=8', 'android >=4.0']
    })
  ],
}