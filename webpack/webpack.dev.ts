import * as path from 'path'
import type { Configuration } from 'webpack'
import { merge } from 'webpack-merge'

import _wc from './webpack.common'
import _wp, { prefix as _prefix } from './webpack.path'

const common = {
  config: _wc,
  path: _wp,
  prefix: _prefix
}

const dev:Configuration = merge(common.config, {
  mode: 'development',
  output: {
    filename: path.posix.join(common.prefix, '[name]-[hash].js'),
    path: common.path.build
  },
  devServer: {
    contentBase: common.path.build,
    compress: true,
    port: 8080
  },
  plugins: []
})

export default dev
