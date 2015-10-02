
$(document).ready( function() {
    $("input[name='data-type']").on("change", function() {
        var foo = $("input[name='data-type']:checked").val();
        if(foo == 'data-type-ordered'){
            SetDataOrdered();
        } else {
            SetDataRandom();
        }
        UpdateGraph1(); //MakeGraph1();
    })
})

var barData = [];

(function() {
    SetDataOrdered();
    MakeGraph1();
})();

function SetDataOrdered() {

    barData = [];

    barData = [ 0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,
                95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5,0];
}

function SetDataRandom() {

    barData = [];

    console.log('before rehash : ' + barData);

    for (var i=0; i < 41; i++){
    //for (var i=0; i < (Math.random() * 1000); i++){
        barData.push( Math.random() * 1000);
    }
    console.log('after rehash : ' + barData);
}

function UpdateGraph1() {

    d3.select('#graph1').data(barData);

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

    d3.select('#graph1').data(barData);

    var svg = d3.select('#graph1').transition();

    svg.selectAll('rect')
        .duration(750)
        .style('fill', colors)
        .attr('width', xScale.rangeBand() - barOffset)
        .attr('height', function(d) {
            console.log(yScale(d));
            return yScale(d);
        })
        .attr('x', function(d,i) {
            return xScale(i) + barOffset/2  ;
        })
        .attr('y', function(d) {
            return height - yScale(d);
        })
}

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
