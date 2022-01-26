(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[280],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},69100:function(e,t,r){var n=r(99489),o=r(57067);function a(t,r,i){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},59713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(23646),o=r(46860),a=r(60379),i=r(98206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},60379:function(e,t,r){var n=r(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},56842:function(e,t,r){"use strict";r.r(t),r.d(t,{_frontmatter:function(){return f},default:function(){return v}});var n=r(63366),o=r(67294),a=r(64983),i=r(21379),u=r(25444),c=(r(27361),r(47499)),s=r(54155);var l=function(){return o.createElement("div",null,Object.keys(s).map((function(e){return o.createElement("div",{key:e,className:"d-flex mb-3 align-items-center"},o.createElement(c.Z,{className:"mr-3",key:e,src:s[e]}),o.createElement("h6",{className:"mb-0 mr-3 flex-grow-1"},e),o.createElement("code",{className:"bg-light px-2 py-1 rounded"},o.createElement("small",null,"import {"+e+"} from '@edx/paragon/icons';")))})))},p=(r(58053),["components"]),f={},d={_frontmatter:f},m=i.Z;function v(e){var t=e.components,r=(0,n.Z)(e,p);return(0,a.mdx)(m,Object.assign({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"icons"},(0,a.mdx)("a",{parentName:"h1",href:"#icons"},(0,a.mdx)("span",{parentName:"a",className:"heading-icon-link"})),"Icons"),(0,a.mdx)("p",null,"Displays an svg icon from ",(0,a.mdx)("inlineCode",{parentName:"p"},"@edx/paragon/icons"),". See the ",(0,a.mdx)(u.Link,{to:"/components/icon",mdxType:"Link"},"Icon Component")," for more information."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// Included in this live jsx scope:\n// import { Add, AddCircle } from '@edx/paragon/icons';\n<Icon src={Add} />\n")),(0,a.mdx)("p",null,"Many of the icons below are sourced from ",(0,a.mdx)("a",{href:"https://material.io/resources/icons/"},"Material Design Sharp Icons"),". They are designed to be sharp at 24px by 24px."),(0,a.mdx)("br",null),(0,a.mdx)(l,{mdxType:"IconsTable"}))}v.isMDXComponent=!0},21274:function(e,t,r){var n=r(41048);e.exports={MDXRenderer:n}},41048:function(e,t,r){var n=r(69100),o=r(319),a=r(59713),i=r(37316),u=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(67294),p=r(64983).mdx,f=r(93191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,u),c=f(t),d=l.useMemo((function(){if(!r)return null;var e=s({React:l,mdx:p},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return l.createElement(d,s({},a))}},58053:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(67294),o=r(21274),a=r(41902),i=function(e){return e.isRequired?n.createElement(n.Fragment,null," ",n.createElement(a.Z,{variant:"light"},"Required")):null};i.defaultProps={isRequired:!1};var u=function(e){var t=e.name,r=e.isRequired;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(i,{isRequired:r}))};u.defaultProps={isRequired:!1};var c=function(e){var t=e.name,r=e.value,o=e.isRequired;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(i,{isRequired:o}),n.createElement("span",{className:"text-monospace small ml-2"},r.map?r.map((function(e){return e.value})).join(" | "):JSON.stringify(r)))};c.defaultProps={isRequired:!1};var s=function(e){var t=e.value,r=e.isRequired;return n.createElement("span",null,t.map((function(e){return n.createElement(y,Object.assign({key:e.name},e))})).reduce((function(e,t){return[e," | ",t]})),n.createElement(i,{isRequired:r}))};s.defaultProps={isRequired:!1};var l=function(e){var t=e.value,r=e.isRequired;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(i,{isRequired:r}))};l.defaultProps={isRequired:!1};var p=function(e){var t=e.value,r=e.isRequired;return n.createElement("span",null,n.createElement(y,t),n.createElement("code",null,"[]"),n.createElement(i,{isRequired:r}))};p.defaultProps={isRequired:!1};var f=function(e){var t=e.value,r=e.isRequired;return n.createElement("span",null,n.createElement("code",null,"Object.","<",n.createElement(y,t),">"),n.createElement(i,{isRequired:r}))};f.defaultProps={isRequired:!1};var d=function(e){var t=e.name,r=e.value,o=e.isRequired;return n.createElement("span",{className:"small"},n.createElement("code",null,t),n.createElement(i,{isRequired:o})," {",Object.entries(r).map((function(e){var t=e[0],r=e[1];return n.createElement("div",{className:"text-monospace pl-3",key:t},t,": ",n.createElement(y,r),",")})),"}")};d.defaultProps={isRequired:!1};var m=function(e){var t=e.name,r=e.value,o=e.isRequired;return n.createElement("span",{className:"small"},n.createElement("code",null,t),n.createElement(i,{isRequired:o})," {",Object.entries(r).map((function(e){var t=e[0],r=e[1];return n.createElement("div",{className:"text-monospace pl-3"},t,": ",n.createElement(y,r),",")})),"}")};m.defaultProps={isRequired:!1};var v=function(e){var t=e.raw,r=e.isRequired;return n.createElement("span",null,n.createElement("code",null,t),n.createElement(i,{isRequired:r}))};v.defaultProps={isRequired:!1,raw:""};var x={array:u,bool:u,func:u,number:u,object:u,string:u,any:u,element:u,node:u,symbol:u,elementType:u,enum:c,union:s,instanceOf:l,arrayOf:p,objectOf:f,shape:d,exact:m,custom:v},y=function(e){var t=e.name,r=e.value,o=e.required,a=e.raw,i=x[t];return i?n.createElement(i,{value:r,name:t,isRequired:o,raw:a}):"unknown type"},h=y,_=r(70228),b=function(e){var t=e.value;return t&&"undefined"!==t?n.createElement(n.Fragment,null,n.createElement(a.Z,{variant:"light"},"Default"),n.createElement("span",{className:"small text-monospace ml-2"},t)):null};b.defaultProps={value:void 0};var g=function(e){var t=e.name,r=e.type,i=e.required,u=e.defaultValue,c=e.description;return n.createElement("li",{className:"px-4 border-top border-light-300"},n.createElement("div",{className:"my-3"},n.createElement("div",{className:"mb-2"},n.createElement("h5",{className:"d-inline mb-0 mr-1"},t+" "),n.createElement(h,r),i&&n.createElement(n.Fragment,null," ",n.createElement(a.Z,{variant:"light"},"Required"))),n.createElement("div",{className:"x-small"},c?n.createElement(o.MDXRenderer,null,c.childMdx.body):null),n.createElement(b,u)))};g.defaultProps={required:!1,defaultValue:{},description:void 0};var E=function(e){var t=e.props,r=e.displayName,o=e.content;return n.createElement(_.ZP,{className:"mb-5",id:"props-api-table-"+r},n.createElement(_.ZP.Body,{className:"pb-1"},n.createElement(_.ZP.Title,{as:"h3"},r," Props API"),o&&n.createElement("div",{className:"small mb-3"},o)),t.length>0?n.createElement("ul",{className:"list-unstyled"},t.map((function(e){return n.createElement(g,Object.assign({key:e.name},e))}))):n.createElement("div",{className:"pb-3 pl-4"},"This component does not receive any props."))};E.defaultProps={props:[],content:void 0,displayName:void 0};var j=E},21379:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(67294),o=r(64983),a=r(25444),i=r(82298),u=r(69733),c=r(67119),s=r(14959),l={pre:function(e){return n.createElement("div",e)},code:u.Z,Link:a.Link};function p(e){var t,r=e.children,a=e.pageContext;return n.createElement(c.Z,null,n.createElement(s.Z,{title:null==a||null===(t=a.frontmatter)||void 0===t?void 0:t.title}),n.createElement(i.Z,{size:"md",className:"py-5"},n.createElement(o.MDXProvider,{components:l},r)))}},1989:function(e,t,r){var n=r(51789),o=r(80401),a=r(57667),i=r(21327),u=r(81866);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},38407:function(e,t,r){var n=r(27040),o=r(14125),a=r(82117),i=r(67518),u=r(13399);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},57071:function(e,t,r){var n=r(10852)(r(55639),"Map");e.exports=n},83369:function(e,t,r){var n=r(24785),o=r(11285),a=r(96e3),i=r(49916),u=r(95265);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,e.exports=c},62705:function(e,t,r){var n=r(55639).Symbol;e.exports=n},29932:function(e){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}},18470:function(e,t,r){var n=r(77813);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},97786:function(e,t,r){var n=r(71811),o=r(40327);e.exports=function(e,t){for(var r=0,a=(t=n(t,e)).length;null!=e&&r<a;)e=e[o(t[r++])];return r&&r==a?e:void 0}},44239:function(e,t,r){var n=r(62705),o=r(89607),a=r(2333),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},28458:function(e,t,r){var n=r(23560),o=r(15346),a=r(13218),i=r(80346),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,p=s.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(n(e)?f:u).test(i(e))}},80531:function(e,t,r){var n=r(62705),o=r(29932),a=r(1469),i=r(33448),u=n?n.prototype:void 0,c=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return c?c.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},71811:function(e,t,r){var n=r(1469),o=r(15403),a=r(55514),i=r(79833);e.exports=function(e,t){return n(e)?e:o(e,t)?[e]:a(i(e))}},14429:function(e,t,r){var n=r(55639)["__core-js_shared__"];e.exports=n},31957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},45050:function(e,t,r){var n=r(37019);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},10852:function(e,t,r){var n=r(28458),o=r(47801);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},89607:function(e,t,r){var n=r(62705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=n?n.toStringTag:void 0;e.exports=function(e){var t=a.call(e,u),r=e[u];try{e[u]=void 0;var n=!0}catch(c){}var o=i.call(e);return n&&(t?e[u]=r:delete e[u]),o}},47801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},51789:function(e,t,r){var n=r(94536);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},80401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},57667:function(e,t,r){var n=r(94536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(t,e)?t[e]:void 0}},21327:function(e,t,r){var n=r(94536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:o.call(t,e)}},81866:function(e,t,r){var n=r(94536);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},15403:function(e,t,r){var n=r(1469),o=r(33448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))}},37019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},15346:function(e,t,r){var n,o=r(14429),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!a&&a in e}},27040:function(e){e.exports=function(){this.__data__=[],this.size=0}},14125:function(e,t,r){var n=r(18470),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():o.call(t,r,1),--this.size,!0)}},82117:function(e,t,r){var n=r(18470);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},67518:function(e,t,r){var n=r(18470);e.exports=function(e){return n(this.__data__,e)>-1}},13399:function(e,t,r){var n=r(18470);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},24785:function(e,t,r){var n=r(1989),o=r(38407),a=r(57071);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},11285:function(e,t,r){var n=r(45050);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},96e3:function(e,t,r){var n=r(45050);e.exports=function(e){return n(this,e).get(e)}},49916:function(e,t,r){var n=r(45050);e.exports=function(e){return n(this,e).has(e)}},95265:function(e,t,r){var n=r(45050);e.exports=function(e,t){var r=n(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},24523:function(e,t,r){var n=r(88306);e.exports=function(e){var t=n(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}},94536:function(e,t,r){var n=r(10852)(Object,"create");e.exports=n},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,r){var n=r(31957),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();e.exports=a},55514:function(e,t,r){var n=r(24523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=n((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,r,n,o){t.push(n?o.replace(a,"$1"):r||e)})),t}));e.exports=i},40327:function(e,t,r){var n=r(33448);e.exports=function(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},80346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(r){}try{return e+""}catch(r){}}return""}},77813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},27361:function(e,t,r){var n=r(97786);e.exports=function(e,t,r){var o=null==e?void 0:n(e,t);return void 0===o?r:o}},1469:function(e){var t=Array.isArray;e.exports=t},23560:function(e,t,r){var n=r(44239),o=r(13218);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,r){var n=r(44239),o=r(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},88306:function(e,t,r){var n=r(83369);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(o.Cache||n),r}o.Cache=n,e.exports=o},79833:function(e,t,r){var n=r(80531);e.exports=function(e){return null==e?"":n(e)}}}]);
//# sourceMappingURL=component---src-pages-foundations-icons-mdx-3788000345a88288bce3.js.map