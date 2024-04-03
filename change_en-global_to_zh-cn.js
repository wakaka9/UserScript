// ==UserScript==
// @name         切换网站语言
// @namespace    
// @version      0.1
// @description  支持synology
// @author       
// @license      MIT
// @date         2024-04-03
// @match        *://kb.synology.cn/*
// @grant        none
// @downloadURL 
// @updateURL 
// ==/UserScript==

(function () {
    var url = window.location.href;
    var cnurl = window.location.href;

    if (url.indexOf("com/zh-cn") > -1) {
        cnurl = url.replace('com/zh-cn', 'com/en-global');
    }
    else if (url.indexOf("cn/en-global") > -1) {
        cnurl = url.replace('cn/en-global', 'cn/zh-cn');
    }
    else if (url.indexOf("cn/zh-tw") > -1) {
        cnurl = url.replace('cn/zh-tw', 'com/zh-cn');
    }
    else if (url.indexOf("com/zh-cn") > -1) {
        cnurl = url.replace('com/zh-cn', 'cn/zh-cn');
    }

    if (cnurl != url) {
        window.location.href = cnurl;
    }
})();
