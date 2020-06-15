// // https://github.com/michael-ciniawsky/postcss-load-config

module.exports =
  process.env.npm_config_platform === "h5"
    ? {
        plugins: {
          // autoprefixer: {
          //   overrideBrowserslist: [
          //     "Android 4.1",
          //     "iOS 7.1",
          //     "Chrome > 31",
          //     "ff > 31",
          //     "ie >= 8"
          //   ]
          // }
        }
      }
    : {
        plugins: {
          "postcss-mpvue-wxss": {}
        }
      };
