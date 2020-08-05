/*
Template Name: Nazox - Responsive Bootstrap 4 Admin Dashboard
Author: Themesdesign
Contact: themesdesign.in@gmail.com
File: Sparkline chart Init
*/

$(document).ready(function() {
    var SparklineCharts = function() {
  
      $('#sparkline1').sparkline([20, 40, 30], {
        type: 'pie',
        height: '200',
        resize: true,
        sliceColors: ['#1cbb8c', '#5664d2', '#e9ecef']
      });
  
      $("#sparkline2").sparkline([5,6,2,8,9,4,7,10,11,12,10,4,7,10], {
        type: 'bar',
        height: '200',
        barWidth: 10,
        barSpacing: 7,
        barColor: '#1cbb8c'
      });
  
      $('#sparkline3').sparkline([5, 6, 2, 9, 4, 7, 10, 12,4,7,10], {
        type: 'bar',
        height: '200',
        barWidth: '10',
        resize: true,
        barSpacing: '7',
        barColor: '#5664d2'
      });
      $('#sparkline3').sparkline([5, 6, 2, 9, 4, 7, 10, 12,4,7,10], {
        type: 'line',
        height: '200',
        lineColor: '#fcb92c',
        fillColor: 'transparent',
        composite: true,
        lineWidth: 2,
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)'
      });
  
      $("#sparkline4").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
        type: 'line',
        width: '100%',
        height: '200',
        lineColor: '#5664d2',
        fillColor: 'transparent',
        spotColor: '#5664d2',
        lineWidth: 2,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined
      });
      $('#sparkline5').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
        type: 'line',
        width: '100%',
        height: '200',
        chartRangeMax: 50,
        resize: true,
        lineColor: '#5664d2',
        fillColor: 'rgba(86, 100, 210, 0.3)',
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)',
      });
  
      $('#sparkline5').sparkline([0, 13, 10, 14, 15, 10, 18, 20, 0], {
        type: 'line',
        width: '100%',
        height: '200',
        chartRangeMax: 40,
        lineColor: '#1cbb8c',
        fillColor: 'rgba(28, 187, 140, 0.3)',
        composite: true,
        resize: true,
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)',
      });
  
      $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
        type: 'discrete',
        width: '280',
        height: '200',
        lineColor: '#ffffff'
      });
  
      $('#sparkline7').sparkline([10,12,12,9,7], {
        type: 'bullet',
        width: '280',
        height: '80',
        targetColor: '#1cbb8c',
        performanceColor: '#ff3d60'
      });
      $('#sparkline8').sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100], {
        type: 'box',
        width: '280',
        height: '80',
        boxLineColor: '#1cbb8c',
        boxFillColor: '#f1f1f1',
        whiskerColor: '#1cbb8c',
        outlierLineColor: '#1cbb8c',
        medianColor: '#1cbb8c',
        targetColor: '#1cbb8c'
      });
      $('#sparkline9').sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
        height: '80',
        width: '100%',
        type: 'tristate',
        posBarColor: '#5664d2',
        negBarColor: '#1cbb8c',
        zeroBarColor: '#ff3d60',
        barWidth: 8,
        barSpacing: 3,
        zeroAxis: false
      });
  
  
  
    }
    var sparkResize;
  
    $(window).resize(function(e) {
      clearTimeout(sparkResize);
      sparkResize = setTimeout(SparklineCharts, 500);
    });
    SparklineCharts();
  
  });