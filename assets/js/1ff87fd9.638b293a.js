"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54893],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,p=u["".concat(s,".").concat(m)]||u[m]||b[m]||d;return a?n.createElement(p,l(l({ref:t},i),{},{components:a})):n.createElement(p,l({ref:t},i))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,l=new Array(d);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<d;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68081:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(87462),r=a(67294),d=a(3905);const l={id:"hub-user",title:"HubUser",hide_table_of_contents:!1},o=void 0,s={unversionedId:"objects/hub-user",id:"objects/hub-user",title:"HubUser",description:"No description",source:"@site/api/objects/hub-user.mdx",sourceDirName:"objects",slug:"/objects/hub-user",permalink:"/api/objects/hub-user",draft:!1,tags:[],version:"current",frontMatter:{id:"hub-user",title:"HubUser",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HubUserData",permalink:"/api/objects/hub-user-data"},next:{title:"Individual",permalink:"/api/objects/individual"}},c={},i=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HubUser.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubuserbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubUser.<b>hubUserData</b></code><Bullet /><code>HubUserData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hubuserbhubuserdatabcodehubuserdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubUser.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hubuserbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubUser.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubuserbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubUser.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubuserbupdatedatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:o=!1}=e;const[s,c]=(0,r.useState)(o);return(0,d.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&l)},g={Bullet:i,SpecifiedBy:u,Badge:b,toc:m,Details:p},y="wrapper";function f(e){let{components:t,...a}=e;return(0,d.kt)(y,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type HubUser implements Node {\n  code: ID!\n  hubUserData: HubUserData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-hubuserbcodebcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"HubUser.",(0,d.kt)("b",null,"code"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-hubuserbhubuserdatabcodehubuserdata-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"HubUser.",(0,d.kt)("b",null,"hubUserData"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/hub-user-data"},(0,d.kt)("inlineCode",{parentName:"a"},"HubUserData"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-hubuserbadvisemessagebcodeadvisemessage--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"HubUser.",(0,d.kt)("b",null,"adviseMessage"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,d.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-hubuseradvisemessageblevelbcodeadvisemessagelevel--"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"HubUser.adviseMessage.",(0,d.kt)("b",null,"level"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,d.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,d.kt)("h4",{id:"code-style-fontweight-normal-hubuserbcreatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"HubUser.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-hubuserbupdatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"HubUser.",(0,d.kt)("b",null,"updatedAt"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"node-"},(0,d.kt)("a",{parentName:"h4",href:"/api/interfaces/node"},(0,d.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/objects/admin-mutation"},(0,d.kt)("inlineCode",{parentName:"a"},"AdminMutation"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,d.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);