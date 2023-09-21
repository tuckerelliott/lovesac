define("mixins",["module"],(function(n){"use strict";var r,i=require.s.contexts._,e=require.s.newContext("$"),t=i.config,u={baseUrl:t.baseUrl,paths:t.paths,shim:t.shim,config:t.config,map:t.map};function s(n,r){return function(n,r){var i=r.baseUrl||"",e=n.indexOf(i);return~e&&(n=n.substring(i.length-e)),n}(e.require.toUrl(n),r)}function o(n){return Array.prototype.slice.call(arguments,1).forEach((function(r){n=r(n)})),n}return e.configure(u),r={load:function(n,r,i,e){var t=s(n,e),u=this.getMixins(t);r([n].concat(u),(function(){i(o.apply(null,arguments))}))},getMixins:function(r){var i,e=n.config()||{};return-1!==r.indexOf("?")&&(r=r.substring(0,r.indexOf("?"))),i=e[r]||{},Object.keys(i).filter((function(n){return!1!==i[n]}))},hasMixins:function(n){return this.getMixins(n).length},processNames:function(n,i){var e=i.config;function t(n){var i=s(n,e);return function(n){return!!~n.indexOf("!")}(n)||!function(n){return!!~n.indexOf("./")}(n)&&!r.hasMixins(i)?n:function(n){return"mixins!"+n}(n)}return"string"!=typeof n?n.map(t):t(n)}},r})),require(["mixins"],(function(n){"use strict";var r=require.s.contexts._,i=r.require,e=n.processNames;r.require=function(n,t,u){return n=e(n,r),i(n,t,u)},Object.keys(i).forEach((function(n){r.require[n]=i[n]})),r.defQueue.shift=function(){var n=Array.prototype.shift.call(this),i=n&&n[1];return Array.isArray(i)&&(n[1]=e(n[1],r)),n}}));