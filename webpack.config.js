const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: ['./src', './node_modules'],
    extensions: ['.jsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    hot: true,
    publicPath: '/',
    port: 3000,
    allowedHosts: [
      '.baemin.com'
    ]
  }
}
