"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},g="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=d(n),p=o,m=g["".concat(r,".").concat(p)]||g[p]||b[p]||i;return n?a.createElement(m,c(c({ref:t},s),{},{components:n})):a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[g]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<i;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71471:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var a=n(87462),o=n(67294),i=n(3905);const c={id:"activation-connection",title:"ActivationConnection",hide_table_of_contents:!1},l=void 0,r={unversionedId:"objects/activation-connection",id:"objects/activation-connection",title:"ActivationConnection",description:"No description",source:"@site/api/objects/activation-connection.mdx",sourceDirName:"objects",slug:"/objects/activation-connection",permalink:"/api/objects/activation-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"activation-connection",title:"ActivationConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Accommodation",permalink:"/api/objects/accommodation"},next:{title:"ActivationData",permalink:"/api/objects/activation-data"}},d={},s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivationConnection.<b>edges</b></code><Bullet /><code>[ActivationEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-activationconnectionbedgesbcodeactivationedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivationConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-activationconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivationConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-activationconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivationConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activationconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[r,d]=(0,o.useState)(l);return(0,i.kt)("details",(0,a.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:n),r&&c)},u={Bullet:s,SpecifiedBy:g,Badge:b,toc:p,Details:m},f="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivationConnection {\n  edges: [ActivationEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activationconnectionbedgesbcodeactivationedge--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivationConnection.",(0,i.kt)("b",null,"edges"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/activation-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[ActivationEdge]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activationconnectionbpageinfobcodepageinfo--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivationConnection.",(0,i.kt)("b",null,"pageInfo"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activationconnectionbadvisemessagebcodeadvisemessage--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivationConnection.",(0,i.kt)("b",null,"adviseMessage"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-activationconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivationConnection.adviseMessage.",(0,i.kt)("b",null,"level"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activationconnectionbtotalcountbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivationConnection.",(0,i.kt)("b",null,"totalCount"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/activation-query"},(0,i.kt)("inlineCode",{parentName:"a"},"ActivationQuery"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);