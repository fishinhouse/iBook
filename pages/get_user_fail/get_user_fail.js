Page({
	data: {

	},
	onLoad: function() {
		console.log('==> open get_user_fail page.')
	},
	success: function(res) {
		console.log(res.userInfo) 
		wx.redirectTo({
            url: '../index/index'
        })		
	}
})