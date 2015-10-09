'use strict';

/**
 * Created by zp on 10/8/2015.
 */

var CARDS = CARDS || [];

CARDS.Visualization = (function($){

    var pub = {};

    var dat;

    var init = function () {
        console.log('CARDS.Visualization.init fired');

    };

    var makeGraph = function() {

        dat = CARDS.BarData.barData;
        console.warn( dat );

        var height = 300;
        var width = 300;
        var barOffset = 1;
        var tempColor;

        var colors = d3.scale.linear()
            .domain([0, dat[0].values.length])
            .range(['#FF0000', '#0000FF'])

        var yScale = d3.scale.linear()
            .domain([0, d3.max(dat[0].values)])
            .range([0, height ])

        var xScale = d3.scale.ordinal()
            .domain(d3.range(0, dat[1].values.length))
            .rangeBands([0, width ])

        var tempColor;

        d3.select('#graph1').append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background', '#003d60' )
            .selectAll('rect').data(dat[0])
            .enter().append('rect')
            .style('fill', colors)
            .attr('width', xScale.rangeBand() - barOffset)
            .attr('height', function(dat) {
                var doo = d;
                return yScale(d);
            })
            .attr('x', function(d,i) {
                return xScale(i) + barOffset/2  ;
            })
            .attr('y', function(d) {
                return height - yScale(d);
            })

            .on('mouseover', function(d) {
                tempColor = this.style.fill;
                d3.select(this)
                    .style('opacity',.5)
                    .style('fill', 'orange')
            })

            .on('mouseout', function(d) {
                d3.select(this)
                    .style('opacity', 1)
                    .style('fill', tempColor)
            })

            .on('click', function(d) {
                console.log(d);
                d3.select(this)
                    .style('opacity', 1)
                    .style('fill', tempColor)
            })

    }

    pub.init = init;
    pub.dat = dat;
    pub.MakeGraph = makeGraph;

    return pub;

}($));

$(function() {

    console.log("visualization.js document.ready fired");
    CARDS.Visualization.init();

});