(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0jh0":function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},"2klF":function(e,n){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"8tge":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t("8o2o"),o=(t("q1tI"),t("7ljp")),c=t("KcSJ"),a=(t("mwIZ"),t("NJaX")),i=t("BXwR"),l={},u={query:"591356024",_frontmatter:l},s=c.a;function p(e){var n,t=e.components,c=Object(r.a)(e,["components"]);return Object(o.mdx)(s,Object.assign({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Breadcrumbs"),Object(o.mdx)(i.a,{frontmatter:null==c||null===(n=c.pageContext)||void 0===n?void 0:n.frontmatter,mdxType:"SingleComponentStatus"}),Object(o.mdx)("h5",null,"Basic Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Breadcrumb\n  links={[\n    { label: 'Link 1', url: '/link-1' },\n    { label: 'Link 2', url: '/link-2' },\n    { label: 'Link 3', url: '/link-3' },\n  ]}\n/>\n")),Object(o.mdx)("h5",null,"With active label"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Breadcrumb\n  links={[\n    { label: 'Link 1', url: '/link-1' },\n    { label: 'Link 2', url: '/link-2' },\n    { label: 'Link 3', url: '/link-3' },\n  ]}\n  activeLabel=\"Link 4\"\n/>\n")),Object(o.mdx)("h5",null,"With custom spacer"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Breadcrumb\n  links={[\n    { label: 'Link 1', url: '/link-1' },\n    { label: 'Link 2', url: '/link-2' },\n    { label: 'Link 3', url: '/link-3' },\n  ]}\n  spacer={<span className=\"custom-spacer\">/</span>}\n/>\n")),Object(o.mdx)(a.a,Object.assign({},c.data.componentMetadata,{mdxType:"PropsTable"})))}p.isMDXComponent=!0},"A2+M":function(e,n,t){var r=t("X8hv");e.exports={MDXRenderer:r}},Ck4i:function(e,n,t){var r=t("Q83E"),o=t("2klF");function c(n,t,a){return o()?e.exports=c=Reflect.construct:e.exports=c=function(e,n,t){var o=[null];o.push.apply(o,n);var c=new(Function.bind.apply(e,o));return t&&r(c,t.prototype),c},c.apply(null,arguments)}e.exports=c},KcSJ:function(e,n,t){"use strict";var r=t("q1tI"),o=t.n(r),c=t("A2+M"),a=t("7ljp"),i=t("MhRC"),l=(t("hZTp"),{pre:function(e){return o.a.createElement("div",e)},code:i.a}),u=function(e){var n=e.children,t=n;return"string"==typeof t&&(t=o.a.createElement(c.MDXRenderer,null,n)),o.a.createElement(a.MDXProvider,{components:l},t)};n.a=function(e){return o.a.createElement("div",null,o.a.createElement(u,null,e.children))}},Q83E:function(e,n){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,r)}e.exports=t},R7tm:function(e,n,t){var r=t("qHws"),o=t("gC2u"),c=t("dQcQ"),a=t("m7BV");e.exports=function(e){return r(e)||o(e)||c(e)||a()}},X8hv:function(e,n,t){var r=t("Ck4i"),o=t("R7tm"),c=t("0jh0"),a=t("uDP2");function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=t("q1tI"),s=t("7ljp"),p=s.useMDXComponents,f=s.mdx,m=t("BfwJ").useMDXScope;e.exports=function(e){var n=e.scope,t=e.components,c=e.children,i=a(e,["scope","components","children"]),s=p(t),b=m(n),d=u.useMemo((function(){if(!c)return null;var e=l({React:u,mdx:f},b),n=Object.keys(e),t=n.map((function(n){return e[n]}));return r(Function,["_fn"].concat(o(n),[""+c])).apply(void 0,[{}].concat(o(t)))}),[c,n]);return u.createElement(d,l({components:s},i))}},dQcQ:function(e,n,t){var r=t("hMe3");e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},gC2u:function(e,n){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},m7BV:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(e,n,t){var r=t("hMe3");e.exports=function(e){if(Array.isArray(e))return r(e)}}}]);
//# sourceMappingURL=component---src-pages-components-breadcrumbs-mdx-0c1d62a6800253c66b51.js.map