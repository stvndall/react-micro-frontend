define(["react","prop-types","react-dom","settings","moduleLoader"],function(e,t,n,o,r){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="http://localhost:8081/public/",t(t.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.entry=void 0;var r=n(0),u=(o(r),n(3),n(4),n(5)),c=n(1),i=(o(c),n(6)),l=o(i);console.log("loaded"),(new u.moduleLoader).Register("app1_1",l.default);var f=console.log;t.entry=f},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),f=o(l),a=n(1),s=(o(a),function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return c(t,e),i(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("button",{onClick:function(){return console.log("logging to console!!!!")}},this.props.text))}}]),t}(l.PureComponent));t.default=s}])});