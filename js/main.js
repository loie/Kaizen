/*global window, console, document */
// var kaizen = function (window, document, undefined) {
//     'use strict';
//     var my = {};

//     return my;
// }(window, window.document);

var preparePage,
    selectAreaByEvent,
    selectArea,
    prepareContent,
    unselectArea;

selectArea = function (event) {
    'use strict';
    var element,
        elements,
        i;
    console.log(event);
    element = event.toElement;
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
    console.log("               | \\  ,,;;'\\"); 
    console.log("           __ _(  )m=(((((((((((((================--------");
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

prepareContent = function () {
    'use strict';
    var json,
        entries,
        enjoyed = [],
        learned = [],
        improved = [];

    json = window.localStorage.getItem('entries');
    try {
        entries = JSON.parse(json);
    } catch (error) {
        console.err(error);
    }
    if (entries !== undefined && entries !== null) {
        entries.forEach(function (entry) {
            switch (entry.category) {
            case 'enjoyed':
                enjoyed.push(entry);
                break;
            case 'learned':
                learned.push(entry);
                break;
            case 'improved':
                improved.push(entry);
                break;
            }
        });
    }
};

preparePage = function () {
    'use strict';
    var elements,
        i;
    elements = document.getElementsByClassName('icon-big');
    for (i = 0; i < elements.length; i += 1) {
        elements[i].addEventListener('click', selectArea);
    }
    prepareContent();
    document.getElementById("cancel").addEventListener('click', unselectArea);
};


window.addEventListener('load', preparePage);
