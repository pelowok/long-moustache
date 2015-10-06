'use strict';
/**
 * Created by zp on 10/6/2015.
 */

$(document).ready( function() {

    var mydata = testdata.map(function (series) {
        series.values = series.values.map(function (d) {
            return {x: d[0], y: d[1]}
        });
        return series;
    });

    var chart;
    nv.addGraph(function () {
        chart = nv.models.linePlusBarChart()
            .margin({top: 50, right: 60, bottom: 30, left: 70})
            .legendLeftAxisHint(' (left axis)')
            .legendRightAxisHint(' (right axis)')
            .color(d3.scale.linear()
                .domain([ 0, d3.max(mydata[0]) * 0.2, d3.max(mydata[0]) * 0.4,
                    d3.max(mydata[0]) * 0.6, d3.max(mydata[0]) * 0.8, d3.max(mydata[0]) ])
                .range(['#f3dc42', '#fcb322', '#f89f1c', '#fe7f4d', '#e9624d', '#b7382d'])

            //.color(d3.scale.category10().range());

        );
        chart.xAxis.tickFormat(function (d) {
            return d3.time.format('%b %y')(new Date(d))
        })
            .showMaxMin(false);
        chart.y1Axis.tickFormat(function (d) {
            return d3.format(',f')(d) + ' days'
        });
        chart.y2Axis.tickFormat(function (d) {
            return d + '%'
        });
        chart.bars.forceY([0]).padData(false);
        chart.lines.forceY([0, 100]).padData(false);
        chart.x2Axis.tickFormat(function (d) {
            return d3.time.format('%b %y')(new Date(d))
        }).showMaxMin(false);
        d3.select('#chart1 svg')
            .datum(mydata)
            .transition()
            .duration(0)
            .call(chart);

        nv.utils.windowResize(chart.update);

        chart.dispatch.on('stateChange', function (e) {
            nv.log('New State:', JSON.stringify(e));
        });

        chart.brushExtent([1.411236e+12, 1.4454e+12]);

        chart.update();

        return chart;
    });

});
