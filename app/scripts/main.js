
var CARDS = CARDS || [];

CARDS.Main = function() {

    var pub = {};
    var barData = [];

    function init() {

        datachange('scripts/testdata.json');

    }

    function tracedata(barData){
        console.log(barData);
        pub.barData = barData;
    }

    function datachange(src){

        d3.json(src, tracedata);

    }

    pub.init = init();
    pub.barData = barData;

    return pub;

}

( document.ready = function() {
    CARDS.Main.init;
});