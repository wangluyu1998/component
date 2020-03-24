$(function(){
  var myChart = echarts.init($('#main')[0]);
  var e = $('.main');

  var xData = [2000,2005,2010,2015,2020],
      yData = [0,2,4,6,8,10];
  
  var option = {
    title: {
      text: 'JavaScript语言排名变化'
    },
    tooltip:{},
    xAxis: {
      data:xData
    },
    yAxis: {
      type:'value',
      data:yData
    },
    series: [{
      name:'排名',
      type: 'line',
      data: [6,9,8,8,7]
    }]
  };
  
  myChart.setOption(option);

  return new Handsontable(e.get(0),{
    data:[
      ["Java","1","降","-0.01%"],
      ["C","2","升","+2.44%"],
      ["Python","2","升","+1.41%"],
      ["C++","4","降","-2.58%"],
      ["C#","5","升","+2.07%"],
      ["Visual Basic.NET","6","降","-1.17%"],
      ["JavaScript","7","降","-0.85%"]
    ],
    colWidths:214,
    rowHeights:35,
    className: "htCenter htMiddle",
    contextMenu:!0,
    manualRowResize:!0,
    manualColumnResize:!0,
    rowHeaders:0,
    colHeaders:["语言名称","排名","升或降","变化幅度",]
  })

});
