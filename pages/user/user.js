// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userContenr:[
      {type: 'tickets', name: '电影票'},
      {type: 'coupons', name: '优惠券'},
      {type: 'equityCards', name: '权益卡'},
      {type: 'snack', name: '我的小食'},
      {type: 'wantToSee', name: '想看的电影'},
      {type: 'seen', name: '看过的电影'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  login() {
    wx.login({
      success: function(res) {
        console.log(res);
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})