const webpack = require('webpack')
const path = require('path')

module.exports = {
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
    umdNamedDefine: true
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    alias: {},
    extensions: ['.ts', '.js', '.json']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts'],
        exclude: /node_modules/
      },
      {
        test: /\.(js)$/,
        use: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {}
    })
  ]
}
