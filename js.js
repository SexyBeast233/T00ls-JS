// ==UserScript==
// @name         土司文章保存 样式优化脚本
// @namespace    http://t00ls.com
// @version      1.1
// @description  Remove specified elements from t00ls.com and its subdomains
// @match        https://t00ls.com/*
// @match        https://*.t00ls.com/*
// @match        http://t00ls.com/*
// @match        http://*.t00ls.com/*
// @match        *://*/*articles*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Specify the CSS selectors of the elements you want to remove
    var selectorsToRemove = [
        '#copyright',
        '#wrapper > a',
        '#footer',
        'header > div',
        'header > div.header_main-parent',
        'header_main',
        '#wrapper > section > div > div > div.col.col_3_of_12.sidebar',
        '#wrapper > section > div > div > div.col.main-content.col_9_of_12 > div.entry-bar.fixed',
        '#comments > div.panel_title'
    ];

    // Function to remove elements by CSS selector
    function removeElements() {
        selectorsToRemove.forEach(function(selector) {
            var element = document.querySelector(selector);
            if (element) {
                element.parentNode.removeChild(element);
            }
        });
    }
    if (window.location.href.includes('articles')) {
        // Wait for the page to load and remove the specified elements
        window.addEventListener('load', removeElements);
    }
})();