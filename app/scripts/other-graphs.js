/**
 * Created by pelowok on 10/7/15.
 */

function MakeGraph1() {

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

    var tempColor;



    d3.select('#graph1').append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#003d60' )
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

function MakeGraph2 () {

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
        .style('background', '#003d60' )
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
}

function MakeGraph3() {

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
        .style('background', '#003d60' )
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
}

function MakeGraph4(){

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
}