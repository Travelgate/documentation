"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),g=r,f=s["".concat(i,".").concat(g)]||s[g]||c[g]||o;return n?a.createElement(f,p(p({ref:t},d),{},{components:n})):a.createElement(f,p({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,p[1]=l;for(var u=2;u<o;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91407:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>g});var a=n(87462),r=n(67294),o=n(3905);const p={id:"update-group-apisinput",title:"UpdateGroupAPISInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"inputs/update-group-apisinput",id:"inputs/update-group-apisinput",title:"UpdateGroupAPISInput",description:"No description",source:"@site/api/inputs/update-group-apisinput.mdx",sourceDirName:"inputs",slug:"/inputs/update-group-apisinput",permalink:"/api/inputs/update-group-apisinput",draft:!1,tags:[],version:"current",frontMatter:{id:"update-group-apisinput",title:"UpdateGroupAPISInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TravellerInput",permalink:"/api/inputs/traveller-input"},next:{title:"UpdateGroupInput",permalink:"/api/inputs/update-group-input"}},u={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGroupAPISInput.<b>api</b></code><Bullet /><code>[ID!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updategroupapisinputbapibcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGroupAPISInput.<b>group</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updategroupapisinputbgroupbcodeid--",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:p,startOpen:l=!1}=e;const[i,u]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&p)},m={Bullet:d,SpecifiedBy:s,Badge:c,toc:g,Details:f},b="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateGroupAPISInput {\n  api: [ID!]!\n  group: ID!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updategroupapisinputbapibcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateGroupAPISInput.",(0,o.kt)("b",null,"api"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]!"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updategroupapisinputbgroupbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateGroupAPISInput.",(0,o.kt)("b",null,"group"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}y.isMDXComponent=!0}}]);