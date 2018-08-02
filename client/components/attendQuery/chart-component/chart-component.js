// components/attendQuery/chart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //统计图信息
    chartInfo: [
      {
        percent: 0.4,
        color: '#68CD29',
        name: '正常',
        chartBeginPosition: 0,
        chartEndPosition: 0.4,
        nameBeginPositionY: 128,
      },
      {
        percent: 0.2,
        color: '#FFD801',
        name: '请假',
        chartBeginPosition: 0.4,
        chartEndPosition: 0.6,
        nameBeginPositionY: 150,
      },
      {
        percent: 0.3,
        color: '#F57D02',
        name: '迟到',
        chartBeginPosition: 0.6,
        chartEndPosition: 0.9,
        nameBeginPositionY: 172,
      },
      {
        percent: 0.1,
        color: '#FF322D',
        name: '缺勤',
        chartBeginPosition: 0.9,
        chartEndPosition: 1,
        nameBeginPositionY: 194,
      },
    ],

  },

  /**
   * 组件的方法列表
   */
  methods: {
  
    _getData (context) {
      this.data.chartInfo.forEach((item) => {
        this._drawSector(context, item.chartBeginPosition * 2 * Math.PI, item.chartEndPosition * 2 * Math.PI, item.color);
        this._drawSectorInfo(context, item.nameBeginPositionY, item.name, item.color);
      });
    },



    canvasInit () {
      const context = wx.createCanvasContext('chartCanvas', this);
      this._getData(context);
      this._drawMiddleCercle(context);
      context.draw();
    },

    _drawSector (context, startPosition, endPosition, color) {
      context.beginPath();
      context.moveTo(120, 120);
      context.arc(120, 120, 100, startPosition, endPosition, false);
      context.setFillStyle(color);
      context.fill();
      context.closePath();
    },

    _drawMiddleCercle (context) {
      context.beginPath();
      context.moveTo(120, 120);
      context.arc(120, 120, 40, 0, 2 * Math.PI, false);
      context.setFillStyle('white');
      context.fill();
      context.closePath();

      context.beginPath();
      context.moveTo(120, 120);
      context.arc(120, 120, 55, 0, 2 * Math.PI, false);
      context.setFillStyle('rgba(255, 255, 255, 0.4)');
      context.fill();
      context.closePath();
    },

    _drawSectorInfo (context, nameBeginPositionY, name, color) {
      context.beginPath();
      context.setFillStyle(color);
      context.moveTo(250, 150);
      context.fillRect(250, nameBeginPositionY, 25, 12)
      context.closePath();

      context.beginPath();
      context.setFillStyle('black');
      context.setFontSize(12);
      context.moveTo(285, 150);
      context.fillText(name, 285, nameBeginPositionY + 10);
      context.closePath();
    }
  },

  // canvasIdErrorCallback: function (e) {
  //   console.error(e.detail.errMsg)
  // },

  attached () {
    // this.ss();

  },

  ready () {
    this.canvasInit();
  }

})
