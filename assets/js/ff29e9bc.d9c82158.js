"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16127],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),k=i(a),p=n,b=k["".concat(s,".").concat(p)]||k[p]||d[p]||r;return a?o.createElement(b,l(l({ref:t},u),{},{components:a})):o.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[k]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},40763:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>b,SpecifiedBy:()=>k,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=a(87462),n=a(67294),r=a(3905);const l={id:"package-book-status",title:"PackageBookStatus",hide_table_of_contents:!1},c=void 0,s={unversionedId:"enums/package-book-status",id:"enums/package-book-status",title:"PackageBookStatus",description:"No description",source:"@site/api/enums/package-book-status.mdx",sourceDirName:"enums",slug:"/enums/package-book-status",permalink:"/api/enums/package-book-status",draft:!1,tags:[],version:"current",frontMatter:{id:"package-book-status",title:"PackageBookStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OrganizationsOrderByEnum",permalink:"/api/enums/organizations-order-by-enum"},next:{title:"PackageDestinationType",permalink:"/api/enums/package-destination-type"}},i={},u=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),k=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PackageBookStatus.<b>CANCELLED</b></code>",id:"code-style-fontweight-normal-packagebookstatusbcancelledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PackageBookStatus.<b>OK</b></code>",id:"code-style-fontweight-normal-packagebookstatusbokbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PackageBookStatus.<b>ON_REQUEST</b></code>",id:"code-style-fontweight-normal-packagebookstatusbon_requestbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PackageBookStatus.<b>PENDING_COMMIT</b></code>",id:"code-style-fontweight-normal-packagebookstatusbpending_commitbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PackageBookStatus.<b>UNKNOWN</b></code>",id:"code-style-fontweight-normal-packagebookstatusbunknownbcode",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[s,i]=(0,n.useState)(c);return(0,r.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&l)},m={Bullet:u,SpecifiedBy:k,Badge:d,toc:p,Details:b},g="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PackageBookStatus {\n  CANCELLED\n  OK\n  ON_REQUEST\n  PENDING_COMMIT\n  UNKNOWN\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-packagebookstatusbcancelledbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PackageBookStatus.",(0,r.kt)("b",null,"CANCELLED")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-packagebookstatusbokbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PackageBookStatus.",(0,r.kt)("b",null,"OK")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-packagebookstatusbon_requestbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PackageBookStatus.",(0,r.kt)("b",null,"ON_REQUEST")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-packagebookstatusbpending_commitbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PackageBookStatus.",(0,r.kt)("b",null,"PENDING_COMMIT")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-packagebookstatusbunknownbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PackageBookStatus.",(0,r.kt)("b",null,"UNKNOWN")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/booking-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"BookingPayload"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/book-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"BookPayload"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/cancel-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CancelPayload"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);