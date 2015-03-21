/*global window, console, document */
var preparePage,
    selectArea;

preparePage = function () {
    'use strict';
    var elements,
        i;
    elements = document.getElementsByClassName('icon-big');
    for (i = 0; i < elements.length; i += 1) {
        elements[i].addEventListener('click', function (event) {
            selectArea(event.toElement);
        });
    }
};

selectArea = function (element) {


console.log("                ,;~;,");
console.log("                /\_");
console.log("               (  /");
console.log("               (()      //)");
console.log("               | \\  ,,;;'\ "); 
console.log("           __ _(  )m=(((((((((((((================--------" );
console.log("         /'  ' '()/~' '.(, |");
console.log("      ,;(      )||     |  ~");
console.log("     ,;' \    /-(.;,   )");
console.log("          ) /       ) /"); 
console.log("         //  PjP    ||");
console.log("        )_\         )_\'");
    // console.log(element.addClass("tierchen"));
};



window.addEventListener('load', preparePage);