"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)a=c[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)a=c[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),g=s(a),b=n,p=g["".concat(i,".").concat(b)]||g[b]||y[b]||c;return a?o.createElement(p,l(l({ref:t},d),{},{components:a})):o.createElement(p,l({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=b;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[g]="string"==typeof e?e:n,l[1]=r;for(var s=2;s<c;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},34094:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>b});var o=a(87462),n=a(67294),c=a(3905);const l={id:"social-category-connection",title:"SocialCategoryConnection",hide_table_of_contents:!1},r=void 0,i={unversionedId:"objects/social-category-connection",id:"objects/social-category-connection",title:"SocialCategoryConnection",description:"No description",source:"@site/api/objects/social-category-connection.mdx",sourceDirName:"objects",slug:"/objects/social-category-connection",permalink:"/api/objects/social-category-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"social-category-connection",title:"SocialCategoryConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ServiceStatus",permalink:"/api/objects/service-status"},next:{title:"SocialCategoryData",permalink:"/api/objects/social-category-data"}},s={},d=()=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,c.kt)(n.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SocialCategoryConnection.<b>edges</b></code><Bullet /><code>[SocialCategoryEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-socialcategoryconnectionbedgesbcodesocialcategoryedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SocialCategoryConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-socialcategoryconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SocialCategoryConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-socialcategoryconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SocialCategoryConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-socialcategoryconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[i,s]=(0,n.useState)(r);return(0,c.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},m={Bullet:d,SpecifiedBy:g,Badge:y,toc:b,Details:p},u="wrapper";function f(e){let{components:t,...a}=e;return(0,c.kt)(u,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type SocialCategoryConnection {\n  edges: [SocialCategoryEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage]\n  totalCount: Int!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-socialcategoryconnectionbedgesbcodesocialcategoryedge--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SocialCategoryConnection.",(0,c.kt)("b",null,"edges"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/social-category-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"[SocialCategoryEdge]"))," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-socialcategoryconnectionbpageinfobcodepageinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SocialCategoryConnection.",(0,c.kt)("b",null,"pageInfo"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-socialcategoryconnectionbadvisemessagebcodeadvisemessage--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SocialCategoryConnection.",(0,c.kt)("b",null,"adviseMessage"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,c.kt)("inlineCode",{parentName:"a"},"[AdviseMessage]"))," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-socialcategoryconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SocialCategoryConnection.adviseMessage.",(0,c.kt)("b",null,"level"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,c.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,c.kt)("h4",{id:"code-style-fontweight-normal-socialcategoryconnectionbtotalcountbcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SocialCategoryConnection.",(0,c.kt)("b",null,"totalCount"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/social-query"},(0,c.kt)("inlineCode",{parentName:"a"},"SocialQuery"))," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);