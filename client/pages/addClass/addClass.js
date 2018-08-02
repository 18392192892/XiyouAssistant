// pages/addClass/addClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList: [
      {
        name: '地点',
        icon: '../../assets/images/addClass/position.png',
        placeholder: '请输入地点'
      },
      {
        name: '周数',
        icon: '../../assets/images/addClass/weeks.png',
        pickList: [
          '单周', '双周', '1-25周'
        ],
        pickChoice: '单周'
      },
      {
        name: '节数',
        icon: '../../assets/images/addClass/times.png',
        pickList: [
          ['周一', '周二', '周三', '周四', '周五'],
          ['第1节', '第2节', '第3节', '第4节', '第5节', '第6节', '第7节', '第8节', '第9节', '第10节', '第11节', '第12节'],
          ['到1节', '到2节', '到3节', '到4节', '到5节', '到6节', '到7节', '到8节', '到9节', '到10节', '到11节', '到12节']
        ],
        pickChoice: 'ssss'
      },
      {
        name: '老师',
        icon: '../../assets/images/addClass/teacher.png',
        placeholder: '未填写'
      }
    ]
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