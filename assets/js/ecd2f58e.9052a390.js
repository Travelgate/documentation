"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64959],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75733:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(87462),n=a(67294),l=a(3905);const o={id:"stats-real-time-range-data",title:"StatsRealTimeRangeData",hide_table_of_contents:!1},i=void 0,s={unversionedId:"objects/stats-real-time-range-data",id:"objects/stats-real-time-range-data",title:"StatsRealTimeRangeData",description:"No description",source:"@site/api/objects/stats-real-time-range-data.mdx",sourceDirName:"objects",slug:"/objects/stats-real-time-range-data",permalink:"/api/objects/stats-real-time-range-data",draft:!1,tags:[],version:"current",frontMatter:{id:"stats-real-time-range-data",title:"StatsRealTimeRangeData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatsQuery",permalink:"/api/objects/stats-query"},next:{title:"StatsRealTimeRange",permalink:"/api/objects/stats-real-time-range"}},c={},d=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRealTimeRangeData.<b>from</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsrealtimerangedatabfrombcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRealTimeRangeData.<b>to</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsrealtimerangedatabtobcodedatetime-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[s,c]=(0,n.useState)(i);return(0,l.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&o)},g={Bullet:d,SpecifiedBy:m,Badge:p,toc:u,Details:f},b="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(b,(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type StatsRealTimeRangeData {\n  from: DateTime\n  to: DateTime\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statsrealtimerangedatabfrombcodedatetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StatsRealTimeRangeData.",(0,l.kt)("b",null,"from"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statsrealtimerangedatabtobcodedatetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StatsRealTimeRangeData.",(0,l.kt)("b",null,"to"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/stats-real-time-range"},(0,l.kt)("inlineCode",{parentName:"a"},"StatsRealTimeRange"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);