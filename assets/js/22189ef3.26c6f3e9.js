"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13167:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905);const i={id:"service-integration-type",title:"ServiceIntegrationType",hide_table_of_contents:!1},l=void 0,c={unversionedId:"enums/service-integration-type",id:"enums/service-integration-type",title:"ServiceIntegrationType",description:"No description",source:"@site/api/enums/service-integration-type.mdx",sourceDirName:"enums",slug:"/enums/service-integration-type",permalink:"/api/enums/service-integration-type",draft:!1,tags:[],version:"current",frontMatter:{id:"service-integration-type",title:"ServiceIntegrationType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ServiceApiType",permalink:"/api/enums/service-api-type"},next:{title:"ServiceOperationType",permalink:"/api/enums/service-operation-type"}},p={},s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ServiceIntegrationType.<b>SITH</b></code>",id:"code-style-fontweight-normal-serviceintegrationtypebsithbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ServiceIntegrationType.<b>WORKER</b></code>",id:"code-style-fontweight-normal-serviceintegrationtypebworkerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ServiceIntegrationType.<b>CONNECTORS</b></code>",id:"code-style-fontweight-normal-serviceintegrationtypebconnectorsbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[c,p]=(0,a.useState)(l);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&i)},f={Bullet:s,SpecifiedBy:u,Badge:d,toc:m,Details:y},g="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ServiceIntegrationType {\n  SITH\n  WORKER\n  CONNECTORS\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceintegrationtypebsithbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceIntegrationType.",(0,o.kt)("b",null,"SITH")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceintegrationtypebworkerbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceIntegrationType.",(0,o.kt)("b",null,"WORKER")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceintegrationtypebconnectorsbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceIntegrationType.",(0,o.kt)("b",null,"CONNECTORS")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/service-integration-data"},(0,o.kt)("inlineCode",{parentName:"a"},"ServiceIntegrationData"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/supplier-service-integration-data"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplierServiceIntegrationData"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);