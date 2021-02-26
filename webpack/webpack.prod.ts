import { CleanWebpackPlugin } from 'clean-webpack-plugin'
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

const prod:Configuration = merge(common.config, {
  mode: 'production',
  output: {
    filename: (data) => {
      if (data.chunk?.name !== 'index') {
        return path.posix.join(common.prefix, '[name].js')
      } else {
        return path.posix.join(common.prefix, 'index.js')
      }
    },
    path: common.path.build
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})

export default prod
