"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||r;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},61921:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>y});var o=n(87462),a=n(67294),r=n(3905);const l={id:"location-type",title:"LocationType",hide_table_of_contents:!1},i=void 0,c={unversionedId:"enums/location-type",id:"enums/location-type",title:"LocationType",description:"No description",source:"@site/api/enums/location-type.mdx",sourceDirName:"enums",slug:"/enums/location-type",permalink:"/api/enums/location-type",draft:!1,tags:[],version:"current",frontMatter:{id:"location-type",title:"LocationType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InsightsCountryType",permalink:"/api/enums/insights-country-type"},next:{title:"MappingEntityType",permalink:"/api/enums/mapping-entity-type"}},p={},s=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),y=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>LocationType.<b>AIRPORT</b></code>",id:"code-style-fontweight-normal-locationtypebairportbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LocationType.<b>BUSSTATION</b></code>",id:"code-style-fontweight-normal-locationtypebbusstationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LocationType.<b>PORT</b></code>",id:"code-style-fontweight-normal-locationtypebportbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LocationType.<b>TRAINSTATION</b></code>",id:"code-style-fontweight-normal-locationtypebtrainstationbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,p]=(0,a.useState)(i);return(0,r.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},f={Bullet:s,SpecifiedBy:u,Badge:d,toc:y,Details:m},b="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum LocationType {\n  AIRPORT\n  BUSSTATION\n  PORT\n  TRAINSTATION\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-locationtypebairportbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LocationType.",(0,r.kt)("b",null,"AIRPORT")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-locationtypebbusstationbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LocationType.",(0,r.kt)("b",null,"BUSSTATION")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-locationtypebportbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LocationType.",(0,r.kt)("b",null,"PORT")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-locationtypebtrainstationbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LocationType.",(0,r.kt)("b",null,"TRAINSTATION")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/package-location"},(0,r.kt)("inlineCode",{parentName:"a"},"PackageLocation"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);