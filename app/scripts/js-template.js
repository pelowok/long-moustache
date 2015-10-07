'use strict';

//scripted by pelowok 10/7/2015

var CARDS = CARDS || [];

// We define a function that takes one parameter named $.
CARDS.Main = (function ($) {

    // declare a variable that will be returned when the function runs.
    // This pub variable will be attached as a property to the prototype
    // named PrototypeName in: var PrototypeName = $(function){...});
    // After that, the pub.properties are available as PrototypeName.property
    var pub = {};

    var init = function () {
        console.log('CARDS.Main.init fired');
    };

    CARDS.potato1 = 'potato1';
    var potato2 = 'this potato2 is never assigned to pub variable so its prviate';
    var potato3 = 'not 1, not 2, but potato3';

    pub.init = init;
    pub.potato1 = potato3;

    return pub;

// Here we immediately call the function with jQuery as the parameter.
}(jQuery));




$( window ).load(function() {

    

    console.log( "window loaded" );
    console.log('CARDS.potato1 : ' + CARDS.potato1);
    console.log('CARDS.potato2 : ' + CARDS.potato2);
    console.log('CARDS.potato3 : ' + CARDS.potato3);
    console.log('CARDS.Main.potato1 : ' + CARDS.Main.potato1);
    console.log('CARDS.Main.potato2 : ' + CARDS.Main.potato2);
    console.log('CARDS.Main.potato3 : ' + CARDS.Main.potato3);
});

// Shorthand for: $( document ).ready(function(){...});
$(function() {

    console.log("document loaded");

    CARDS.Main.init();


});