// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存放轮播图数据
    swiperlist: [],
    //存放九宫格数据
    gridlist: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getswiperList()
    this.getGridlist()
  },
  //获取轮播图数据
  getswiperList() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/slides',
      method: "GET",
      success: (res) => {
        console.log(res)
        this.setData({
          swiperlist: res.data
        })
      }
    })
  },
  //获取九宫格数据
  getGridlist() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/categories',
      method: "GET",
      success: (res) => {
        console.log(res)
        this.setData({
          gridlist: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})