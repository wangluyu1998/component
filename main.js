$(function(){
  var myChart = echarts.init($('#main')[0]);

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
});
