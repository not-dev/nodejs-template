const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    path: `${__dirname}/build`
    /*
    library: '[name]',
    libraryTarget: 'umd'
    */
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'head',
      hash: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    open: true
  },
  devtool: 'inline-source-map'
}
)
