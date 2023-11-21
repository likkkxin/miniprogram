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
    total: 0,
    isLoading: false

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
  getshopList(cb) {
    //加载提示
    wx.showLoading({
      title: '信息加载中',
    })
    this.setData({
        isLoading: true
      }),

      wx.request({
        url: `https://applet-base-api-t.itheima.net/categories/${this.data.qury.id}/shops`,
        method: "GET",
        data: {
          _page: this.data.page,
          _limit: this.data.pagesize
        },
        success: (res) => {

          this.setData({
            shoplist: [...this.data.shoplist, ...res.data],
            total: res.header["X-Total-Count"] - 0

          })

        },

        complete: () => {
          this.setData({
              isLoading: false
            }),

            wx.hideLoading()
            cb&&cb()
        }
      }, )
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
    this.setData({
      shoplist:[],
      page:1,
      total:0
    })
    this.getshopList(()=>{
      wx.stopPullDownRefresh()
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.page*this.data.pagesize>=this.data.total) {
      return wx.showToast({
        title: '没更多了',
        icon:"none"
      })
    }
    if (this.data.isLoading) return
    this.setData({
      page: this.data.page + 1
    })
   
    this.getshopList()

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})