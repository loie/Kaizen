/*global window, console, document */
var Kaizen = (function (window, document) {
    'use strict';
    var kaizen,
        selectArea,
        onIconAnimationEnd,
        onCommentAnimationEnd,
        saveEntry,
        unselectArea,
        getAncestorByClassName,
        names,
        toggleHistory,
        items,
        updateContent,
        registerListeners;

    items = {};
    kaizen = {
        init: function () {
            registerListeners();
            updateContent();
        }
    };

    registerListeners = function () {
        var elements,
            i;
        /* Add Listeners */
        elements = document.getElementsByClassName('icon-container');
        for (i = 0; i < elements.length; i += 1) {
            elements[i].addEventListener('click', selectArea, true);
            elements[i].addEventListener('transitionend', onIconAnimationEnd, false);
            elements[i].addEventListener('webkitTransitionEnd', onIconAnimationEnd, false);
        }
        document.getElementById("comment").addEventListener('transitionend', onCommentAnimationEnd, false);
        document.getElementById("comment").addEventListener('webkitTransitionEnd', onCommentAnimationEnd, false);
        document.getElementById("form").addEventListener('submit', saveEntry, true);
        document.getElementById("cancel").addEventListener('click', unselectArea);
        document.getElementById("hamburger").addEventListener('click', toggleHistory);
    };

    updateContent = function () {
        var handleItemName,
            todayTimestamp;
        handleItemName = function (name) {
            var itemMap,
                element,
                handleItemMap,
                keys,
                containerElement,
                todayFound;

            handleItemMap = function (timestamp) {
                var item,
                    template,
                    date,
                    content,
                    contentText;
                item = itemMap[timestamp];
                if (parseInt(timestamp, 10) === todayTimestamp) {
                    if (item !== undefined && item !== '') {
                        todayFound = true;
                    }
                }
                template = document.querySelector('#template-content');
                template = template.dataset.templatetext;
                date = new Date(parseInt(timestamp, 10));
                content = document.createElement('tr');
                contentText = template.replace('{{date}}', date.toLocaleDateString());
                contentText = contentText.replace('{{content}}', item);
                content.innerHTML = contentText;
                containerElement.appendChild(content);
            };
            itemMap = items[name];
            containerElement = document.querySelector('.' + name + '-history');
            todayFound = false;

            if (itemMap !== null) {
                keys = Object.keys(itemMap);
                keys.sort().reverse();
                containerElement.innerHTML = '';
                keys.forEach(handleItemMap);
            }
            element = document.querySelector('.areas .icon[data-type=' + name + ']');
            if (todayFound) {
                element.classList.add('filled');
            } else {
                element.classList.remove('filled');
            }
        };
        todayTimestamp = new Date();
        todayTimestamp.setHours(0, 0, 0, 0);
        todayTimestamp = todayTimestamp.valueOf();

        items.learned = JSON.parse(window.localStorage.getItem('learned'));
        items.improved = JSON.parse(window.localStorage.getItem('improved'));
        items.enjoyed = JSON.parse(window.localStorage.getItem('enjoyed'));

        Object.keys(items).forEach(handleItemName);
    };

    names = {
        Learned: 'learned',
        Improved: 'improved',
        Enjoyed: 'enjoyed',
        UnselectActionClassName: 'unselect-action',
        learned_title: "learned",
        learned_content: "to cook a new meal, something about Spanish history",
        improved_title: "improved",
        improved_content: "the way we handle at business, my home interieur, my touch",
        enjoyed_title: "enjoyed",
        enjoyed_content: "a cup of great coffee, a beautiful sunset, quality time with kids"
    };

    onIconAnimationEnd = function () {
        var icons = document.querySelectorAll('.areas .icon'),
            i;
        for (i = 0; i < icons.length; i += 1) {
            if (icons[i].classList.contains(names.UnselectActionClassName)) {
                icons[i].classList.remove(names.UnselectActionClassName);
            }
        }
    };

    onCommentAnimationEnd = function (event) {
        var comment = event.target;
        if (comment.classList.contains(names.UnselectActionClassName)) {
            comment.classList.remove(names.UnselectActionClassName);
        }
    };

    selectArea = function (event) {
        var element,
            elements,
            i,
            type,
            title,
            titleTemplate,
            placeholder,
            placeholderTemplate,
            today,
            valueForToday;

        element = getAncestorByClassName(event.toElement, 'icon');
        elements = document.querySelectorAll('.areas .icon');
        for (i = 0; i < elements.length; i += 1) {
            if (elements[i] === element) {
                element.classList.add('active');
                type = element.dataset.type;
                title = document.querySelector('#comment .title');
                if (title !== undefined) {
                    titleTemplate = title.dataset.template;
                    title.innerText = titleTemplate.replace('{{action}}', names[type + '_title']);
                }
                placeholder = document.querySelector('#comment .comment');
                if (placeholder !== undefined) {
                    placeholderTemplate = placeholder.dataset.template;
                    placeholder.setAttribute('placeholder', placeholderTemplate.replace('{{things}}', names[type + '_content']));
                    valueForToday = window.localStorage.getItem(type);
                    valueForToday = JSON.parse(valueForToday);
                    today = new Date();
                    today.setHours(0, 0, 0, 0);
                    if (valueForToday === null) {
                        placeholder.value = '';
                    } else {
                        valueForToday = valueForToday[today.valueOf()];
                        if (valueForToday !== undefined) {
                            placeholder.value = valueForToday;
                        } else {
                            placeholder.value = '';
                        }
                    }
                }
            } else {
                elements[i].classList.add('inactive');
            }
        }
        document.getElementById('comment').classList.add('active');


        // console.log("                ,;~;,");
        // console.log("                /\\_");
        // console.log("               (  /");
        // console.log("               (()      //)");
        // console.log("               | \\  ,,;;'\\"); 
        // console.log("           __ _(  )m=(((((((((((((================--------");
        // console.log("         /'  ' '()/~' '.(, |");
        // console.log("      ,;(      )||     |  ~");
        // console.log("     ,;' \\    /-(.;,   )");
        // console.log("          ) /       ) /"); 
        // console.log("         //  PjP    ||");
        // console.log("        )_\\         )_\'");
    };

    saveEntry = function (event) {
        var value,
            element,
            type,
            savedValues,
            today,
            textArea;

        event.preventDefault();

        textArea = document.querySelector('textarea.comment');
        if (textArea instanceof Array && textArea.length > 0) {
            textArea = textArea[0];
        }
        value = textArea.value;
        element = document.querySelector('.icon.active');
        type = element.dataset.type;
        savedValues = window.localStorage.getItem(type);
        savedValues = JSON.parse(savedValues);
        if (savedValues === null) {
            savedValues = {};
        }
        today = new Date();
        today.setHours(0, 0, 0, 0);
        today = today.valueOf();
        savedValues[today] = value;
        if (value === '') {
            delete savedValues[today];
        }
        window.localStorage.setItem(type, JSON.stringify(savedValues));
        unselectArea();
        updateContent();
    };

    unselectArea = function () {
        var comment = document.querySelector('#comment'),
            icons = document.querySelectorAll('.areas .icon'),
            i;

        // remove from comment
        comment.classList.add(names.UnselectActionClassName);
        comment.classList.remove('active');

        // remove from icons
        for (i = 0; i < icons.length; i += 1) {
            icons[i].classList.add(names.UnselectActionClassName);
            icons[i].classList.remove('active');
            icons[i].classList.remove('inactive');
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
    };

    toggleHistory = function (event) {
        var today,
            history;
        event.preventDefault();
        today = document.querySelector('.today');
        history = document.querySelector('.history');
        today.classList.toggle('hidden');
        history.classList.toggle('hidden');
    };


    return kaizen;
}(window, window.document));


window.addEventListener('load', Kaizen.init);
