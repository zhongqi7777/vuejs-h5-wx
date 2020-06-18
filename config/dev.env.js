var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"/mock"',
  BASE_URL: JSON.stringify(process.env.npm_config_baseurl) || '"http://localhost:3000"'
  //BASE_URL: JSON.stringify(process.env.npm_config_baseurl) || '"http://172.22.141.7:3000"'
})
