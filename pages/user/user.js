// pages/user/user.js
let util = require('../../utils/util.js') // 引入公共代码
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: null,
    nickName: null,
    userContenr: [{
        type: 'tickets',
        name: '电影票'
      },
      {
        type: 'coupons',
        name: '优惠券'
      },
      {
        type: 'equityCards',
        name: '权益卡'
      },
      {
        type: 'snack',
        name: '我的小食'
      },
      {
        type: 'wantToSee',
        name: '想看的电影'
      },
      {
        type: 'seen',
        name: '看过的电影'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  login() {
    util.userLogin((res) => {
      console.log("回调：", res)
      this.setData({
        avatarUrl: res.avatarUrl,
        nickName: res.nickName,
      })
    })
  },

  onLoad: function (options) {
    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        avatarUrl: userInfo.avatarUrl,
        nickName: userInfo.nickName,
      })
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})