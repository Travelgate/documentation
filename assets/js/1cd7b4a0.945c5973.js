"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||c;return n?a.createElement(y,o(o({ref:t},s),{},{components:n})):a.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<c;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62024:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(87462),r=n(67294),c=n(3905);const o={id:"occupancy-range",title:"OccupancyRange",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/occupancy-range",id:"objects/occupancy-range",title:"OccupancyRange",description:"Occupancy Range definition",source:"@site/api/objects/occupancy-range.mdx",sourceDirName:"objects",slug:"/objects/occupancy-range",permalink:"/api/objects/occupancy-range",draft:!1,tags:[],version:"current",frontMatter:{id:"occupancy-range",title:"OccupancyRange",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Metadata",permalink:"/api/objects/metadata"},next:{title:"OccupancyStatic",permalink:"/api/objects/occupancy-static"}},p={},s=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OccupancyRange.<b>min</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-occupancyrangebminbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OccupancyRange.<b>max</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-occupancyrangebmaxbcodeint-",level:4},{value:"Member Of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[i,p]=(0,r.useState)(l);return(0,c.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&o)},f={Bullet:s,SpecifiedBy:d,Badge:u,toc:m,Details:y},g="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Occupancy Range definition"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type OccupancyRange {\n  min: Int\n  max: Int\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-occupancyrangebminbcodeint-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"OccupancyRange.",(0,c.kt)("b",null,"min"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-occupancyrangebmaxbcodeint-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"OccupancyRange.",(0,c.kt)("b",null,"max"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"member-of"},"Member Of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/occupancy-static"},(0,c.kt)("inlineCode",{parentName:"a"},"OccupancyStatic"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);