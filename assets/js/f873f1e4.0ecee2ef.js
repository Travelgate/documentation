"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,b=p["".concat(c,".").concat(g)]||p[g]||u[g]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90324:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var r=n(87462),a=n(67294),l=n(3905);const o={id:"client-edge",title:"ClientEdge",hide_table_of_contents:!1},i=void 0,c={unversionedId:"objects/client-edge",id:"objects/client-edge",title:"ClientEdge",description:"Client connection edge",source:"@site/api/objects/client-edge.mdx",sourceDirName:"objects",slug:"/objects/client-edge",permalink:"/api/objects/client-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"client-edge",title:"ClientEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ClientData",permalink:"/api/objects/client-data"},next:{title:"Client",permalink:"/api/objects/client"}},d={},s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ClientEdge.<b>node</b></code><Bullet /><code>Client</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-clientedgebnodebcodeclient-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ClientEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-clientedgebcursorbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[c,d]=(0,a.useState)(i);return(0,l.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},m={Bullet:s,SpecifiedBy:p,Badge:u,toc:g,Details:b},f="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Client connection edge"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type ClientEdge {\n  node: Client\n  cursor: String!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-clientedgebnodebcodeclient-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ClientEdge.",(0,l.kt)("b",null,"node"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/client"},(0,l.kt)("inlineCode",{parentName:"a"},"Client"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Client item")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-clientedgebcursorbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ClientEdge.",(0,l.kt)("b",null,"cursor"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Cursor to the next item")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/client-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"ClientConnection"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);