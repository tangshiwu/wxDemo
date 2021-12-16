const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const userLogin = (successFn) => {
  wx.showLoading({
    title: '登录中',
  })
  let endData = {} // 成功回调暴露出去的结果
  if (wx.getUserProfile) {
    let loginCode = ''
    wx.login({
      success: (res) => {
        if (res.code) {
          loginCode = res.code
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'error'
          })
          // console.log("调用wx.login获取code失败")
        }
      },
      fail: function (error) {
        wx.showToast({
          title: '登录失败,请重试',
          icon: 'error'
        })
        // console.log("wx.login接口调用失败", error)
      },
    })
    wx.getUserProfile({
      desc: '用于获取头像、昵称等信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (infoRes) => {
        console.log("登录结果：", infoRes.userInfo)
        endData = {
          avatarUrl: infoRes.userInfo.avatarUrl,
          nickName: infoRes.userInfo.nickName,
        }
        saveUserInfo(infoRes.userInfo)
        successFn(endData)
        // wx.request({
        //   url: `${getApp().globalData.baseUrl}/login/wechat`,
        //   method: "POST",
        //   data: {
        //     code: loginCode,
        //     rawData: infoRes.rawData, // 用户非敏感信息
        //     signature: infoRes.signature, //签名
        //     encryptedData: infoRes.encryptedData, // 用户敏感信息
        //     iv: infoRes.iv //解密算法的向量
        //     // token: wx.getStorageSync("loginFlag")
        //   },
        //   success: function (res) {
        //     // console.log("login success", res)
        //     res = res.data;
        //     if (res.code == 200) {
        //       endData = {
        //         userInfo: res.data.user,
        //       }
        //       // 设置本地存储(下次登录如果本次存储存在则无需再次登录)
        //       getApp().saveUserInfo(res.data.user)
        //       successFn(endData)
        //       wx.showToast({
        //         title: '登录成功',
        //         icon: 'success'
        //       })
        //     } else {
        //       wx.showToast({
        //         title: '登录失败,请重试',
        //         icon: 'error'
        //       })
        //     }
        //   },
        //   fail: function (error) {
        //     console.log("login fail")
        //     wx.showToast({
        //       title: '登录失败,请重试',
        //       icon: 'error'
        //     })
        //   }
        // })
      },
      fail: (res) => {
        console.log(' wx.getUserProfile fail', res)
        wx.showToast({
          title: '登录失败,请重试',
          icon: 'error'
        })
      },
      complete: () => {
        wx.hideLoading()
      },
    })
  }
}

const saveUserInfo = (userInfo) => {
  // 设置本地存储(下次登录如果本次存储存在则无需再次登录)
  wx.setStorageSync('userInfo', userInfo);
}

const loginOut = () => {
  wx.setStorageSync('userInfo', null);
}

module.exports = {
  formatTime,
  userLogin: userLogin,
}