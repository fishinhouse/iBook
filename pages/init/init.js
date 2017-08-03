var app = getApp()
Page({
	onLoad: function(e) {
		console.log("==> pages/init/init")
		wx.getSetting({
			 success(res) {
			 	console.log("==> init authSetting['scope.userInfo']:" + res.authSetting['scope.userInfo'])
        		if (res.authSetting['scope.userInfo']) {
					wx.switchTab({
						url: '../index/index'
					})
				}else {
					wx.redirectTo({
						url: '../guide/guide'
					})
				}
			}
		})
	}
})