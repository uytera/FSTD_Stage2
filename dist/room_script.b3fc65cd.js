parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZDet":[function(require,module,exports) {
function e(e){rootElem=e.parentNode.parentNode;var t=Number.parseInt(rootElem.dataset.numberOfSlide);1!=t&&(t-=1,$("."+rootElem.classList[0]+" .slider__image-container :nth-child("+t+")").fadeIn()),$("."+rootElem.classList[0]+" .slider__legend :nth-child("+t+")").css({background:"white"}),4!=t&&$("."+rootElem.classList[0]+" .slider__legend :nth-child("+(t+1)+")").css({background:"none"}),rootElem.dataset.numberOfSlide=t}function t(e){rootElem=e.parentNode.parentNode;var t=Number.parseInt(rootElem.dataset.numberOfSlide);4!=t&&($("."+rootElem.classList[0]+" .slider__image-container :nth-child("+t+")").fadeOut(),t+=1),$("."+rootElem.classList[0]+" .slider__legend :nth-child("+t+")").css({background:"white"}),1!=t&&$("."+rootElem.classList[0]+" .slider__legend :nth-child("+(t-1)+")").css({background:"none"}),rootElem.dataset.numberOfSlide=t}$(document).ready(function(){$("[class^=room-]").height($("[class^=room-]").width()/1.05),$(window).resize(function(){$("[class^=room-]").height($("[class^=room-]").width()/1.05)}),$("[class^=room-] .slider__image-container").height($("[class^=room-] .slider__image-container").width()/1.78),$(window).resize(function(){$("[class^=room-] .slider__image-container").height($("[class^=room-] .slider__image-container").width()/1.78)}),$("[class^=room-] .room__description-container").height($("[class^=room-]").height()-$("[class^=room-] .slider__image-container").height()),$(window).resize(function(){$("[class^=room-] .room__description-container").height($("[class^=room-]").height()-$("[class^=room-] .slider__image-container").height())});for(var i=document.getElementsByTagName("i"),o=0;o<i.length;o++){0==(r=i[o]).id.indexOf("slider__right-button")&&r.addEventListener("click",function(e){t(e.target)}),0==r.id.indexOf("slider__left-button")&&r.addEventListener("click",function(t){e(t.target)})}for(var n=document.getElementsByTagName("div"),r=0;r<n.length;r++){var s=n[r];0!=s.classList.length&&0==s.classList[0].indexOf("room")&&s.addEventListener("click",function(e){rootElem=s.classList[0]}),0==s.id.indexOf("slider__right-area-button")&&s.addEventListener("click",function(e){t(e.target)}),0==s.id.indexOf("slider__left-area-button")&&s.addEventListener("click",function(t){e(t.target)})}});
},{}]},{},["ZDet"], null)
//# sourceMappingURL=/room_script.b3fc65cd.js.map