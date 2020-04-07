

import axios from "axios";

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

export default axios
