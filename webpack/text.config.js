const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge');
const common = require('./common.config')

module.exports = merge(common, {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
})