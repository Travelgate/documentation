"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},d=Object.keys(e);for(o=0;o<d.length;o++)a=d[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)a=d[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(a),p=r,g=m["".concat(c,".").concat(p)]||m[p]||b[p]||d;return a?o.createElement(g,n(n({ref:t},i),{},{components:a})):o.createElement(g,n({ref:t},i))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,n=new Array(d);n[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,n[1]=l;for(var s=2;s<d;s++)n[s]=a[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},97538:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var o=a(87462),r=a(67294),d=a(3905);const n={id:"room-static",title:"RoomStatic",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/room-static",id:"objects/room-static",title:"RoomStatic",description:"Room Type",source:"@site/api/objects/room-static.mdx",sourceDirName:"objects",slug:"/objects/room-static",permalink:"/api/objects/room-static",draft:!1,tags:[],version:"current",frontMatter:{id:"room-static",title:"RoomStatic",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RoomPrice",permalink:"/api/objects/room-price"},next:{title:"Room",permalink:"/api/objects/room"}},s={},i=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RoomStatic.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-roomstaticbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomStatic.<b>roomData</b></code><Bullet /><code>RoomData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomstaticbroomdatabcoderoomdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomStatic.<b>error</b></code><Bullet /><code>[Error!]</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomstaticberrorbcodeerror---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomStatic.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomstaticbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomStatic.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-roomstaticbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomStatic.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-roomstaticbupdatedatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:l=!1}=e;const[c,s]=(0,r.useState)(l);return(0,d.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&n)},u={Bullet:i,SpecifiedBy:m,Badge:b,toc:p,Details:g},k="wrapper";function y(e){let{components:t,...a}=e;return(0,d.kt)(k,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Room Type"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type RoomStatic implements Node {\n  code: ID!\n  roomData: RoomData\n  error: [Error!] @deprecated\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomstaticbcodebcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomStatic.",(0,d.kt)("b",null,"code"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Room ID")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomstaticbroomdatabcoderoomdata-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomStatic.",(0,d.kt)("b",null,"roomData"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/room-data"},(0,d.kt)("inlineCode",{parentName:"a"},"RoomData"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Room data")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomstaticberrorbcodeerror---"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomStatic.",(0,d.kt)("b",null,"error"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/error"},(0,d.kt)("inlineCode",{parentName:"a"},"[Error!]"))," ",(0,d.kt)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,d.kt)("p",{parentName:"admonition"},"Deprecated from 2019-07-03")),(0,d.kt)("p",{parentName:"blockquote"},"Errors that abort services.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomstaticbadvisemessagebcodeadvisemessage--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomStatic.",(0,d.kt)("b",null,"adviseMessage"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,d.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"List of messages"),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-roomstaticadvisemessageblevelbcodeadvisemessagelevel--"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomStatic.adviseMessage.",(0,d.kt)("b",null,"level"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,d.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomstaticbcreatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomStatic.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Date created")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomstaticbupdatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomStatic.",(0,d.kt)("b",null,"updatedAt"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Date updated")),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"node-"},(0,d.kt)("a",{parentName:"h4",href:"/api/interfaces/node"},(0,d.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/objects/room-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"RoomEdge"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);