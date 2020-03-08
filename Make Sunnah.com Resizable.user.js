// ==UserScript==
// @name         Make Sunnah.com Resizable
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sunnah.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @require https://code.jquery.com/jquery-1.12.4.js
// @require https://code.jquery.com/ui/1.12.1/jquery-ui.js
// ==/UserScript==

(function($) {
    'use strict';
    $(document).ready(function() {
        $('.text_details').resizable();
        $('.arabic_hadith_full.arabic').empty();
    });
    // Your code here...
})($);