import * as path from 'path'
import type { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

import common from './webpack.common'
import wp from './webpack.path'

const config:Configuration = merge(common, {
  mode: 'development',
  output: {
    filename: path.posix.join('[name]-[contenthash].js'),
    chunkFilename: path.posix.join('[name]-[contenthash].js'),
    path: wp.build
  },
  devServer: {
    contentBase: wp.public,
    compress: true,
    port: 8080
  },
  plugins: [
  ]
})

export default config
