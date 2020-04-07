module.exports = {
  NODE_ENV: '"production"',
  platform_h5: JSON.stringify(process.env.npm_config_platform),
  BASE_ENV: JSON.stringify(process.env.npm_config_baseenv) || '"mock"',
}
