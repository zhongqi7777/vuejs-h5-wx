var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PLATFORM: JSON.stringify(process.env.npm_config_platform)
})
