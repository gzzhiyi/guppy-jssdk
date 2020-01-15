const merge = require('webpack-merge')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const basicConfig = require('./webpack.base.conf')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = merge.smart(basicConfig, {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../src/index')
  },
  output: {
    filename: 'guppy_jssdk.min.js'
  },
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  },
  plugins: [
    new CleanPlugin([path.resolve(__dirname, '../dist/*')], {
      root: process.cwd()
    })
  ]
})
