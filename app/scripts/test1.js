'use strict';

//scripted by pelowok 10/7/2015

var CARDS = CARDS || [];

// We define a function that takes one parameter named $.
CARDS.Test1 = (function($){

    var pub = {};
    var bardata = [];

    var test = function () {
        console.log('CARDS.Test1.main fired');

        var pathToData = 'scripts/testdata.json';

        d3.json(pathToData,function(data) {

            console.log('jumpy : ' + data);

           data.forEach(function(d, i){
               bardata.push(d[i].value);
               console.log('froggy : ' + d[i]);
           })

        });

    };

    pub.Test = test;
    pub.BarData = bardata;

    return pub;

// Here we immediately call the function with jQuery as the parameter.
}($));
