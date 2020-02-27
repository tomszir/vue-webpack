const ip = require('ip')
const chalk = require('chalk')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const port = 8080

const messages = [
  'Your application is running at ' + chalk.cyan('http://localhost:' + port),
  'To access a local version use  ' + chalk.cyan('http://' + ip.address() + ':' + port)
]

const notes = [
  'To create a production build run ' + chalk.cyan('yarn build')
]

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port,
    host: '0.0.0.0',
    hot: true,
    quiet: true,
    inline: true,
    disableHostCheck: true
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages,
        notes
      }
    })
  ]
})
