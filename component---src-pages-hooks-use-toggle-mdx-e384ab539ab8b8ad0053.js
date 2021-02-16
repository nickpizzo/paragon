(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"0jh0":function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},"2klF":function(e,n){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"A2+M":function(e,n,t){var r=t("X8hv");e.exports={MDXRenderer:r}},Ck4i:function(e,n,t){var r=t("Q83E"),o=t("2klF");function a(n,t,c){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,n,t){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return t&&r(a,t.prototype),a},a.apply(null,arguments)}e.exports=a},"G+IG":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t("8o2o"),o=(t("q1tI"),t("7ljp")),a=t("KcSJ"),c=(t("mwIZ"),t("BXwR")),l={},i={_frontmatter:l},u=a.a;function s(e){var n,t=e.components,a=Object(r.a)(e,["components"]);return Object(o.mdx)(u,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"useToggle"),Object(o.mdx)(c.a,{frontmatter:null==a||null===(n=a.pageContext)||void 0===n?void 0:n.frontmatter,mdxType:"SingleComponentStatus"}),Object(o.mdx)("p",null,"Toggle a boolean value on or off with handlers"),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"const [state, setOn, setOff, toggle] = useToggle(initialState, handlers);")),Object(o.mdx)("h4",null,"Sample Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'() => {\n  const defaultIsOn = true;\n  const handlers = {\n    handleToggleOn: () => console.log(\'called handleToggleOn\'),\n    handleToggleOff: () => console.log(\'called handleToggleOff\'),\n    handleToggle: () => console.log(\'called handleToggle\'),\n  }\n\n  const [isOn, setOn, setOff, toggle] = useToggle(defaultIsOn, handlers);\n\n  return (\n    <div>\n      <p>\n        Toggle is\n        {isOn\n          ? <Badge variant="success">On</Badge>\n          : <Badge variant="light">Off</Badge>\n        }\n      </p>\n\n      <Button onClick={setOn} className="mr-2" variant="outline-primary">set on</Button>\n      <Button onClick={setOff} className="mr-2" variant="outline-primary">set off</Button>\n      <Button onClick={toggle} className="mr-2" variant="outline-primary">toggle</Button>\n    </div>\n  );\n}\n')),Object(o.mdx)("h4",null,"Basic Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'() => {\n  const [isOpen, open, close] = useToggle(false);\n\n  return (\n    <Card style={{ width: \'18rem\' }}>\n      <Card.Img variant="top" src="https://source.unsplash.com/400x200/?nature,flower" />\n      <Card.Body>\n        <Card.Title>Card Title</Card.Title>\n        <Card.Text>\n          Some quick example text to build on the card title and make up the bulk of\n          the card\'s content.\n        </Card.Text>\n        {\n          isOpen ? (\n            <Card.Text>\n              <p>Poutine cred portland heirloom seitan sartorial 90\'s cray. Humblebrag blue bottle venmo, cloud bread cronut neutra sartorial whatever slow-carb tattooed cliche helvetica poutine squid. Direct trade health goth gentrify kitsch, heirloom blog umami synth ennui seitan messenger bag. Literally poutine slow-carb, hexagon leggings seitan readymade.</p>\n              <Button block variant="outline-primary" onClick={close}>Close</Button>\n            </Card.Text>\n          ) : (\n            <Button block variant="outline-primary" onClick={open}>See more</Button>\n          )\n        }\n      </Card.Body>\n    </Card>\n  );\n}\n')))}s.isMDXComponent=!0},KcSJ:function(e,n,t){"use strict";var r=t("q1tI"),o=t.n(r),a=t("A2+M"),c=t("7ljp"),l=t("MhRC"),i=(t("hZTp"),{pre:function(e){return o.a.createElement("div",e)},code:l.a}),u=function(e){var n=e.children,t=n;return"string"==typeof t&&(t=o.a.createElement(a.MDXRenderer,null,n)),o.a.createElement(c.MDXProvider,{components:i},t)};n.a=function(e){return o.a.createElement("div",null,o.a.createElement(u,null,e.children))}},Q83E:function(e,n){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,r)}e.exports=t},R7tm:function(e,n,t){var r=t("qHws"),o=t("gC2u"),a=t("dQcQ"),c=t("m7BV");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},X8hv:function(e,n,t){var r=t("Ck4i"),o=t("R7tm"),a=t("0jh0"),c=t("uDP2");function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=t("q1tI"),s=t("7ljp"),p=s.useMDXComponents,f=s.mdx,d=t("BfwJ").useMDXScope;e.exports=function(e){var n=e.scope,t=e.components,a=e.children,l=c(e,["scope","components","children"]),s=p(t),m=d(n),g=u.useMemo((function(){if(!a)return null;var e=i({React:u,mdx:f},m),n=Object.keys(e),t=n.map((function(n){return e[n]}));return r(Function,["_fn"].concat(o(n),[""+a])).apply(void 0,[{}].concat(o(t)))}),[a,n]);return u.createElement(g,i({components:s},l))}},dQcQ:function(e,n,t){var r=t("hMe3");e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},gC2u:function(e,n){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},m7BV:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(e,n,t){var r=t("hMe3");e.exports=function(e){if(Array.isArray(e))return r(e)}}}]);
//# sourceMappingURL=component---src-pages-hooks-use-toggle-mdx-e384ab539ab8b8ad0053.js.map