"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=s,y=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:s,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31624:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>y,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(87462),s=n(67294),o=n(3905);const a={id:"business-rules-type",title:"BusinessRulesType",hide_table_of_contents:!1},l=void 0,i={unversionedId:"enums/business-rules-type",id:"enums/business-rules-type",title:"BusinessRulesType",description:"Business rules type",source:"@site/api/enums/business-rules-type.mdx",sourceDirName:"enums",slug:"/enums/business-rules-type",permalink:"/api/enums/business-rules-type",draft:!1,tags:[],version:"current",frontMatter:{id:"business-rules-type",title:"BusinessRulesType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BookingsReportOrderByInput",permalink:"/api/enums/bookings-report-order-by-input"},next:{title:"BuyerCompanyType",permalink:"/api/enums/buyer-company-type"}},u={},p=()=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(s.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>BusinessRulesType.<b>CHEAPER_AMOUNT</b></code>",id:"code-style-fontweight-normal-businessrulestypebcheaper_amountbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BusinessRulesType.<b>ROOM_TYPE</b></code>",id:"code-style-fontweight-normal-businessrulestypebroom_typebcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:l=!1}=e;const[i,u]=(0,s.useState)(l);return(0,o.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&a)},b={Bullet:p,SpecifiedBy:c,Badge:d,toc:m,Details:y},f="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Business rules type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum BusinessRulesType {\n  CHEAPER_AMOUNT\n  ROOM_TYPE\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-businessrulestypebcheaper_amountbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BusinessRulesType.",(0,o.kt)("b",null,"CHEAPER_AMOUNT")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The cheapest options is returned without exceeding the optionsQuota limit.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-businessrulestypebroom_typebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BusinessRulesType.",(0,o.kt)("b",null,"ROOM_TYPE")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Groups the option by room type without exceeding the optionsQuota limit.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/business-rules"},(0,o.kt)("inlineCode",{parentName:"a"},"BusinessRules"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/business-rules-input"},(0,o.kt)("inlineCode",{parentName:"a"},"BusinessRulesInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xbusiness-rules-input"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelXBusinessRulesInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);