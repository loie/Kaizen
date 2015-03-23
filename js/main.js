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

    document.getElementById("cancel").addEventListener('click', unselectArea);
};

selectArea = function (element) {
    'use strict';
    var elements,
        i;
    element.classList.add('class');
    elements = document.getElementsByClassName('icon-big');
    for (i = 0; i < elements.length; i += 1) {
        if (elements[i] === element) {
            element.classList.add('active');
        } else {
            elements[i].classList.add('inactive');
        }
    }
    document.getElementById('comment').classList.add('active');
    // document.getElementById("MyElement").classList.remove('class');

    // if ( document.getElementById("MyElement").classList.contains('class') )
    // document.getElementById("MyElement").classList.toggle('class');


    console.log("                ,;~;,");
    console.log("                /\\_");
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

unselectArea = function (element) {
    console.log(element);
};



window.addEventListener('load', preparePage);