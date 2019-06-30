var path = require("path");

module.exports = {
  entry: {
    index: path.join(__dirname + '/src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname + '/dist')
  },
  mode: 'product',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    
  ]
}