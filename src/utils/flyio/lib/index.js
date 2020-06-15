// 'flyio'(与axios、fentch对比 https://wendux.github.io/dist/#/doc/flyio/compare)
// var Fly = require("flyio/dist/npm/wx") //npm引入方式

const platform = process.env.mpvuePlatform;
const flyh5 = require("flyio/dist/npm/fly");
const flymp = require("flyio/dist/npm/wx");
const Fly = platform == "h5" ? flyh5 : flymp;
const request = new Fly();

import { Toast } from "vant";

request.interceptors.request.use(request => {
  if (platform == "h5") {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner"
    });
  } else {
    wx.showLoading({ title: "加载中.." });
    // wx.showNavigationBarLoading() //显示导航条加载动画。
  }

  return request;
});

request.interceptors.response.use(
  (response, promise) => {
    if (platform == "h5") {
      Toast.clear();
    } else {
      wx.hideLoading();
      // wx.hideNavigationBarLoading()
    }

    return promise.resolve(response.data);
  },
  (err, promise) => {
    if (platform == "h5") {
    } else {
      //wx.hideNavigationBarLoading()
      wx.showToast({
        title: err.message,
        icon: "none",
        duration: 1000
      });
    }

    return promise.resolve();
  }
);

export default request;
