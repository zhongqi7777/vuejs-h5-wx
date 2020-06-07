// // https://github.com/michael-ciniawsky/postcss-load-config

module.exports = process.env.npm_config_platform === 'h5' ? {
  "plugins": {
  }
} : {
    "plugins": {
      "postcss-mpvue-wxss": {}
    }
  }