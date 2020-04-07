var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"mock"',
})
