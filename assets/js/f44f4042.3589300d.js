"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9782],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=o.createContext({}),s=function(e){var n=o.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(r.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=s(t),b=a,m=g["".concat(r,".").concat(b)]||g[b]||p[b]||c;return t?o.createElement(m,i(i({ref:n},d),{},{components:t})):o.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=b;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<c;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},9432:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>r,toc:()=>b});var o=t(87462),a=t(67294),c=t(3905);const i={id:"connection-connection",title:"ConnectionConnection",hide_table_of_contents:!1},l=void 0,r={unversionedId:"objects/connection-connection",id:"objects/connection-connection",title:"ConnectionConnection",description:"Connection (list) of Connections",source:"@site/api/objects/connection-connection.mdx",sourceDirName:"objects",slug:"/objects/connection-connection",permalink:"/api/objects/connection-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"connection-connection",title:"ConnectionConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CompanyCrmData",permalink:"/api/objects/company-crm-data"},next:{title:"ConnectionData",permalink:"/api/objects/connection-data"}},s={},d=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ConnectionConnection.<b>edges</b></code><Bullet /><code>[ConnectionEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-connectionconnectionbedgesbcodeconnectionedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConnectionConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-connectionconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConnectionConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-connectionconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConnectionConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-connectionconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:n,dataClose:t,children:i,startOpen:l=!1}=e;const[r,s]=(0,a.useState)(l);return(0,c.kt)("details",(0,o.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},r?n:t),r&&i)},u={Bullet:d,SpecifiedBy:g,Badge:p,toc:b,Details:m},f="wrapper";function y(e){let{components:n,...t}=e;return(0,c.kt)(f,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Connection (list) of Connections"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type ConnectionConnection {\n  edges: [ConnectionEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionconnectionbedgesbcodeconnectionedge--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ConnectionConnection.",(0,c.kt)("b",null,"edges"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/connection-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"[ConnectionEdge]"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Connection edges of Connection connection")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionconnectionbpageinfobcodepageinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ConnectionConnection.",(0,c.kt)("b",null,"pageInfo"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Page info of the connection")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionconnectionbadvisemessagebcodeadvisemessage--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ConnectionConnection.",(0,c.kt)("b",null,"adviseMessage"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,c.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,c.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-connectionconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ConnectionConnection.adviseMessage.",(0,c.kt)("b",null,"level"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,c.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionconnectionbtotalcountbcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ConnectionConnection.",(0,c.kt)("b",null,"totalCount"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,c.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);