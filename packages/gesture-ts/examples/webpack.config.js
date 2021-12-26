const path = require('path')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const aliases = require('../build/alias')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index.ts'),
  output: {
    path: path.join(__dirname),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: Object.assign({}, aliases)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'ts']
    })
  ]
}
