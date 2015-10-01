
// var barData = [ 05,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,
// 				90,05, 25, 10, 70, 75, 70, 45, 65, 85, 15, 95, 40, 30, 100, 50,
// 				85, 30, 60, 35, 80, 05, 55, 35, 20, 55, 100, 40, 10, 90, 15, 65,
// 				20, 45, 75, 95, 80, 50, 25, 60 ];
var barData = [];

(function(){
    for (var i=0; i < (Math.random() * 1000); i++){
        barData.push( Math.random() * 100);
    }
    console.log(i);
})();

(function () {

    var height = 400,
        width = 600,
        barWidth = 50,
        barOffset = 0;

    var colors = d3.scale.linear()
        .domain([0, d3.max(barData)])
        .domain([ 0, d3.max(barData) * 0.2, d3.max(barData) * 0.4,
            d3.max(barData) * 0.6, d3.max(barData) * 0.8, d3.max(barData) ])
        .range(['#f3dc42', '#fcb322', '#f89f1c', '#fe7f4d', '#e9624d', '#b7382d'])

    var yScale = d3.scale.linear()
        .domain([0, d3.max(barData)])
        .range([0, height ])

    var xScale = d3.scale.ordinal()
        .domain(d3.range(0, barData.length))
        .rangeBands([0, width ])

    d3.select('#graph1').append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', 'rgba(100, 50, 125, 0.3)' )
        .selectAll('rect').data(barData)
        .enter().append('rect')
        .style('fill', colors)
        .attr('width', xScale.rangeBand() - barOffset)
        .attr('height', function(d) {
            return yScale(d);
        })
        .attr('x', function(d,i) {
            return xScale(i) + barOffset/2  ;
        })
        .attr('y', function(d) {
            return height - yScale(d);
        })
})();

(function () {

    var height = 400,
        width = 600,
        barWidth = 50,
        barOffset = 0;

    var colors = d3.scale.linear()
        .domain([0, barData.length])
        .range(['#FF0000', '#0000FF'])

    var yScale = d3.scale.linear()
        .domain([0, d3.max(barData)])
        .range([0, height ])

    var xScale = d3.scale.ordinal()
        .domain(d3.range(0, barData.length))
        .rangeBands([0, width ])

    d3.select('#graph2').append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', 'rgba(100, 50, 125, 0.3)' )
        .selectAll('rect').data(barData)
        .enter().append('rect')
        .style('fill', function(d,i) {
            return colors(i);
        })
        .attr('width', xScale.rangeBand() - barOffset)
        .attr('height', function(d) {
            return yScale(d);
        })
        .attr('x', function(d,i) {
            return xScale(i) + barOffset/2  ;
        })
        .attr('y', function(d) {
            return height - yScale(d);
        })
})();

(function () {

    var height = 400,
        width = 600,
        barWidth = 50,
        barOffset = 0;

    var colors = d3.scale.linear()
        .domain([ 0, barData.length * 0.2, barData.length * 0.4,
            barData.length * 0.6, barData.length * 0.8, barData.length ])
        .range(['#f3dc42', '#fcb322', '#f89f1c', '#fe7f4d', '#e9624d', '#b7382d'])

    var yScale = d3.scale.linear()
        .domain([0, d3.max(barData)])
        .range([0, height ])

    var xScale = d3.scale.ordinal()
        .domain(d3.range(0, barData.length))
        .rangeBands([0, width ])

    d3.select('#graph3').append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', 'rgba(100, 50, 125, 0.3)' )
        .selectAll('rect').data(barData)
        .enter().append('rect')
        .style('fill', function(d,i) {
            return colors(i);
        })
        .attr('width', xScale.rangeBand() - barOffset)
        .attr('height', function(d) {
            return yScale(d);
        })
        .attr('x', function(d,i) {
            return xScale(i) + barOffset/2  ;
        })
        .attr('y', function(d) {
            return height - yScale(d);
        })
})();

(function(){

    var w = 40,
        h = 300;

    var svg = d3.select("#graph4").append("svg:svg")
        .attr("width", w)
        .attr("height", h);

    var gradient = svg.append("svg:defs")
        .append("svg:linearGradient")
        .attr("id", "gradient")
        .attr("y1", "100%")
        .attr("y2", "0%")
        .attr("spreadMethod", "pad");

    gradient.append("svg:stop")
        .attr("offset", "50%")
        .attr("stop-color", "#0079c0")
        .attr("stop-opacity",0.5);

    gradient.append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", "#FFFFFF")
        .attr("stop-opacity",0.1);


    svg.append("svg:rect")
        .attr("width", w)
        .attr("height", h)
        .style("fill", "url(#gradient)");
})()
