"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,u=p["".concat(i,".").concat(b)]||p[b]||g[b]||l;return n?o.createElement(u,r(r({ref:t},s),{},{components:n})):o.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,r[1]=c;for(var d=2;d<l;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},29727:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>b});var o=n(87462),a=n(67294),l=n(3905);const r={id:"hotel-connection",title:"HotelConnection",hide_table_of_contents:!1},c=void 0,i={unversionedId:"objects/hotel-connection",id:"objects/hotel-connection",title:"HotelConnection",description:"HotelList definition",source:"@site/api/objects/hotel-connection.mdx",sourceDirName:"objects",slug:"/objects/hotel-connection",permalink:"/api/objects/hotel-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-connection",title:"HotelConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelCommitPayload",permalink:"/api/objects/hotel-commit-payload"},next:{title:"HotelData",permalink:"/api/objects/hotel-data"}},d={},s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelConnection.<b>edges</b></code><Bullet /><code>[HotelEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelconnectionbedgesbcodehoteledge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelConnection.<b>count</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelconnectionbcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelConnection.<b>token</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelconnectionbtokenbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelconnectionbpageinfobcodepageinfo--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:c=!1}=e;const[i,d]=(0,a.useState)(c);return(0,l.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&r)},m={Bullet:s,SpecifiedBy:p,Badge:g,toc:b,Details:u},f="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"HotelList definition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelConnection {\n  edges: [HotelEdge]\n  count: Int!\n  token: String\n  pageInfo: PageInfo!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelconnectionbedgesbcodehoteledge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelConnection.",(0,l.kt)("b",null,"edges"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/hotel-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"[HotelEdge]"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelconnectionbcountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelConnection.",(0,l.kt)("b",null,"count"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelconnectionbtokenbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelConnection.",(0,l.kt)("b",null,"token"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelconnectionbpageinfobcodepageinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelConnection.",(0,l.kt)("b",null,"pageInfo"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates info about page")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/hotel-xquery"},(0,l.kt)("inlineCode",{parentName:"a"},"HotelXQuery"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);