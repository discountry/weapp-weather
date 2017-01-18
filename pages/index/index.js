//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    weather: {}
  },
  //事件处理函数
  bindViewTap: function() {
    this.getLocation()
  },
  getLocation: function () {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.request({
          //change key to your own
          url: 'https://api.thinkpage.cn/v3/weather/now.json?key=xxxxxx&location='+latitude':'+longitude, 
          success: function(res) {
            console.log(res.data.results[0])
            that.setData({
              weather:res.data.results[0]
            })
          }
        })
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    //var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo((userInfo) => {
      //更新数据
      this.setData({
        userInfo:userInfo
      })
    })
    //that.getLocation()
  }
})
