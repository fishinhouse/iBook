Page({
	data: {

	},
	onLoad: function() {
		console.log('==> open get_user_fail page.')
	},
	success: function(res) {
		console.log("==> userInfo:"+res.userInfo) 
		wx.switchTab({
            url: '../index/index'
        })		
	}
})