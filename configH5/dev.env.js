var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // platform_h5: JSON.stringify(process.env.npm_config_platform)
  mpvuePlatform: JSON.stringify(process.env.npm_config_platform)
})


