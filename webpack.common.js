const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
  entry: {
    budle: './src/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: `${__dirname}/build`
    /*
    library: '[name]',
    libraryTarget: 'umd'
    */
  },
  resolve: {
    extensions: [
      '.ts', '.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'head',
      hash: true
    })
  ]
}
