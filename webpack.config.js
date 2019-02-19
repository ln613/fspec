var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 9020,
    hot: true
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
  resolveLoader: {
    modules: ['node_modules', path.join(__dirname, 'src')]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

