"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,b=u["".concat(c,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53984:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),o=n(67294),r=n(3905);const l={id:"timeout",title:"Timeout",hide_table_of_contents:!1},i=void 0,c={unversionedId:"objects/timeout",id:"objects/timeout",title:"Timeout",description:"No description",source:"@site/api/objects/timeout.mdx",sourceDirName:"objects",slug:"/objects/timeout",permalink:"/api/objects/timeout",draft:!1,tags:[],version:"current",frontMatter:{id:"timeout",title:"Timeout",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TimeRange",permalink:"/api/objects/time-range"},next:{title:"TrafficOptimizationAccessConnection",permalink:"/api/objects/traffic-optimization-access-connection"}},s={},d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Timeout.<b>search</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-timeoutbsearchbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Timeout.<b>quote</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-timeoutbquotebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Timeout.<b>book</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-timeoutbbookbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,s]=(0,o.useState)(i);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},f={Bullet:d,SpecifiedBy:u,Badge:m,toc:p,Details:b},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Timeout {\n  search: Int!\n  quote: Int!\n  book: Int!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-timeoutbsearchbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Timeout.",(0,r.kt)("b",null,"search"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Milliseconds before the search connection is closed.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-timeoutbquotebcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Timeout.",(0,r.kt)("b",null,"quote"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Milliseconds before the quote connection is closed.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-timeoutbbookbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Timeout.",(0,r.kt)("b",null,"book"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Milliseconds before the book connection is closed.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-xcommon-settings-data"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelXCommonSettingsData"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-xdefault-settings-data"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelXDefaultSettingsData"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);