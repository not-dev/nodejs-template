import merge from 'webpack-merge'
import common from './webpack.common'

import CopyPlugin from 'copy-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

const module = merge(common, {
  mode: 'production',
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
    new CopyPlugin([
      {
        from: 'public',
        ignore: []
      }
    ])
  ]
})

export default module
