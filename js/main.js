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
    'use strict';
    
    element.classList.add('class');

document.getElementById("MyElement").classList.remove('class');

if ( document.getElementById("MyElement").classList.contains('class') )

document.getElementById("MyElement").classList.toggle('class');


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