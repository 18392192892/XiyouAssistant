// pages/classQuery/classQuery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: [
      {
        weekday: '周一',
        day: '23'
      },
      {
        weekday: '周二',
        day: '24'
      },
      {
        weekday: '周三',
        day: '25'
      },
      {
        weekday: '周四',
        day: '26'
      },
      {
        weekday: '周五',
        day: '27'
      }
    ],
    classNumber: [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
    ],
    weeknum: [
      '1', '2', '3', '4', '5'
    ],

    showSetDate: false,
    termList: [
      '大一第1学期','大一第2学期','大二第1学期','大二第2学期'
    ],
    termChoice: '大一第1学期',
    weekList: [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'
    ],
    weekChoice: '第1周'

  },


  _setDate () {
      // console.log(this.data.showSetDate);
    this.setData({
      showSetDate: !this.data.showSetDate
    });
    console.log(this.data.showSetDate);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})