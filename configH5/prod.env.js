module.exports = {
  NODE_ENV: '"production"',
  mpvuePlatform: JSON.stringify(process.env.npm_config_platform),
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"mock"',
}
