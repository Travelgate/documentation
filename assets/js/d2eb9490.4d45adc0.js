"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),p=o,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||l;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},11968:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=r(67294),l=r(3905);const a={id:"alert-mode",title:"AlertMode",hide_table_of_contents:!1},i=void 0,c={unversionedId:"enums/alert-mode",id:"enums/alert-mode",title:"AlertMode",description:"No description",source:"@site/api/enums/alert-mode.mdx",sourceDirName:"enums",slug:"/enums/alert-mode",permalink:"/api/enums/alert-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-mode",title:"AlertMode",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertGroups",permalink:"/api/enums/alert-groups"},next:{title:"AlertRangePrice",permalink:"/api/enums/alert-range-price"}},d={},s=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AlertMode.<b>RELATIVE</b></code>",id:"code-style-fontweight-normal-alertmodebrelativebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AlertMode.<b>ABSOLUTE</b></code>",id:"code-style-fontweight-normal-alertmodebabsolutebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AlertMode.<b>COMPARATIVE</b></code>",id:"code-style-fontweight-normal-alertmodebcomparativebcode",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:a,startOpen:i=!1}=e;const[c,d]=(0,o.useState)(i);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&a)},b={Bullet:s,SpecifiedBy:u,Badge:m,toc:p,Details:f},y="wrapper";function g(e){let{components:t,...r}=e;return(0,l.kt)(y,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AlertMode {\n  RELATIVE\n  ABSOLUTE\n  COMPARATIVE\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertmodebrelativebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertMode.",(0,l.kt)("b",null,"RELATIVE")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertmodebabsolutebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertMode.",(0,l.kt)("b",null,"ABSOLUTE")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertmodebcomparativebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertMode.",(0,l.kt)("b",null,"COMPARATIVE")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/alert-configuration"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertConfiguration"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);