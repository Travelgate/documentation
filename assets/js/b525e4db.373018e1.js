"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(y,l(l({ref:t},s),{},{components:n})):a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75814:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),o=n(67294),r=n(3905);const l={id:"hotel-pax-type",title:"HotelPaxType",hide_table_of_contents:!1},i=void 0,p={unversionedId:"enums/hotel-pax-type",id:"enums/hotel-pax-type",title:"HotelPaxType",description:"Define type of pax allowed",source:"@site/api/enums/hotel-pax-type.mdx",sourceDirName:"enums",slug:"/enums/hotel-pax-type",permalink:"/api/enums/hotel-pax-type",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-pax-type",title:"HotelPaxType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelOptionRateRestrictionType",permalink:"/api/enums/hotel-option-rate-restriction-type"},next:{title:"HubStatus",permalink:"/api/enums/hub-status"}},c={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>HotelPaxType.<b>ADULT</b></code>",id:"code-style-fontweight-normal-hotelpaxtypebadultbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>HotelPaxType.<b>CHILD</b></code>",id:"code-style-fontweight-normal-hotelpaxtypebchildbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>HotelPaxType.<b>INFANT</b></code>",id:"code-style-fontweight-normal-hotelpaxtypebinfantbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[p,c]=(0,o.useState)(i);return(0,r.kt)("details",(0,a.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&l)},f={Bullet:s,SpecifiedBy:d,Badge:u,toc:m,Details:y},b="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Define type of pax allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum HotelPaxType {\n  ADULT\n  CHILD\n  INFANT\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelpaxtypebadultbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelPaxType.",(0,r.kt)("b",null,"ADULT")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelpaxtypebchildbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelPaxType.",(0,r.kt)("b",null,"CHILD")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelpaxtypebinfantbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelPaxType.",(0,r.kt)("b",null,"INFANT")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/age-range"},(0,r.kt)("inlineCode",{parentName:"a"},"AgeRange"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-candidate"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataCandidate"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);