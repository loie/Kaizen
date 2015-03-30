/*global window, console, document */
var Kaizen = (function (window, document) {
    'use strict';
    var kaizen,
        selectArea,
        preparePage,
        prepareContent,
        unselectArea;
    kaizen = {
    };

    selectArea = function (event) {
        var element,
            elements,
            i;
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
        // document.getElementById("kaizenElement").classList.remove('class');

        // if ( document.getElementById("kaizenElement").classList.contains('class') )
        // document.getElementById("kaizenElement").classList.toggle('class');


        console.log("                ,;~;,");
        console.log("                /\\_");
        console.log("               (  /");
        console.log("               (()      //)");
        console.log("               | \\  ,,;;'\\"); 
        console.log("           __ _(  )m=(((((((((((((================--------");
        console.log("         /'  ' '()/~' '.(, |");
        console.log("      ,;(      )||     |  ~");
        console.log("     ,;' \\    /-(.;,   )");
        console.log("          ) /       ) /"); 
        console.log("         //  PjP    ||");
        console.log("        )_\\         )_\'");
        // console.log(element.addClass("tierchen"));
    };


    prepareContent = function () {
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

    unselectArea = function (element) {
        console.log(element);
    };

    preparePage = function () {
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


    return kaizen;
}(window, window.document));

