import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'
import common from './webpack.common'

const module:webpack.Configuration = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    open: true
  },
  devtool: 'inline-source-map'
})

export default module
