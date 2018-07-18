var webpack = require('webpack');  // 引入webpack
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    // app: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  mode: 'development', // development
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, './src'),
        options: {
          'presets': ['latest']
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({template: './src/index.html'})
  ] 
}
