// pages/ncre2Query/ncre2Query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickerArray: [
      {
        name: '时间',
        icon: '../../assets/images/ncreQuery/time.png',
        show: '2018-09',
        showList: [
          '2018-09', '2018-03'
        ]
      },
      {
        name: '类型',
        icon: '../../assets/images/ncreQuery/type.png',
        show: '16一级计算机基础及MS Of',
        showList: [
          '16一级计算机基础及MS Of', '16一级计算机基础及MS Of', '16一级计算机基础及MS Of'
        ]
      }
    ],
    inputArray: [
      {
        name: '姓名',
        icon: '../../assets/images/ncreQuery/name.png',
        placeholder: '请输入考生姓名'
      },
      {
        name: '准考证号',
        icon: '../../assets/images/ncreQuery/number.png',
        placeholder: '请输入考生准考证号'
      }
    ],
    isLoading: false,
    isResult: false,
    result: '通过',
    certificateID: '111111ddddddddddddddddddddddddddd1111'
  },

  _doQuery () {
    this.setData({
      isLoading: !this.data.isLoading,
    });
    let time = setTimeout(() => {
      this.setData({
        isLoading: !this.data.isLoading,
        isResult: !this.data.isResult,
      });
    }, 1000)
  },

  _backQuery () {
    this.setData({
      isResult: !this.data.isResult,
    });
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