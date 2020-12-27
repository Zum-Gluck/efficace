const path = require('path')
const webpack = require("webpack");
const { merge } = require('webpack-merge');
const common = require('./common.config')


module.exports = merge(common, {
  devtool: 'source-map',
  entry: './src/package/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'main.min.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
}) 