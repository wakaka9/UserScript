// ==UserScript==
// @name         切换SynologyKB网站语言
// @namespace    wakaka9
// @version      0.2
// @description  支持SynologyKB
// @author       wakaka9
// @license      MIT
// @match        *://kb.synology.cn/*
// @match        *://kb.synology.com/*
// @grant        none
// @downloadURL none
// ==/UserScript==

(function () {
    var url = window.location.href;
    var globalurl = window.location.href;

    if (url.indexOf("com/zh-cn") > -1) {
        globalurl = url.replace('com/zh-cn', 'com/en-global');
    }
    else if (url.indexOf("cn/en-global") > -1) {
        globalurl = url.replace('cn/en-global', 'cn/zh-cn');
    }
    else if (url.indexOf("com/zh-tw") > -1) {
        globalurl = url.replace('com/zh-tw', 'com/en-global');
    }

    if (globalurl != url) {
        window.location.href = globalurl;
    }
})();
