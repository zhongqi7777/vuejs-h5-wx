import axios from "axios";
import { Toast } from "vant";
// import store from '@/store'

axios.defaults.adapter = function (config) {
  //发交易之前显示加载中
  wx.showLoading({ title: '拼命加载中...' })
  //发交易调用(开发放开注释)
  return new Promise((resolve, reject) => {
    console.log(config);
    wx.request({
      ...config,
      url: config.url,
      data: config.params,
      success: res => {
        console.log(' success: res => {');
        wx.hideLoading()
        //console.log(res)
        reject(res.data)
      },
      fail: res => {
        console.log(' fail: res => {');
        // wx.hideLoading()

        // wx.showToast({
        //   title: '操作失败',
        //   icon: 'none',
        //   duration: 2000,
        //   complete: res => {
        //     // wx.hideToast();
        //     // setTimeout(() => {
        //     //   // wx.hideLoading()
        //     // }, 3000);
        //   }
        // })

        //wx.hideLoading()

      },
      complete: res => {
        console.log(' complete: res => {');
        // wx.hideLoading()


        // setTimeout(() => {
        //   wx.hideToast();
        // }, 3000);
        // TODO:
      }
    });
  })
}


let baseURL = process.env.BASE_URL ? process.env.BASE_URL : "";
let baseENV = process.env.BASE_ENV;
baseURL += baseENV;

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  baseURL: baseURL, // api 的 base_url
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (store.getters.token) {
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['X-Token'] = getToken()
    // }
    return config;
  },
  error => {
    // Do something with request error
    // console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 XMLHttpRequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    return response;
  },
  err => {
    // console.log('err' + error) // for debug
    // Toast({
    //   Toast: error.Toast,
    //   type: 'error',
    //   duration: 5 * 1000
    // })

    if (err && err.response) {
      var responseToast = err.response.data.Toast;
      switch (err.response.status) {
        case 400:
          err.response.Toast = responseToast || "请求错误";
          Toast.fail('请求错误'); Toast.fail('请求错误');
          break;

        case 401:
          err.response.Toast = responseToast || "未授权，请登录";
          Toast.fail('未授权，请登录');
          break;

        case 403:
          err.response.Toast = responseToast || "拒绝访问";
          Toast.fail('拒绝访问');
          break;

        case 404:
          err.response.Toast =
            responseToast || `请求地址出错: ${err.response.config.url}`;
          // Toast({
          //   Toast: "请求地址出错: ${err.response.config.url}",
          //   type: "warning"
          // });
          Toast.fail('请求地址出错: ${err.response.config.url}');
          break;

        case 405:
          err.response.Toast = responseToast || "拒绝访问";
          Toast.fail('拒绝访问');
          break;

        case 408:
          err.response.Toast = responseToast || "请求超时";
          Toast.fail('请求超时');
          break;

        case 500:
          err.response.Toast = responseToast || "服务器内部错误";

          Toast.fail('服务器内部错误');
          break;

        case 501:
          err.response.Toast = responseToast || "服务未实现";
          Toast.fail('服务未实现');
          break;

        case 502:
          err.response.Toast = responseToast || "网络错误";
          Toast.fail('网络错误');
          break;

        case 503:
          err.response.Toast = responseToast || "服务不可用";
          Toast.fail('服务不可用');
          break;

        case 504:
          err.response.Toast = responseToast || "网络超时";
          Toast.fail('网络超时');
          break;

        case 505:
          err.response.Toast = responseToast || "HTTP版本不受支持";
          Toast.fail('HTTP版本不受支持');
          break;

        default:
          err.response.Toast = responseToast;
      }
    }
    return Promise.reject(err);
  }
);

export default service;



// import axios from 'axios'

// axios.defaults.adapter = function (config) {
//   //发交易之前显示加载中
//   wx.showLoading({ title: '拼命加载中...' })
//   //发交易调用(开发放开注释)
//   return new Promise((resolve, reject) => {
//     console.log(config);
//     wx.request({
//       ...config,
//       url: config.url,
//       data: config.params,
//       success: res => {
//         console.log(' success: res => {');
//         wx.hideLoading()
//         //console.log(res)
//         reject(res.data)
//       },
//       fail: res => {
//         console.log(' fail: res => {');
//         // wx.hideLoading()

//         // wx.showToast({
//         //   title: '操作失败',
//         //   icon: 'none',
//         //   duration: 2000,
//         //   complete: res => {
//         //     // wx.hideToast();
//         //     // setTimeout(() => {
//         //     //   // wx.hideLoading()
//         //     // }, 3000);
//         //   }
//         // })

//         //wx.hideLoading()

//       },
//       complete: res => {
//         console.log(' complete: res => {');
//         // wx.hideLoading()


//         // setTimeout(() => {
//         //   wx.hideToast();
//         // }, 3000);
//         // TODO:
//       }
//     });
//   })
// }
// export default axios