'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractCSS = new ExtractTextPlugin('css/[name]-css.css')
const extractLESS = new ExtractTextPlugin('css/[name]-less.css')

const devtool = 'source-map'

const entry = {
  vendor: './js/vendor.js',
  main: ['babel-polyfill', './js/app.js']
}

const output = {
  filename: '[name].js',
  path: '/static/resources/'
}

const extensions = [
  '.js',
  '.css',
  '.html'
]

const rules = [{
  test: /\.js$/,
  exclude: /node_modules/,
  use: ['ng-annotate-loader', 'babel-loader']
}, {
  test: /\.css$/,
  include: /css/,
  use: ['style-loader', 'css-loader']
}, {
  test: /\.less$/,
  include: /css/,
  use: extractLESS.extract(['style-loader', 'less-loader'])
}, {
  test: /\.html$/,
  include: /js/,
  exclude: /node_modules/,
  use: ['ngtemplate-loader', 'html-loader']
}, {
  test: /\.html$/,
  include: /static/,
  exclude: /node_modules/,
  use: 'html-loader'
}, {
  test: /\.(ico|jpg|png|eot|svg|ttf|woff|woff2)$/,
  use: 'url-loader'
}]

const plugins = [
  extractCSS,
  extractLESS,
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
    rules
  },
  plugins
}
