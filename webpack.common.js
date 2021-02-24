const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const src = path.join(__dirname, 'src')
const build = path.join(__dirname, 'build')

const config = {
  target: 'node',
  externals: [nodeExternals()],
  context: src,
  entry: {
    index: path.join(src, 'index.ts')
  },
  resolve: {
    extensions: [
      '.ts', '.js'
    ],
    alias: {
      '@utils': path.join(src, 'utils')
    }
  },
  output: {
    filename: (data) => {
      if (data.chunk?.name !== 'index') {
        return path.join('[name].js')
      } else {
        return '[name].js'
      }
    },
    path: build
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = config
