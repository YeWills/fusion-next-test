const merge = require('webpack-merge')

const baseConf = require('./webpack.config.base')
// const httpUrl = 'https://test-p172-mktweb.test360.com'
// const httpUrl = 'https://test-i0-mktweb.test360.com'
// const httpUrl = 'https://pre-i0-mktweb.test360.com'
// const httpUrl = 'http://work.csqccr.com';
// const httpUrl = 'https://work.zhangzhongpei.com'

const localConf = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8080,
    open: false,
    hot: true,
    quiet: true,
    historyApiFallback: true,
    overlay: {
      errors: true,
    },
    stats: {
      children: false,
      chunks: false,
      assets: false,
      modules: false,
    },
  },
}

module.exports = merge(localConf, baseConf)
