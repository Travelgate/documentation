"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18678],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),y=s(a),p=o,g=y["".concat(i,".").concat(p)]||y[p]||m[p]||l;return a?n.createElement(g,d(d({ref:t},c),{},{components:a})):n.createElement(g,d({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,d=new Array(l);d[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[y]="string"==typeof e?e:o,d[1]=r;for(var s=2;s<l;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},63607:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>y,assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>d,metadata:()=>i,toc:()=>p});var n=a(87462),o=a(67294),l=a(3905);const d={id:"entity",title:"Entity",hide_table_of_contents:!1},r=void 0,i={unversionedId:"objects/entity",id:"objects/entity",title:"Entity",description:"No description",source:"@site/api/objects/entity.mdx",sourceDirName:"objects",slug:"/objects/entity",permalink:"/api/objects/entity",draft:!1,tags:[],version:"current",frontMatter:{id:"entity",title:"Entity",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"EntityEdge",permalink:"/api/objects/entity-edge"},next:{title:"Environment",permalink:"/api/objects/environment"}},s={},c=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Entity.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-entitybcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Entity.<b>entity</b></code><Bullet /><code>EntityData</code> <Badge class="badge badge--secondary" text="union"/>',id:"code-style-fontweight-normal-entitybentitybcodeentitydata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Entity.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-entitybadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Entity.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-entitybcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Entity.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-entitybupdatedatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:r=!1}=e;const[i,s]=(0,o.useState)(r);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&d)},b={Bullet:c,SpecifiedBy:y,Badge:m,toc:p,Details:g},u="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Entity implements Node {\n  code: ID!\n  entity: EntityData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-entitybcodebcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Entity.",(0,l.kt)("b",null,"code"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-entitybentitybcodeentitydata-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Entity.",(0,l.kt)("b",null,"entity"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/unions/entity-data"},(0,l.kt)("inlineCode",{parentName:"a"},"EntityData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-entitybadvisemessagebcodeadvisemessage--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Entity.",(0,l.kt)("b",null,"adviseMessage"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,l.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of messages"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-entityadvisemessageblevelbcodeadvisemessagelevel--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Entity.adviseMessage.",(0,l.kt)("b",null,"level"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,l.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-entitybcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Entity.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Date created")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-entitybupdatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Entity.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Date updated")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"node-"},(0,l.kt)("a",{parentName:"h4",href:"/api/interfaces/node"},(0,l.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}f.isMDXComponent=!0}}]);