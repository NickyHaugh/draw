!function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=3)}([function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},function(t,n,r){var e=r(2),o=r(15),u=r(16),c="[object Null]",i="[object Undefined]",f=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?i:c:f&&f in Object(t)?o(t):u(t)}},function(t,n,r){var e=r(12).Symbol;t.exports=e},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r(4);addEventListener("message",t=>{const{pots:n,groups:r,selectedTeam:o,currentPotNum:u}=t.data,c=Object(e.a)(n,r,o,u);postMessage({selectedTeam:o,pickedGroup:c})})},function(t,n,r){"use strict";function e(t,n,r){if(0===t[r].length&&++r===t.length)return!0;const u=t[r],c=u.pop();let i=!1;for(const f of o(n,c,r)){const o=n[f];if(o.push(c),i=e(t,n,r),o.pop(),i)break}return u.push(c),i}function o(t,n,r){const e=t.length>>1,o=u(t,n,r,0,e),c=u(t,n,r,e,t.length);return 0===o.length?c:0===c.length?o:o.concat(c)}function u(t,n,r,e,o){const u=[],c=a(n);for(let i=e;i<o;++i){const e=t[i];let o=!0;for(const t of e)if(t.country===n.country||c(t)){if(o=!1,t.pairing===n)return[];break}o&&e.length<=r&&u.push(i)}return u}n.a=function(t,n,r,u){return n.every(t=>0===t.length)?0:o(n,r,u).find(o=>{n[o].push(r);const c=e(t,n,u);return n[o].pop(),c})};var c=r(5);r.n(c);const i=t=>"ua"===t.country,f=t=>"ru"===t.country,s=t=>!1,a=t=>"ru"===t.country?i:"ua"===t.country?f:s},function(t,n,r){var e=r(6)();t.exports=e},function(t,n,r){var e=r(7),o=r(8),u=r(19);t.exports=function(t){return function(n,r,c){return c&&"number"!=typeof c&&o(n,r,c)&&(r=c=void 0),n=u(n),void 0===r?(r=n,n=0):r=u(r),c=void 0===c?n<r?1:-1:u(c),e(n,r,c,t)}}},function(t,n){var r=Math.ceil,e=Math.max;t.exports=function(t,n,o,u){for(var c=-1,i=e(r((n-t)/(o||1)),0),f=Array(i);i--;)f[u?i:++c]=t,t+=o;return f}},function(t,n,r){var e=r(9),o=r(10),u=r(18),c=r(0);t.exports=function(t,n,r){if(!c(r))return!1;var i=typeof n;return!!("number"==i?o(r)&&u(n,r.length):"string"==i&&n in r)&&e(r[n],t)}},function(t,n){t.exports=function(t,n){return t===n||t!==t&&n!==n}},function(t,n,r){var e=r(11),o=r(17);t.exports=function(t){return null!=t&&o(t.length)&&!e(t)}},function(t,n,r){var e=r(1),o=r(0),u="[object AsyncFunction]",c="[object Function]",i="[object GeneratorFunction]",f="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var n=e(t);return n==c||n==i||n==u||n==f}},function(t,n,r){var e=r(13),o="object"==typeof self&&self&&self.Object===Object&&self,u=e||o||Function("return this")();t.exports=u},function(t,n,r){(function(n){var r="object"==typeof n&&n&&n.Object===Object&&n;t.exports=r}).call(n,r(14))},function(t,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(2),o=Object.prototype,u=o.hasOwnProperty,c=o.toString,i=e?e.toStringTag:void 0;t.exports=function(t){var n=u.call(t,i),r=t[i];try{t[i]=void 0;var e=!0}catch(t){}var o=c.call(t);return e&&(n?t[i]=r:delete t[i]),o}},function(t,n){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,n){var r=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}},function(t,n){var r=9007199254740991,e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){return!!(n=null==n?r:n)&&("number"==typeof t||e.test(t))&&t>-1&&t%1==0&&t<n}},function(t,n,r){var e=r(20),o=1/0,u=1.7976931348623157e308;t.exports=function(t){return t?(t=e(t))===o||t===-o?(t<0?-1:1)*u:t===t?t:0:0===t?t:0}},function(t,n,r){var e=r(0),o=r(21),u=NaN,c=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,s=/^0o[0-7]+$/i,a=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return u;if(e(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=e(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var r=f.test(t);return r||s.test(t)?a(t.slice(2),r?2:8):i.test(t)?u:+t}},function(t,n,r){var e=r(1),o=r(22),u="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&e(t)==u}},function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}}]);