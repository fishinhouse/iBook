Page({
  data: {
    imgUrls: [
      {url:'../../resources/1.jpg',id:1},
      {url:'../../resources/2.jpg',id:2},
      {url:'../../resources/3.jpg',id:3}
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(e){
  	console.log("==> pages/guide/guide")
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  index:function(e){
  	var that=this
  	console.log("==> click index button!")
  	wx.switchTab({
  		url:'../index/index'
  	})
  }
})