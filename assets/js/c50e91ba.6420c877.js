"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,u=m["".concat(l,".").concat(p)]||m[p]||f[p]||i;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,r[1]=c;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95322:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=n(67294),i=n(3905);const r={id:"traffic-optimization-recommendations-edge",title:"TrafficOptimizationRecommendationsEdge",hide_table_of_contents:!1},c=void 0,l={unversionedId:"objects/traffic-optimization-recommendations-edge",id:"objects/traffic-optimization-recommendations-edge",title:"TrafficOptimizationRecommendationsEdge",description:"No description",source:"@site/api/objects/traffic-optimization-recommendations-edge.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-recommendations-edge",permalink:"/api/objects/traffic-optimization-recommendations-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-recommendations-edge",title:"TrafficOptimizationRecommendationsEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationRecommendationsAllAccesses",permalink:"/api/objects/traffic-optimization-recommendations-all-accesses"},next:{title:"TrafficOptimizationStatsAccessHotelBlacklist",permalink:"/api/objects/traffic-optimization-stats-access-hotel-blacklist"}},d={},s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationRecommendationsEdge.<b>node</b></code><Bullet /><code>TrafficOptimizationRecommendation!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationrecommendationsedgebnodebcodetrafficoptimizationrecommendation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationRecommendationsEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationrecommendationsedgebcursorbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:c=!1}=e;const[l,d]=(0,o.useState)(c);return(0,i.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&r)},g={Bullet:s,SpecifiedBy:m,Badge:f,toc:p,Details:u},b="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationRecommendationsEdge {\n  node: TrafficOptimizationRecommendation!\n  cursor: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationrecommendationsedgebnodebcodetrafficoptimizationrecommendation--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationRecommendationsEdge.",(0,i.kt)("b",null,"node"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-recommendation"},(0,i.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationRecommendation!"))," ",(0,i.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationrecommendationsedgebcursorbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationRecommendationsEdge.",(0,i.kt)("b",null,"cursor"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-recommendations-all-accesses"},(0,i.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationRecommendationsAllAccesses"))," ",(0,i.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);