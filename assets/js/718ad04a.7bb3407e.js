"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55220],{3905:(t,e,a)=>{a.d(e,{Zo:()=>f,kt:()=>b});var i=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,o=function(t,e){if(null==t)return{};var a,i,o={},c=Object.keys(t);for(i=0;i<c.length;i++)a=c[i],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(i=0;i<c.length;i++)a=c[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var n=i.createContext({}),r=function(t){var e=i.useContext(n),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},f=function(t){var e=r(t.components);return i.createElement(n.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var a=t.components,o=t.mdxType,c=t.originalType,n=t.parentName,f=l(t,["components","mdxType","originalType","parentName"]),p=r(a),m=o,b=p["".concat(n,".").concat(m)]||p[m]||d[m]||c;return a?i.createElement(b,s(s({ref:e},f),{},{components:a})):i.createElement(b,s({ref:e},f))}));function b(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var c=a.length,s=new Array(c);s[0]=m;var l={};for(var n in e)hasOwnProperty.call(e,n)&&(l[n]=e[n]);l.originalType=t,l[p]="string"==typeof t?t:o,s[1]=l;for(var r=2;r<c;r++)s[r]=a[r];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11500:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>d,Bullet:()=>f,Details:()=>b,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>n,toc:()=>m});var i=a(87462),o=a(67294),c=a(3905);const s={id:"traffic-optimization-stats-hotel-blacklist-access",title:"TrafficOptimizationStatsHotelBlacklistAccess",hide_table_of_contents:!1},l=void 0,n={unversionedId:"objects/traffic-optimization-stats-hotel-blacklist-access",id:"objects/traffic-optimization-stats-hotel-blacklist-access",title:"TrafficOptimizationStatsHotelBlacklistAccess",description:"No description",source:"@site/api/objects/traffic-optimization-stats-hotel-blacklist-access.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-stats-hotel-blacklist-access",permalink:"/api/objects/traffic-optimization-stats-hotel-blacklist-access",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-stats-hotel-blacklist-access",title:"TrafficOptimizationStatsHotelBlacklistAccess",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationStatsHotelBlacklistAccessEdge",permalink:"/api/objects/traffic-optimization-stats-hotel-blacklist-access-edge"},next:{title:"TrafficOptimizationStatsHotelBlacklistEdge",permalink:"/api/objects/traffic-optimization-stats-hotel-blacklist-edge"}},r={},f=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=t=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),d=t=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:t.class},t.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationStatsHotelBlacklistAccess.<b>access</b></code><Bullet /><code>Access!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationstatshotelblacklistaccessbaccessbcodeaccess--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationStatsHotelBlacklistAccess.<b>hotels</b></code><Bullet /><code>TrafficOptimizationHotelStatsData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationstatshotelblacklistaccessbhotelsbcodetrafficoptimizationhotelstatsdata-",level:4},{value:"Member of",id:"member-of",level:3}],b=t=>{let{dataOpen:e,dataClose:a,children:s,startOpen:l=!1}=t;const[n,r]=(0,o.useState)(l);return(0,c.kt)("details",(0,i.Z)({},n?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:t=>{t.preventDefault(),r((t=>!t))},style:{listStyle:"none"}},n?e:a),n&&s)},u={Bullet:f,SpecifiedBy:p,Badge:d,toc:m,Details:b},k="wrapper";function g(t){let{components:e,...a}=t;return(0,c.kt)(k,(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationStatsHotelBlacklistAccess {\n  access: Access!\n  hotels: TrafficOptimizationHotelStatsData\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationstatshotelblacklistaccessbaccessbcodeaccess--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationStatsHotelBlacklistAccess.",(0,c.kt)("b",null,"access"))),(0,c.kt)(f,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/access"},(0,c.kt)("inlineCode",{parentName:"a"},"Access!"))," ",(0,c.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationstatshotelblacklistaccessbhotelsbcodetrafficoptimizationhotelstatsdata-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationStatsHotelBlacklistAccess.",(0,c.kt)("b",null,"hotels"))),(0,c.kt)(f,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-hotel-stats-data"},(0,c.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelStatsData"))," ",(0,c.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-stats-hotel-blacklist-access-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsHotelBlacklistAccessEdge"))," ",(0,c.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);