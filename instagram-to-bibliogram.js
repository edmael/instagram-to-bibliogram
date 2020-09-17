// ==UserScript==
// @name         Instagram to Bibliogram
// @version      0.1
// @description  redirect Instagram link to a Bibliogram instance
// @author       edmael
// @match        https://www.instagram.com/*
// @include      https://www.instagram.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    if (document.location.pathname.indexOf("/p/") == 0) {
  window.stop(); // stop loading the window
  location.hostname = 'bibliogram.pixelfed.uno';
        } else {
            window.stop();
            var newhostname = "bibliogram.pixelfed.uno";
            var newURL = location.protocol + "//"
                + newhostname
                + '/u'
                + location.pathname
                + location.search
                + location.hash
                ;
            location.replace (newURL);
        }
})();