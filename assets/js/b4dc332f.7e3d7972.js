"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29819],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=c(a),g=o,p=b["".concat(s,".").concat(g)]||b[g]||u[g]||r;return a?n.createElement(p,d(d({ref:t},i),{},{components:a})):n.createElement(p,d({ref:t},i))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,d=new Array(r);d[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[b]="string"==typeof e?e:o,d[1]=l;for(var c=2;c<r;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},67832:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>d,metadata:()=>s,toc:()=>g});var n=a(87462),o=a(67294),r=a(3905);const d={id:"hub-user-data",title:"HubUserData",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/hub-user-data",id:"objects/hub-user-data",title:"HubUserData",description:"No description",source:"@site/api/objects/hub-user-data.mdx",sourceDirName:"objects",slug:"/objects/hub-user-data",permalink:"/api/objects/hub-user-data",draft:!1,tags:[],version:"current",frontMatter:{id:"hub-user-data",title:"HubUserData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HubProvider",permalink:"/api/objects/hub-provider"},next:{title:"HubUser",permalink:"/api/objects/hub-user"}},c={},i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HubUserData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubuserdatabcodebcodeid---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubUserData.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubuserdatabnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubUserData.<b>password</b></code><Bullet /><code>String</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubuserdatabpasswordbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubUserData.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubuserdatabisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubUserData.<b>giataActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubuserdatabgiataactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubUserData.<b>giataConfiguration</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubuserdatabgiataconfigurationbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubUserData.<b>owner</b></code><Bullet /><code>Organization</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hubuserdatabownerbcodeorganization--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[s,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&d)},m={Bullet:i,SpecifiedBy:b,Badge:u,toc:g,Details:p},y="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type HubUserData {\n  code: ID! @deprecated\n  name: String!\n  password: String @deprecated\n  isActive: Boolean!\n  giataActive: Boolean!\n  giataConfiguration: String\n  owner: Organization @deprecated\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hubuserdatabcodebcodeid---"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HubUserData.",(0,r.kt)("b",null,"code"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This information will be removed"))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hubuserdatabnamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HubUserData.",(0,r.kt)("b",null,"name"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hubuserdatabpasswordbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HubUserData.",(0,r.kt)("b",null,"password"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This information will be removed"))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hubuserdatabisactivebcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HubUserData.",(0,r.kt)("b",null,"isActive"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hubuserdatabgiataactivebcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HubUserData.",(0,r.kt)("b",null,"giataActive"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hubuserdatabgiataconfigurationbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HubUserData.",(0,r.kt)("b",null,"giataConfiguration"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hubuserdatabownerbcodeorganization--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HubUserData.",(0,r.kt)("b",null,"owner"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/organization"},(0,r.kt)("inlineCode",{parentName:"a"},"Organization"))," ",(0,r.kt)(u,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This information will be removed"))),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/client-data"},(0,r.kt)("inlineCode",{parentName:"a"},"ClientData"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/hub-user"},(0,r.kt)("inlineCode",{parentName:"a"},"HubUser"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);