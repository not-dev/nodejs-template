import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import * as path from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import type { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

import common from './webpack.common'
import wp from './webpack.path'

const config: Configuration = merge(common, {
  mode: 'production',
  output: {
    filename: path.posix.join('[name].js'),
    chunkFilename: path.posix.join('[name]-[contenthash].js'),
    path: wp.build
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: { drop_console: false }
      }
      // extractComments: false
    })]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})

export default config
