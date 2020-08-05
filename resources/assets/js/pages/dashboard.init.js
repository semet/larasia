/*
Template Name: Nazox - Responsive Bootstrap 4 Admin Dashboard
Author: Themesdesign
Contact: themesdesign.in@gmail.com
File: Dashboard Init Js File
*/

// Line-column chart

var options = {
    series: [{
        name: '2020',
        type: 'column',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }, {
        name: '2019',
        type: 'line',
        data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16]
    }],
    chart: {
        height: 280,
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    stroke: {
        width: [0, 3],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '20%',
        },
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },
    colors: ['#5664d2', '#1cbb8c'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

var chart = new ApexCharts(document.querySelector("#line-column-chart"), options);
chart.render();

// donut chart

var options = {
    series: [42, 26, 15],
    chart: {
        height: 230,
        type: 'donut',
    },
    labels: ["Product A", "Product B", "Product C"],
    plotOptions: {
        pie: {
            donut: {
                size: '75%'
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    colors: ['#5664d2', '#1cbb8c', '#eeb902'],

};

var chart = new ApexCharts(document.querySelector("#donut-chart"), options);
chart.render();


// Radialchart 1

var radialoptions = {
    series: [72],
    chart: {
        type: 'radialBar',
        wight: 60,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#5664d2'],
    stroke: {
        lineCap: 'round'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '70%'
            },
            track: {
                margin: 0,
            },

            dataLabels: {
                show: false
            }
        }
    }
};

var radialchart = new ApexCharts(document.querySelector("#radialchart-1"), radialoptions);
radialchart.render();


// Radialchart 2

var radialoptions = {
    series: [65],
    chart: {
        type: 'radialBar',
        wight: 60,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#1cbb8c'],
    stroke: {
        lineCap: 'round'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '70%'
            },
            track: {
                margin: 0,
            },

            dataLabels: {
                show: false
            }
        }
    }
};

var radialchart = new ApexCharts(document.querySelector("#radialchart-2"), radialoptions);
radialchart.render();


// sparkline chart

var options = {
    series: [{
        data: [23, 32, 27, 38, 27, 32, 27, 34, 26, 31, 28]
    }],
    chart: {
        type: 'line',
        width: 80,
        height: 35,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        width: [3],
        curve: 'smooth'
    },
    colors: ['#5664d2'],

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#spak-chart1"), options);
chart.render();


var options = {
    series: [{
        data: [24, 62, 42, 84, 63, 25, 44, 46, 54, 28, 54]
    }],
    chart: {
        type: 'line',
        width: 80,
        height: 35,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        width: [3],
        curve: 'smooth'
    },
    colors: ['#5664d2'],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#spak-chart2"), options);
chart.render();


var options = {
    series: [{
        data: [42, 31, 42, 34, 46, 38, 44, 36, 42, 32, 54]
    }],
    chart: {
        type: 'line',
        width: 80,
        height: 35,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        width: [3],
        curve: 'smooth'
    },
    colors: ['#5664d2'],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#spak-chart3"), options);
chart.render();

// vectormap

$('#usa-vectormap').vectorMap({
    map: 'us_merc_en',
    backgroundColor: 'transparent',
    regionStyle: {
        initial: {
            fill: '#e8ecf4',
            stroke: '#74788d',
            'stroke-width': 1,
            "stroke-opacity": 0.4,
        }
    },

});



// datatable
$(document).ready(function () {
    $('.datatable').DataTable({
        "lengthMenu": [5, 10, 25, 50],
        "pageLength": 5,
        "columns": [
            {'orderable': false},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': false}
        ],
        "order": [[ 1, "asc" ]],
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });
});