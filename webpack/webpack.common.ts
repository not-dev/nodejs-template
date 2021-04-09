import Dotenv from 'dotenv-webpack'
import * as path from 'path'
import type { Configuration } from 'webpack'
import nodeExternals from 'webpack-node-externals'

// import nodeExternals from 'webpack-node-externals'
import wp from './webpack.path'

const common: Configuration = {
  target: 'node',
  externals: [nodeExternals()],
  context: wp.src,
  entry: {
    index: path.join(wp.src, 'index.ts')
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.tsx'
    ],
    alias: {
      '@assets': path.join(wp.src, 'assets'),
      '@util': path.join(wp.src, 'util')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
}

export default common
