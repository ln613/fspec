var webpack = require('webpack');
var path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
    //filename: '[name].[contenthash].js'
  },
  devServer: {
    port: 9020
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          'presets': ['env']
        },
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.fspec/,
        loader: 'fspec-loader'
      }
    ]
  },
  // plugins: [
  //   new CleanWebpackPlugin(['dist']),
  //   new HtmlWebpackPlugin({title: 'Caching'})
  // ],
  resolveLoader: {
    modules: ['node_modules', path.join(__dirname, 'src')]
  }
};
