// pages/attendQuery/attendQuery.js

Page({
  data: {
    showStartTime: '',
    showEndTime: '',
    startLimitTime: '',
    endLimitTime: '',

    className: 'C语言程序设计',
    queryResult: [
      {
        day: '2018.06.06',
        weekday: '星期三',
        time: '1-2',
        place: 'FZ205',
        attend: '正常',
        color: '#68CD29',
        show: 'hidden'
      },
      {
        day: '2018.06.06',
        weekday: '星期三',
        time: '1-2',
        place: 'FZ205',
        attend: '正常',
        color: '#68CD29',
        show: 'hidden'
      },
      {
        day: '2018.06.06',
        weekday: '星期三',
        time: '1-2',
        place: 'FZ205',
        attend: '缺勤',
        color: '#FF322D',
        show: 'visible'
      },
      {
        day: '2018.06.06',
        weekday: '星期三',
        time: '1-2',
        place: 'FZ205',
        attend: '正常',
        color: '#68CD29',
        show: 'hidden'
      },
      {
        day: '2018.06.06',
        weekday: '星期三',
        time: '1-2',
        place: 'FZ205',
        attend: '正常',
        color: '#68CD29',
        show: 'hidden'
      },
      {
        day: '2018.06.06',
        weekday: '星期三',
        time: '1-2',
        place: 'FZ205',
        attend: '正常',
        color: '#68CD29',
        show: 'hidden'
      },
      {
        day: '2018.06.06',
        weekday: '星期三',
        time: '1-2',
        place: 'FZ205',
        attend: '正常',
        color: '#68CD29',
        show: 'hidden'
      },
    ],
    classList: ['C语言程序设计', 'C语言程序设计', 'C语言程序设计', 'C语言程序设计', 'C语言程序设计']
  },

  //给时间设置初始值
  _beginTime () {
    let _Date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    let _dataLimit = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    this.setData({
      showStartTime: _Date,
      showEndTime: _Date,
      startLimitTime: _dataLimit,
      endLimitTime: _dataLimit
    })
  },

  //改变开始时间
  _changeStartTime (e) {
    this.setData({
      showStartTime: e.detail.value,
      endLimitTime: e.detail.value
    })
  },
  //改变结束时间
  _changeEndTime (e) {
    this.setData({
      showEndTime: e.detail.value,
      startLimitTime: e.detail.value
    })
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
    this._beginTime();
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