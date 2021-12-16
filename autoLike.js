// ==UserScript==
// @name         Bilibili自动点赞
// @name-en      Bilibili Auto Like
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Howxcheng
// @include       *://*.bilibili.com/video/*
// @include       *://*.bilibili.com/bangumi/*
// @updateURL      https://raw.githubusercontent.com/howxcheng/BiliBili_Auto_Like/main/autoLike.js
// @downloadURL    https://raw.githubusercontent.com/howxcheng/BiliBili_Auto_Like/main/autoLike.js
// @homepageURL    https://github.com/howxcheng/BiliBili_Auto_Like
// @supportURL      https://github.com/howxcheng/BiliBili_Auto_Like/issues
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @license        MIT
// @compatible     chrome 80 or later
// @compatible     firefox 77 or later
// @compatible     opera 69 or later
// @compatible     safari 13.1 or later
// @version        5.7.8.6
// @run-at         document-start
// @grant          unsafeWindow
// @grant          GM_xmlhttpRequest
// @grant          GM_getResourceText
// @grant          GM_notification
// @grant          GM_openInTab
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_deleteValue
// @grant          GM_addStyle
// ==/UserScript==

(function () {
    'use strict';
    console.log("10秒后自动点赞");
    setTimeout(function () { clickLike() }, 10000);
    function clickLike() {
        let likeOnList = document.getElementsByClassName("like on");
        let likeInfoActiveList = document.getElementsByClassName("like-info active");
        if (likeOnList.length == 0 && likeInfoActiveList.length == 0) {
            let likeList = document.getElementsByClassName("like");
            for (let item = 0; item < likeList.length; item++) {
                likeList[item].click();
            }
            console.log("已自动点赞")
            Toast("已自动点赞", 3000)
        } else {
            console.log("已点过赞啦")
            Toast("已点过赞啦", 3000)
        }
    }
    //界面toast提示
    /*使用方法 Toast('这是一个弹框',2000)*/
    function Toast(msg, duration) {
        duration = isNaN(duration) ? 3000 : duration;
        var m = document.createElement('div');
        m.innerHTML = msg;
        m.style.cssText = "font-family:siyuan;max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 10%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
        document.body.appendChild(m);
        setTimeout(function () {
            var d = 0.5;
            m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function () {
                document.body.removeChild(m)
            }, d * 1000);
        }, duration);
    }
})();
