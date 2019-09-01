//index.js
//获取应用实例
const app = getApp()

//Page Object
Page({
    data: {
      cate: []
    },
    //options(Object)
    onLoad: function(options){
      wx.request({
        url: 'https://locally.uieee.com/categories',
        header: {
          'Content-Type': 'json'
        },
        success: (res) => {
          if (!res.statusCode === 200) {
            return false
          }
          this.setData({
            cate: res.data
          })
        }
      })
    },
    onReady: function(){
        
    },
    onShow: function(){
        
    },
    onHide: function(){

    },
    onUnload: function(){

    },
    onPullDownRefresh: function(){

    },
    onReachBottom: function(){

    },
    onShareAppMessage: function(){

    },
    onPageScroll: function(){

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item){

    }
})
