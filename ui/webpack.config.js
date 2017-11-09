'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devtool = 'source-map'

const entry = {
  vendor: './js/vendor.js',
  app: './js/app.js'
}

const output = {
  path: '/dist/',
  filename: 'wiskey_wisdom_[name].js'
}

const extensions = [
  '.js',
  '.css',
  '.html'
]

const rules = [{
  test: /\.js$/,
  exclude: /node_modules/,
  use: [{
    loader: 'ng-annotate-loader', 
    loader: 'babel-loader'
  }]
}, {
  test: /\.css$/,
  include: /css/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader'
    }]
  })
}
// , {
//   test: /\.less$/,
//   include: /css/,
//   use: extractLESS.extract(['style-loader', 'less-loader'])
// }
, {
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
    rules
  },
  plugins
}
