/*global window, console, document */
var preparePage = function () {
    'use strict';
    var elements,
        i;
    elements = document.getElementsByClassName('icon-big');
    for (i = 0; i < elements.length; i += 1) {
        elements[i].addEventListener('click', function (event) {
            console.log(event);
        });
    }
};

window.addEventListener('load', preparePage);