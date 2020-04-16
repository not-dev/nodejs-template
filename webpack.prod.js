const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const packageJson = require('./package.json')
const version = packageJson.version

const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: `js/[name]-${version}.min.js`,
    path: `${__dirname}/build`
    /*
    library: '[name]',
    libraryTarget: 'umd'
    */
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        terserOptions: {
          compress: { drop_console: true }
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'head'
    }),
    new CopyPlugin([
      { from: 'public' }
    ])
  ]
})
