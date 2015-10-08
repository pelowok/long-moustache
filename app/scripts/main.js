
var CARDS = CARDS || [];

CARDS.Main = function() {

    var pub = {};
    var barData = [];

    var barDataMax;
    var barDataMin;

    function init() {

        d3.json('scripts/testdata.json', function (error, json) {

            if (error) return console.warn(error);
            barData = json;

            setMinMax(barData);

        });

    })

    function setMinMax(myData){

        myData.forEach(function(d, i) {

            barDataMax = d3.max(d.values);
            barDataMin = d3.min(d.values);

            console.log(myData);
            console.log(barDataMax);
            console.log(barDataMin);

        })

    };

    pub.init = init();
    pub.setMinMax = setMinMax(["index", "wut"]);

    pub.barData = barData;
    pub.barDataMin = barDataMax;
    pub.barDataMin = barDataMin;

    return pub;

}

( document.ready = function() {
    CARDS.Main.init;

});