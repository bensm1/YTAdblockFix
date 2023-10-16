// ==UserScript==
// @name         YT adblock overlay fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

function removeOverlay() {
    const popup = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-paper-dialog");

    if (popup != undefined) {
        popup.remove();

        // OBSOLETE: popup is deleted instantly
        //clickPlay();
    }
}

function clickPlay() {
    const playButton = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button");

    if (playButton != undefined) {
         playButton.click();
    }
}

(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", () => {
        removeOverlay();
    });
})();