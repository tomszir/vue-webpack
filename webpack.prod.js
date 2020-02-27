const merge = require('webpack-merge')
const common = require('./webpack.common.js')

// TODO: Add optimizations to the Production build.

module.exports = merge(common, {
  mode: 'production'
})
