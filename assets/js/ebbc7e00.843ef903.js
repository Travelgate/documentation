/*! For license information please see ebbc7e00.843ef903.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27611],{86607:(e,n,i)=>{i.r(n),i.d(n,{Badge:()=>h,Bullet:()=>o,Details:()=>u,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>v});var t=i(74848),r=i(28453),s=i(96540);const a={id:"service-api-type",title:"ServiceApiType"},c=void 0,l={id:"types/enums/service-api-type",title:"ServiceApiType",description:"Services Api available.",source:"@site/api/types/enums/service-api-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/service-api-type",permalink:"/api/types/enums/service-api-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"service-api-type",title:"ServiceApiType"},sidebar:"schemaSidebar",previous:{title:"SeniorRate",permalink:"/api/types/enums/senior-rate"},next:{title:"ServiceIntegrationType",permalink:"/api/types/enums/service-integration-type"}},p={},o=()=>{const e={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const n={a:"a",...(0,r.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:i,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,r.R)()},[l,p]=(0,s.useState)(a);return(0,t.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&i]})},v=[{value:"Values",id:"values",level:3},{value:"<code>ServiceApiType.<b>HOTEL</b></code>",id:"serviceapitypehotel",level:4},{value:"<code>ServiceApiType.<b>TRANSPORTATION</b></code>",id:"serviceapitypetransportation",level:4},{value:"<code>ServiceApiType.<b>CAR</b></code>",id:"serviceapitypecar",level:4},{value:"<code>ServiceApiType.<b>TRANSFERS</b></code>",id:"serviceapitypetransfers",level:4},{value:"<code>ServiceApiType.<b>ACTIVITIES</b></code>",id:"serviceapitypeactivities",level:4},{value:"<code>ServiceApiType.<b>VIRTUALACCOUNT</b></code>",id:"serviceapitypevirtualaccount",level:4},{value:"<code>ServiceApiType.<b>PAYMENT</b></code>",id:"serviceapitypepayment",level:4},{value:"<code>ServiceApiType.<b>PACKAGE</b></code>",id:"serviceapitypepackage",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Services Api available."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"enum ServiceApiType {\n  HOTEL\n  TRANSPORTATION\n  CAR\n  TRANSFERS\n  ACTIVITIES\n  VIRTUALACCOUNT\n  PAYMENT\n  PACKAGE\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(n.h4,{id:"serviceapitypehotel",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ServiceApiType.",(0,t.jsx)("b",{children:"HOTEL"})]})})}),"\n",(0,t.jsx)(n.p,{children:"When the request has been done against the Hotel API"}),"\n",(0,t.jsx)(n.h4,{id:"serviceapitypetransportation",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ServiceApiType.",(0,t.jsx)("b",{children:"TRANSPORTATION"})]})})}),"\n",(0,t.jsx)(n.p,{children:"When the request has been done against the Transportation API"}),"\n",(0,t.jsx)(n.h4,{id:"serviceapitypecar",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ServiceApiType.",(0,t.jsx)("b",{children:"CAR"})]})})}),"\n",(0,t.jsx)(n.p,{children:"When the request has been done against the Car API"}),"\n",(0,t.jsx)(n.h4,{id:"serviceapitypetransfers",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ServiceApiType.",(0,t.jsx)("b",{children:"TRANSFERS"})]})})}),"\n",(0,t.jsx)(n.p,{children:"When the request has been done against the Transfers API"}),"\n",(0,t.jsx)(n.h4,{id:"serviceapitypeactivities",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ServiceApiType.",(0,t.jsx)("b",{children:"ACTIVITIES"})]})})}),"\n",(0,t.jsx)(n.p,{children:"When the request has been done against the Activities API"}),"\n",(0,t.jsx)(n.h4,{id:"serviceapitypevirtualaccount",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ServiceApiType.",(0,t.jsx)("b",{children:"VIRTUALACCOUNT"})]})})}),"\n",(0,t.jsx)(n.p,{children:"When the request has been done against the Virtual Account API"}),"\n",(0,t.jsx)(n.h4,{id:"serviceapitypepayment",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ServiceApiType.",(0,t.jsx)("b",{children:"PAYMENT"})]})})}),"\n",(0,t.jsx)(n.p,{children:"When the request has been done against the Payment API"}),"\n",(0,t.jsx)(n.h4,{id:"serviceapitypepackage",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ServiceApiType.",(0,t.jsx)("b",{children:"PACKAGE"})]})})}),"\n",(0,t.jsx)(n.p,{children:"When the request has been done against the Package API"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/types/inputs/stats-filter-input",children:(0,t.jsx)(n.code,{children:"StatsFilterInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}},21020:(e,n,i)=>{var t=i(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,i){var t,s={},p=null,o=null;for(t in void 0!==i&&(p=""+i),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,t)&&!l.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:r,type:e,key:p,ref:o,props:s,_owner:c.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},74848:(e,n,i)=>{e.exports=i(21020)},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);