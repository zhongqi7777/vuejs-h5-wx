// import Fly from 'flyio/dist/npm/wx'
// 'flyio'(与axios、fentch对比 https://wendux.github.io/dist/#/doc/flyio/compare)
var Fly = require("flyio") //npm引入方式
import { Toast } from "vant";

const request = new Fly()

request.interceptors.request.use((request) => {
    // 自定义加载图标
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
    });
    return request
})

request.interceptors.response.use(
    (response, promise) => {
        wx.hideLoading()
        // wx.hideNavigationBarLoading()
        Toast.clear();
        return promise.resolve(response.data)
    },
    (err, promise) => {
        // wx.hideNavigationBarLoading()
        // wx.showToast({
        //     title: err.message,
        //     icon: 'none',
        //     duration: 1000
        // })

        Toast.fail(err.message);
        return promise.resolve()
    }
)

export default request