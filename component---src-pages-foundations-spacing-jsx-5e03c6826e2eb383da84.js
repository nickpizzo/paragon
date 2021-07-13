/*! For license information please see component---src-pages-foundations-spacing-jsx-5e03c6826e2eb383da84.js.LICENSE.txt */
(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[746],{75900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=l.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},13378:function(e,t,n){"use strict";var r=n(96156),l=n(19756),a=n(93552),c=n(67294),i=n(57715),o=n.n(i);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){0},n.getHTMLTagForType=function(){var e=this.props.type;return"select"===e||"textarea"===e?e:"input"},n.getClassNameForType=function(){switch(this.props.type){case"file":return"form-control-file";case"checkbox":case"radio":return"form-check-input";default:return"form-control"}},n.setRef=function(e){return e},n.checkHasLabel=function(){this.inputEl.labels.length>0||null===this.inputEl.getAttribute("aria-label")&&console&&console.warn("Input[a11y]: There is no associated label for this Input")},n.renderOptions=function(e){var t=this;return e.map((function(e){var n=e.value,r=e.label,a=e.group,i=(0,l.Z)(e,["value","label","group"]);return a?c.createElement("optgroup",Object.assign({key:"optgroup-"+r,label:r},i),t.renderOptions(a)):c.createElement("option",Object.assign({key:n,value:n},i),r)}),this)},n.render=function(){var e=this.props,t=e.type,n=e.className,r=e.options,a=e.forwardedRef,i=(0,l.Z)(e,["type","className","options","forwardedRef"]),s=this.getHTMLTagForType(),m=u(u({className:o()(this.getClassNameForType(),n),type:"input"===s?t:void 0},i),{},{ref:this.setRef(a)}),p="select"===t?this.renderOptions(r):null;return c.createElement(s,m,p)},t}(c.Component);m.defaultProps={className:void 0,options:[]};var p=c.forwardRef((function(e,t){return c.createElement(m,Object.assign({forwardedRef:t},e))}));t.Z=p},46639:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(67294),l=n(75900),a=n.n(l),c=n(82298),i=n(13378),o=n(30974),s=n(14079),u=[{key:"",name:"all"},{key:"t",name:"top"},{key:"r",name:"right"},{key:"b",name:"bottom"},{key:"l",name:"left"},{key:"x",name:"x direction"},{key:"y",name:"y direction"}],m=[6,5.5,5,4.5,4,3.5,3,2.5,2,1.5,1,0,-1,-1.5,-2,-2.5,-3,-3.5,-4,-4.5,-5,-5.5,-6],p=function(e,t,n){return""+e+t+"-"+(n<0?"n":"")+Math.abs(n)},d=function(e){var t=e.utilityClass;return r.createElement("code",{className:a()(t),style:{display:"flex",alignItems:"center",justifyContent:"center",height:"5rem",textAlign:"center",width:"10rem",background:"rgba(0,0,0,.1)"}},t?"."+t:null)};function f(){var e=(0,r.useState)(3),t=e[0],n=e[1],l=(0,r.useState)("r"),a=l[0],f=l[1],h=p("m",a,t);return r.createElement(s.Z,null,r.createElement(c.Z,{size:"md",className:"py-5"},r.createElement(o.Z,{title:"Spacing"}),r.createElement("h1",null,"Spacing"),r.createElement("h3",null,"Margin"),r.createElement("p",null,"Margin utilities are structured as"," ",r.createElement("code",null,".m{direction}-{level}"),". Negative numbers are represented as ",r.createElement("code",null,"n1"),", ",r.createElement("code",null,"n2"),", ",r.createElement("code",null,"n3"),", etc. Choose a direction and spacing level to change the margin applied to the center block below."),r.createElement("div",{className:"border p-4"},r.createElement("div",{className:"d-flex flex-column align-items-center"},r.createElement("h6",null,"Direction"),r.createElement("div",{className:"mb-2"},u.map((function(e){var t=e.key,n=e.name;return r.createElement("label",{className:"form-check d-inline-block mr-4",htmlFor:"set-direction-"+t},r.createElement(i.Z,{id:"set-direction-"+t,key:t,className:"mt-0",type:"radio",name:"direction",value:t,checked:t===a,onChange:function(e){return f(e.target.value)}}),n)}))),r.createElement("label",{className:"d-block",htmlFor:"set-size"},r.createElement("span",{className:"d-block text-center"},"Spacing Level: ",t),r.createElement("div",{className:"d-flex align-items-center",style:{maxWidth:"20rem"}},"-6",r.createElement(i.Z,{type:"range",id:"set-size",className:"mx-2",min:-6,step:.5,max:6,value:t,onChange:function(e){return n(e.target.value)}}),"6"))),r.createElement("div",{className:"d-flex justify-content-center"},r.createElement(d,null)),r.createElement("div",{className:"d-flex justify-content-center"},r.createElement(d,null),r.createElement("div",{className:"border border-danger  p-0",style:{}},r.createElement(d,{utilityClass:h})),r.createElement(d,null)),r.createElement("div",{className:"d-flex justify-content-center"},r.createElement(d,null))),r.createElement("h3",null,"Padding"),r.createElement("p",null,"Padding utilities are structured the same way:"," ",r.createElement("code",null,".p{direction}-{level}"),"."),r.createElement("h3",null,"All Spacing Utility Classes"),r.createElement("table",{className:"table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"All directions"),r.createElement("th",null,"Top"),r.createElement("th",null,"Right"),r.createElement("th",null,"Bottom"),r.createElement("th",null,"Left"),r.createElement("th",null,"X Direction"),r.createElement("th",null,"Y Direction"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",{colSpan:7},"Margin")),r.createElement("tr",null,u.map((function(e){var t=e.key;return r.createElement("td",null,m.map((function(e){return r.createElement("code",{className:"d-block"},".",p("m",t,e))})))}))),r.createElement("tr",null,r.createElement("th",{colSpan:7},"Padding")),r.createElement("tr",null,u.map((function(e){var t=e.key;return r.createElement("td",null,m.map((function(e){return r.createElement("code",{className:"d-block"},".",p("p",t,e))})))})))))))}d.defaultProps={utilityClass:""}}}]);
//# sourceMappingURL=component---src-pages-foundations-spacing-jsx-5e03c6826e2eb383da84.js.map