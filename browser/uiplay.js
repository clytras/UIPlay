!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(e){e.exports=JSON.parse('{"b":"uiplay","a":"UIPlay"}')},function(e,t){function n(e,t,n){var r,o,i,u,a;function l(){var c=Date.now()-u;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,n||(a=e.apply(i,o),i=o=null))}null==t&&(t=100);var c=function(){i=this,o=arguments,u=Date.now();var c=n&&!r;return r||(r=setTimeout(l,t)),c&&(a=e.apply(i,o),i=o=null),a};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(a=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},c}n.debounce=n,e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=n.volume,a=void 0===r?1:r,l=n.debounceMillis,c=void 0===l?300:l,f=n.ignoreErrors,d=void 0===f||f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.file=t,this.volume=a,this.debounceMillis=c,this.ignoreErrors=d,this.play=o()(this.playImmediate,c,!0);var s=document.createElement("audio"),p=u(t&&t.match(/^(([A-Z]:)?[\.]?[\\{1,2}/]?.*[\\{1,2}/])*(.+)\.(.+)/)||[],5),v=p[3],y=p[4];if(!v)throw new Error("".concat(i.a,": No imput file to load"));s.id="".concat(i.b,"-audio-").concat(v).concat(y,"-").concat((new Date).getTime()),s.src=t,s.preload="auto",document.body.appendChild(s)}var t,n,r;return t=e,(n=[{key:"playImmediate",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=new Audio(this.file);return n.addEventListener("loadeddata",(function(){n.volume=null!==t?t:e.volume,n.play().catch((function(t){if(!e.ignoreErrors)throw t}))})),n.addEventListener("error",(function(){if(!e.ignoreErrors)throw new Error("".concat(i.a,": HTMLMediaElement error"))})),n.load(),this}},{key:"setVolume",value:function(e){return this.volume=e,this}}])&&a(t.prototype,n),r&&a(t,r),e}();window.UIPlay=l}]);
//# sourceMappingURL=uiplay.js.map