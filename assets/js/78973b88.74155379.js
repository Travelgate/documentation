"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||c;return n?r.createElement(m,o(o({ref:t},i),{},{components:n})):r.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<c;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91140:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>f});var r=n(87462),a=n(67294),c=n(3905);const o={id:"speed-access-edge",title:"SpeedAccessEdge",hide_table_of_contents:!1},s=void 0,l={unversionedId:"objects/speed-access-edge",id:"objects/speed-access-edge",title:"SpeedAccessEdge",description:"No description",source:"@site/api/objects/speed-access-edge.mdx",sourceDirName:"objects",slug:"/objects/speed-access-edge",permalink:"/api/objects/speed-access-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"speed-access-edge",title:"SpeedAccessEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SpeedAccessData",permalink:"/api/objects/speed-access-data"},next:{title:"SpeedAccess",permalink:"/api/objects/speed-access"}},d={},i=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedAccessEdge.<b>node</b></code><Bullet /><code>SpeedAccess</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-speedaccessedgebnodebcodespeedaccess-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:s=!1}=e;const[l,d]=(0,a.useState)(s);return(0,c.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&o)},b={Bullet:i,SpecifiedBy:p,Badge:u,toc:f,Details:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(g,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type SpeedAccessEdge {\n  node: SpeedAccess\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-speedaccessedgebnodebcodespeedaccess-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SpeedAccessEdge.",(0,c.kt)("b",null,"node"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/speed-access"},(0,c.kt)("inlineCode",{parentName:"a"},"SpeedAccess"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/speed-access-collection"},(0,c.kt)("inlineCode",{parentName:"a"},"SpeedAccessCollection"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);