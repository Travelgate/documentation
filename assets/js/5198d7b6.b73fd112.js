"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14666:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=r(87462),o=r(67294),i=r(3905);const a={id:"booking-criteria-type",title:"BookingCriteriaType",hide_table_of_contents:!1},l=void 0,c={unversionedId:"enums/booking-criteria-type",id:"enums/booking-criteria-type",title:"BookingCriteriaType",description:"Indicates the type of criteria in the request of the booking list",source:"@site/api/enums/booking-criteria-type.mdx",sourceDirName:"enums",slug:"/enums/booking-criteria-type",permalink:"/api/enums/booking-criteria-type",draft:!1,tags:[],version:"current",frontMatter:{id:"booking-criteria-type",title:"BookingCriteriaType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BookStatusType",permalink:"/api/enums/book-status-type"},next:{title:"BookingWindowType",permalink:"/api/enums/booking-window-type"}},p={},s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>BookingCriteriaType.<b>DATES</b></code>",id:"code-style-fontweight-normal-bookingcriteriatypebdatesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BookingCriteriaType.<b>REFERENCES</b></code>",id:"code-style-fontweight-normal-bookingcriteriatypebreferencesbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:a,startOpen:l=!1}=e;const[c,p]=(0,o.useState)(l);return(0,i.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&a)},y={Bullet:s,SpecifiedBy:u,Badge:d,toc:m,Details:f},b="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(b,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Indicates the type of criteria in the request of the booking list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum BookingCriteriaType {\n  DATES\n  REFERENCES\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-bookingcriteriatypebdatesbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"BookingCriteriaType.",(0,i.kt)("b",null,"DATES")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Search by date range")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-bookingcriteriatypebreferencesbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"BookingCriteriaType.",(0,i.kt)("b",null,"REFERENCES")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Search by reference codes")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-criteria-booking-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCriteriaBookingInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);