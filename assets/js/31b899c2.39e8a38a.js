"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89296],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=d(a),p=r,y=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return a?n.createElement(y,l(l({ref:t},i),{},{components:a})):n.createElement(y,l({ref:t},i))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5050:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905);const l={id:"payment-card-status",title:"PaymentCardStatus",hide_table_of_contents:!1},c=void 0,s={unversionedId:"enums/payment-card-status",id:"enums/payment-card-status",title:"PaymentCardStatus",description:"No description",source:"@site/api/enums/payment-card-status.mdx",sourceDirName:"enums",slug:"/enums/payment-card-status",permalink:"/api/enums/payment-card-status",draft:!1,tags:[],version:"current",frontMatter:{id:"payment-card-status",title:"PaymentCardStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PayerResponseStatusType",permalink:"/api/enums/payer-response-status-type"},next:{title:"PaymentCardType",permalink:"/api/enums/payment-card-type"}},d={},i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentCardStatus.<b>CREATED</b></code>",id:"code-style-fontweight-normal-paymentcardstatusbcreatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentCardStatus.<b>CANCELED</b></code>",id:"code-style-fontweight-normal-paymentcardstatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentCardStatus.<b>EXPIRED</b></code>",id:"code-style-fontweight-normal-paymentcardstatusbexpiredbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentCardStatus.<b>ACTIVE</b></code>",id:"code-style-fontweight-normal-paymentcardstatusbactivebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentCardStatus.<b>UNKNOWN</b></code>",id:"code-style-fontweight-normal-paymentcardstatusbunknownbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[s,d]=(0,r.useState)(c);return(0,o.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&l)},b={Bullet:i,SpecifiedBy:u,Badge:m,toc:p,Details:y},f="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentCardStatus {\n  CREATED\n  CANCELED\n  EXPIRED\n  ACTIVE\n  UNKNOWN\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentcardstatusbcreatedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardStatus.",(0,o.kt)("b",null,"CREATED")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payment card created correctly.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentcardstatusbcanceledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardStatus.",(0,o.kt)("b",null,"CANCELED")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payment card canceled correctly.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentcardstatusbexpiredbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardStatus.",(0,o.kt)("b",null,"EXPIRED")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payment card expired.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentcardstatusbactivebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardStatus.",(0,o.kt)("b",null,"ACTIVE")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payment card is active.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentcardstatusbunknownbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardStatus.",(0,o.kt)("b",null,"UNKNOWN")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When Payment card is UNKNOWN, the buyer needs to check with the VCC provider to ensure if some payment has been made.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/payment-card-data"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentCardData"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);