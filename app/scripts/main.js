'use strict';

//scripted by pelowok 10/7/2015

var CARDS = CARDS || [];

// We define a function that takes one parameter named $.
CARDS.Main = (function($){

    // declare a variable that will be returned when the function runs.
    // This pub variable will be attached as a property to the prototype
    // named PrototypeName in: var PrototypeName = $(function){...});
    // After that, the pub.properties are available as PrototypeName.property
    var pub = {};

    var init = function () {
        console.log('CARDS.Main.init fired');

        var pathToData = 'scripts/testdata.json';
        //CARDS.BarData.initializeBarData(pathToData);
        CARDS.Test1.Test;
    };

    pub.init = init;

    return pub;

// Here we immediately call the function with jQuery as the parameter.
}($));

// Shorthand for: $( document ).ready(function(){...});
$(function() {

    console.log("main.js document.ready fired");
    CARDS.Main.init();

});