var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"mock"',
  BASE_URL: JSON.stringify(process.env.npm_config_baseurl) || '"http://www.testmock.com/"'
  // BASE_URL_H5: JSON.stringify(process.env.npm_config_baseurlh5) || '""http://www.testmock.com"',
  // BASE_URL_MP: JSON.stringify(process.env.npm_config_baseurlmp) || '"http://www.testmock.com"'
})
