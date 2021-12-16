// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    movieList: [
      {
        name: "古董局中局",
        id: 1,
        race: '8.9',
        poster: '/images/poster.png',
        director: ['郭子健'],
        actor: ['雷佳音', '李现', '辛芷蕾', '葛优'],
        releaseTime: '2021-12-01'
      },
      {
        name: "扬名立万",
        id: 2,
        race: '9.0',
        poster: '/images/poster.png',
        director: ['刘循子墨'],
        actor: ['尹正', '邓家佳', '喻恩泰'],
        releaseTime: '2021-12-01'
      },
      {
        name: "误杀2",
        id: 3,
        race: '',
        poster: '/images/poster.png',
        director: ['戴墨'],
        actor: ['肖央', '任达华', '文咏珊'],
        releaseTime: ''
      },
      {
        name: "误杀2",
        id: 4,
        race: '',
        poster: '/images/poster.png',
        director: ['戴墨'],
        actor: ['肖央', '任达华', '文咏珊'],
        releaseTime: ''
      },
      {
        name: "误杀2",
        id: 5,
        race: '',
        poster: '/images/poster.png',
        director: ['戴墨'],
        actor: ['肖央', '任达华', '文咏珊'],
        releaseTime: ''
      }
    ],
    region: ['北京市', '北京市', '石景山区'],
    customItem: '',
    background: ['http://149.129.123.124:4869/557836b4d45d9e042a9ed2d2166decfb', 'http://149.129.123.124:4869/b743aa2bc1473ee8a5484f6f982d9e0a', 'http://149.129.123.124:4869/9b6f685f79dc71ab8b8b4246b46e3f34'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    navbar: ['正在热映', '即将上映'],
    currentNav: 0
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  navbarTap(e) {
    this.setData({
      currentNav: e.currentTarget.dataset.index
    })
  }
})
