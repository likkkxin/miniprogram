// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qury: {},
    shoplist: [],
    page: 1,
    pagesize: 10,
    total: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
        qury: options
      }),
      this.getshopList()
  },
  getshopList() {
    wx.request({
      url: `https://applet-base-api-t.itheima.net/categories/1/shops`,
      method: "GET",
      data: {
        _page: this.data.page,
        _limit: this.data.pagesize
      },
      success: (res) => {
        
        this.setData({
          shoplist:[...this.data.shoplist,...res.data],
          total:res.header["X-Total-Count"]-0
          
        })

      },
    },
    )
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.qury.title,
    })
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