// ==UserScript==
// @name           Bilibili自动点赞
// @name-en        Bilibili Auto Like
// @namespace      http://tampermonkey.net/
// @version        1.2
// @description    哔哩哔哩视频、番剧自动点赞
// @author         Howxcheng
// @include        *://*.bilibili.com/video/*
// @include        *://*.bilibili.com/bangumi/*
// @homepageURL    https://github.com/howxcheng/BiliBili_Auto_Like
// @supportURL     https://github.com/howxcheng/BiliBili_Auto_Like/issues
// @icon           https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://bilibili.com&size=16
// @license        MIT
// @compatible     chrome 80 or later
// @compatible     firefox 77 or later
// @compatible     opera 69 or later
// @compatible     safari 13.1 or later
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
    var originUrl = "";
    var interval = setInterval(function () { judgeUrl() }, 10000);
    // 监测url变化
    function judgeUrl() {
        var currentUrl = document.location.toString();
        if (originUrl != currentUrl) {
            originUrl = currentUrl
            clickLike()
        }
    }
    // 点赞
    function clickLike() {
        var likeOnList = document.getElementsByClassName("like on");
        var likeInfoActiveList = document.getElementsByClassName("like-info active");
        if (likeOnList.length == 0 && likeInfoActiveList.length == 0) {
            var likeList = document.getElementsByClassName("like");
            for (var item = 0; item < likeList.length; item++) {
                if (likeList[item].getAttribute("title") !== null) {
                    likeList[item].click();
                }
            }
            console.log("已自动点赞")
            Toast("已自动点赞", 3000)
        } else {
            console.log("已点过赞啦")
            Toast("已点过赞啦", 3000)
        }
    }
    //界面toast提示
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