/*global window, console, document */
var Kaizen = (function (window, document) {
    'use strict';
    var kaizen,
        selectArea,
        prepareContent,
        unselectArea,
        getAncestorByClassName;
    kaizen = {
        init: function () {
            var elements,
                i;
            elements = document.getElementsByClassName('icon-container');
            for (i = 0; i < elements.length; i += 1) {
                elements[i].addEventListener('click', selectArea, true);
            }
            prepareContent();
            document.getElementById("cancel").addEventListener('click', unselectArea);
        }
    };

    selectArea = function (event) {
        var element,
            elements,
            i;

        element = getAncestorByClassName(event.toElement, 'icon');
        elements = document.querySelectorAll('.icon');
        for (i = 0; i < elements.length; i += 1) {
            if (elements[i] === element) {
                element.classList.add('active');
            } else {
                elements[i].classList.add('inactive');
            }
        }
        document.getElementById('comment').classList.add('active');
        

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


    unselectArea = function (event) {
        var element = document.querySelector('#comment'),
            icons = document.querySelectorAll('.icon'),
            i;

        // remove from comment
        element.classList.remove('active');

        // remove from icons
        for (i = 0; i < icons.length; i += 1) {
            icons[i].classList.remove('active');
        }
    };

    getAncestorByClassName = function (node, className) {
        var ancestor, iter;
        iter = node;
        while (iter.parentNode && !iter.classList.contains(className)) {
            iter = iter.parentNode;
        }
        if (iter.classList.contains(className)) {
            ancestor = iter;
        }
        return ancestor;
    }

    return kaizen;
}(window, window.document));


window.addEventListener('load', Kaizen.init);
