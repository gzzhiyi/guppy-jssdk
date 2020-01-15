const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const basicConfig = require('./webpack.base.conf')

module.exports = merge.smart(basicConfig, {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/index'),
    debug: path.resolve(__dirname, '../src/debug'),
  },
  devtool: 'cheep-module-eval-source-map',
  devServer: {
    host:'localhost',
    port: 8088,
    compress: true,
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
    open: true
  },
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Guppy-JSSDK',
      filename: 'index.html',
      template: path.resolve(__dirname, `../src/debug.hbs`),
      inject: true,
      hash: true,
      showErrors: true,
      chunks: ['vendor', 'index', 'debug']
    })
  ]
})
