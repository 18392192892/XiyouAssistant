Page({
	data: {
		//课表信息
		classTable: [
			{
				name: '上午：',
				class: [
					{
						time: '1-2',
						content: 'FZ203 C语言程序设计'
					},
					{
						time: '3-4',
						content: 'FZ203 操作系统'
					}
				]
			},
			{
				name: '下午：',
				class: [
					{
						time: '5-6',
						content: 'FZ203 高等数学'
					},
					{
						time: '7-8',
						content: '无'
					}
				]
			}
		],
		//分数查询
		queryGrade: [
			{
				goto: '../cet46Query/cet46Query',
				name: '四 / 六级成绩查询'
			},
			{
				goto: '../gradeQuery/gradeQuery',
				name: '期末考试成绩 / 绩点查询'
			},
			{
				goto: '../ncreQuery/ncreQuery',
				name: '计算机等级考试成绩查询'
			}
		],
		//课程查询
		queryClass: [
			{
				goto: '../classQuery/classQuery',
				name: '课表查询'
			},
			{
				goto: '../classQuery/classQuery',
				name: '无课教室查询'
			}
		]
	},

	onShow () {
		// this.getAttendInfo();
	},

	//获取考勤信息数据
	getAttendInfo () {
		console.log(this.data)
		wx.request({
      url: 'http://jwkq.xupt.edu.cn:8080/User/GetStuClass',
      method: 'POST',
      header: {
      	'Cookie': 'ASP.NET_SessionId=noxhbwdbdjeoa4t4uliwwgat; .ASPXAUTH=5C127EBBD75249A11A5A2902AB893C5D0FF4E42E82F1AFFB0AEB1EA89325261B6AA1784182180ECB72E62EB98B77B5B11D2A4AA1F132DE19102B0D735AFC0E98FA87E2AEFB896FEB6CF3A813123FCD3D'
      },
      dataType: 'json',
      data: {
        // WaterDate: '2018-07-24a2018-07-24',
        // Status: '1',
        // Flag: '1a2a3',
        // page: '1',
        // rows: '10'
        'term_no': '2017-2018-2',
				'week': '1',
				'json': 'true',
      },
      success: function (res) {
        if (res.data.code == 0) {
          console.log(res);
        } else {
          console.log(res);
        }
      }
    });
	}
})