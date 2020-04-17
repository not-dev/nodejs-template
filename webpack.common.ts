import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const module:webpack.Configuration = {
  entry: {
    budle: './src/index.ts'
  },
  resolve: {
    extensions: [
      '.ts', '.js'
    ]
  },
  output: {
    filename: 'js/[name]-[hash].min.js',
    path: `${__dirname}/build`
    /*
    library: '[name]',
    libraryTarget: 'umd'
    */
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'head',
      minify: false
      // hash: true
    })
  ]
}

export default module
