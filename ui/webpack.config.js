'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devtool = 'source-map'

const entry = {
  vendor: './js/vendor.js',
  main: ['babel-polyfill', './js/app.js']
}

// TODO: Change path to reflect the naming conventions of our Spring API
const output = {
  filename: '[name].js',
  path: '../src/main/resources/static/'
}

const extensions = [
  '',
  '.js',
  '.css',
  '.html'
]

const loaders = [{
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: ['ng-annotate', 'babel']
}, {
  test: /\.css$/,
  include: /css/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
}, {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
}, {
  test: /\.html$/,
  include: /js/,
  exclude: /node_modules/,
  loaders: ['ngtemplate', 'html']
}, {
  test: /\.html$/,
  include: /static/,
  exclude: /node_modules/,
  loader: 'html'
}, {
  test: /\.(ico|jpg|png|eot|svg|ttf|woff|woff2)$/,
  loader: 'url?limit=10000'
}]

const plugins = [
  new ExtractTextPlugin('[name].css'),
  new HtmlWebpackPlugin({
    hash: true,
    template: './static/index.html',
    inject: 'head'
  })
]

module.exports = {
  devtool,
  entry,
  output,
  resolve: {
    extensions
  },
  module: {
    loaders
  },
  plugins
}
