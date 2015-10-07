
var CARDS = CARDS || [];

$(document).ready( function() {

    var pub;


    var barData = [];
    var tempColor;

    d3.json('scripts/testdata.json', function(data){

        for (values in data) {
            barData.push(data[values].value)
        }

    })


    GetData();
    UpdateGraph();

    $("input[name='data-type']").on("change", function() {
        var foo = $("input[name='data-type']:checked").val();

        if(foo == 'data-type-ordered'){
            SetDataOrdered();
        } else {
            SetDataRandom();
        }

        UpdateGraph1(); //MakeGraph1();
    })

    function SetDataOrdered() {


        console.log('before rehash, d3.max : ' + d3.max(barData));

        barData = [ 0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,
                    95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5,0];

        console.log('after rehash, d3.max : ' + d3.max(barData));
    }

    function SetDataRandom() {

        console.log('before rehash, d3.max : ' + d3.max(barData));

        //for (var i=0; i < 41; i++){
        for (var i=0; i < (Math.random() * 1000); i++){
            barData.push( Math.round(( Math.random() * 1000)));

        }

        barData.shuffle();

        console.log('after rehash, d3.max : ' + d3.max(barData));
    }

    function UpdateGraph1() {

        console.log('UpdateGraph1 function executed with : ' + barData)

        var height = 400,
            width = 600,
            barWidth = 50,
            barOffset = 0;

        var colors = d3.scale.linear()
            .domain([ 0, d3.max(barData)])
            .range(['#FF0000', '#0000FF'])  //'#f3dc42', '#fcb322', '#f89f1c', '#fe7f4d', '#e9624d', '#b7382d'])
            .domain([ 0, d3.max(barData) * 0.2, d3.max(barData) * 0.4,
                d3.max(barData) * 0.6, d3.max(barData) * 0.8, d3.max(barData) ])
            .range(['#f3dc42', '#fcb322', '#f89f1c', '#fe7f4d', '#e9624d', '#b7382d'])

        var yScale = d3.scale.linear()
            .domain([0, d3.max(barData)])
            .range([0, height ])

        var xScale = d3.scale.ordinal()
            .domain(d3.range(0, barData.length))
            .rangeBands([0, width ])

        var bars = d3.select('#graph1')
            .selectAll('rect')
                .data(barData)

        bars.enter().append('rect')
            .data(barData)

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

        bars.on('mouseover', function(d) {
            tempColor = bars.style.fill;
            d3.select(this)
                .style('opacity',.5)
                .style('fill', 'orange')
        })

        bars.on('mouseout', function(d) {
            d3.select(this)
                .style('opacity', 1)
                .style('fill', tempColor)
            })

        bars.on('click', function(d) {
            console.log(d);
            d3.select(this)
                .style('opacity', 1)
                .style('fill', tempColor)
        })

        bars
            .text(function (d) {return d;});

// exit selection
        bars
            .exit().remove();


    }






    CARDS.barData = this.barData;
    CARDS.tempColor = this.tempColor;

    return pub;

})