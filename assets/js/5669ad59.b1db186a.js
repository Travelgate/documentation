"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44268],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>m});var i=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=i.createContext({}),l=function(t){var e=i.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},g=function(t){var e=l(t.components);return i.createElement(s.Provider,{value:e},t.children)},f="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,g=c(t,["components","mdxType","originalType","parentName"]),f=l(a),d=n,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||r;return a?i.createElement(m,o(o({ref:e},g),{},{components:a})):i.createElement(m,o({ref:e},g))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[f]="string"==typeof t?t:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43297:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>p,Bullet:()=>g,Details:()=>m,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(87462),n=a(67294),r=a(3905);const o={id:"traffic-optimization-stats-aggregation-edge",title:"TrafficOptimizationStatsAggregationEdge",hide_table_of_contents:!1},c=void 0,s={unversionedId:"objects/traffic-optimization-stats-aggregation-edge",id:"objects/traffic-optimization-stats-aggregation-edge",title:"TrafficOptimizationStatsAggregationEdge",description:"No description",source:"@site/api/objects/traffic-optimization-stats-aggregation-edge.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-stats-aggregation-edge",permalink:"/api/objects/traffic-optimization-stats-aggregation-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-stats-aggregation-edge",title:"TrafficOptimizationStatsAggregationEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationStatsAggregationData",permalink:"/api/objects/traffic-optimization-stats-aggregation-data"},next:{title:"TrafficOptimizationStatsAggregation",permalink:"/api/objects/traffic-optimization-stats-aggregation"}},l={},g=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=t=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),p=t=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{className:t.class},t.text)),d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationStatsAggregationEdge.<b>node</b></code><Bullet /><code>TrafficOptimizationStatsAggregation</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationstatsaggregationedgebnodebcodetrafficoptimizationstatsaggregation-",level:4},{value:"Member Of",id:"member-of",level:3}],m=t=>{let{dataOpen:e,dataClose:a,children:o,startOpen:c=!1}=t;const[s,l]=(0,n.useState)(c);return(0,r.kt)("details",(0,i.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:t=>{t.preventDefault(),l((t=>!t))},style:{listStyle:"none"}},s?e:a),s&&o)},u={Bullet:g,SpecifiedBy:f,Badge:p,toc:d,Details:m},b="wrapper";function y(t){let{components:e,...a}=t;return(0,r.kt)(b,(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationStatsAggregationEdge {\n  node: TrafficOptimizationStatsAggregation\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationstatsaggregationedgebnodebcodetrafficoptimizationstatsaggregation-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationStatsAggregationEdge.",(0,r.kt)("b",null,"node"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-stats-aggregation"},(0,r.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsAggregation"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-stats-aggregation-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsAggregationConnection"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);