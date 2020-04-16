const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    budle: './src/index.js'
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
    new CleanWebpackPlugin()
  ]
}
