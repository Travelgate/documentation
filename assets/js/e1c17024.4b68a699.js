"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10080],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),d=i(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(u,l(l({ref:t},s),{},{components:a})):r.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var g={};for(var c in t)hasOwnProperty.call(t,c)&&(g[c]=t[c]);g.originalType=e,g[d]="string"==typeof e?e:n,l[1]=g;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70927:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>g,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=a(87462),n=a(67294),o=a(3905);const l={id:"aggregate",title:"Aggregate",hide_table_of_contents:!1},g=void 0,c={unversionedId:"objects/aggregate",id:"objects/aggregate",title:"Aggregate",description:"No description",source:"@site/api/objects/aggregate.mdx",sourceDirName:"objects",slug:"/objects/aggregate",permalink:"/api/objects/aggregate",draft:!1,tags:[],version:"current",frontMatter:{id:"aggregate",title:"Aggregate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AggregateSum",permalink:"/api/objects/aggregate-sum"},next:{title:"AirportData",permalink:"/api/objects/airport-data"}},i={},s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Aggregate.<b>sum</b></code><Bullet /><code>AggregateSum</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-aggregatebsumbcodeaggregatesum-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Aggregate.<b>max</b></code><Bullet /><code>AggregateMax</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-aggregatebmaxbcodeaggregatemax-",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:g=!1}=e;const[c,i]=(0,n.useState)(g);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},b={Bullet:s,SpecifiedBy:d,Badge:p,toc:m,Details:u},f="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Aggregate {\n  sum: AggregateSum\n  max: AggregateMax\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-aggregatebsumbcodeaggregatesum-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Aggregate.",(0,o.kt)("b",null,"sum"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/aggregate-sum"},(0,o.kt)("inlineCode",{parentName:"a"},"AggregateSum"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-aggregatebmaxbcodeaggregatemax-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Aggregate.",(0,o.kt)("b",null,"max"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/aggregate-max"},(0,o.kt)("inlineCode",{parentName:"a"},"AggregateMax"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/booking-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"BookingAggregation"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);