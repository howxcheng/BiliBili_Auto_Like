// ==UserScript==
// @name         B站视频自动点赞
// @name-en      Bilibili Auto Like
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Howxcheng
// @include       *://*.bilibili.com/video/*
// @include       *://*.bilibili.com/bangumi/*
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @license        MIT
// @compatible     chrome 80 or later
// @compatible     firefox 77 or later
// @compatible     opera 69 or later
// @compatible     safari 13.1 or later
// @version        5.7.8.6
// @run-at         document-start
// @connect        passport.bilibili.com
// @connect        api.live.bilibili.com
// @connect        api.bilibili.com
// @connect        api.vc.bilibili.com
// @connect        live-trace.bilibili.com
// @connect        sctapi.ftqq.com
// @connect        pushplus.plus
// @connect        andywang.top
// @connect        gitee.com
// @require        https://cdn.jsdelivr.net/gh/andywang425/BLTH@dac0d115a45450e6d3f3e17acd4328ab581d0514/assets/js/library/Ajax-hook.min.js
// @require        https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require        https://cdn.jsdelivr.net/gh/andywang425/BLTH@d810c0c54546b88addc612522c76ba481285298d/assets/js/library/decode.min.js
// @require        https://cdn.jsdelivr.net/npm/pako@1.0.10/dist/pako.min.js
// @require        https://cdn.jsdelivr.net/gh/andywang425/BLTH@f50572d570ced20496cc77fe6a0853a1deed3671/assets/js/library/bliveproxy.min.js
// @require        https://cdn.jsdelivr.net/gh/andywang425/BLTH@91f469fef739c8ecfd4f101d3b4ba7e5e95be42d/assets/js/library/BilibiliAPI_Mod.min.js
// @require        https://cdn.jsdelivr.net/gh/andywang425/BLTH@4368883c643af57c07117e43785cd28adcb0cb3e/assets/js/library/layer.min.js
// @require        https://cdn.jsdelivr.net/gh/andywang425/BLTH@dac0d115a45450e6d3f3e17acd4328ab581d0514/assets/js/library/libBilibiliToken.min.js
// @require        https://cdn.jsdelivr.net/gh/andywang425/BLTH@dac0d115a45450e6d3f3e17acd4328ab581d0514/assets/js/library/libWasmHash.min.js
// @require        https://cdn.jsdelivr.net/npm/hotkeys-js@3.8.7/dist/hotkeys.min.js
// @resource       layerCss https://cdn.jsdelivr.net/gh/andywang425/BLTH@f9a554a9ea739ccde68918ae71bfd17936bae252/assets/css/layer.css
// @resource       myCss    https://cdn.jsdelivr.net/gh/andywang425/BLTH@5bcc31da7fb98eeae8443ff7aec06e882b9391a8/assets/css/myCss.min.css
// @resource       main     https://cdn.jsdelivr.net/gh/andywang425/BLTH@f3caf1d878912d5d103bf1fa30e75f9cd20f144b/assets/html/main.min.html
// @resource       eula     https://cdn.jsdelivr.net/gh/andywang425/BLTH@da3d8ce68cde57f3752fbf6cf071763c34341640/assets/html/eula.min.html
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
    setTimeout(function() { clickLike() }, 10000);
    function clickLike() {
        let likeList = document.getElementsByClassName("like");
        for(let item = 0;item < likeList.length;item++){
            if(likeList[item].getAttribute("title").substr(0,2) === "点赞"){
                if(likeList[item].getAttribute("class") === "like"){
                    likeList[item].click();
                }
            }
        }
        console.log("已自动点赞");
    }
})();