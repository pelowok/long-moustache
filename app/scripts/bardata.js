'use strict';

//scripted by pelowok 10/7/2015

var CARDS = CARDS || [];

CARDS.BarData = (function($){

    var pub = {};
    var barData = [];

    var init = function () {
        console.log('CARDS.BarData.init fired');
        var pathToData = 'scripts/testdata.json';
        initializeBarData(pathToData);
    };

    var initializeBarData = function (pathToBarData) {
        d3.json(pathToBarData, updateBarData);
    };

    var updateBarData = function (barData) {
        pub.barData = barData;
        console.log('barData updated : ' + barData);
        CARDS.Visualization.MakeGraph();
    };

    pub.init = init;
    pub.barData = barData;
    pub.initializeBarData = initializeBarData;

    return pub;

}($));

$(function() {

    console.log("bardata.js document.ready fired");
    CARDS.BarData.init();

});