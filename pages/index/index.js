//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '',
    gender:'',
    userInfo:{}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('==> onLoad index page!')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        gender:userInfo.gender==0?'未知':userInfo.gender==1?'男':'女'
      })
    })
    //显示当前页面的转发按钮
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onShareAppMessage:function(res){
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log("==> 来自页面内转发按钮:"+res.target)
    }
    return {
      title: '爱美文',
      path: '/pages/index/index',
      success: function(res) {
        // 转发成功
        console.log('==> 转发成功!')
      },
      fail: function(res) {
        // 转发失败
        console.log('==> 转发失败!')
      }
    }
  }
})
