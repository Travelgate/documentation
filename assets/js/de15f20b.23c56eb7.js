/*! For license information please see de15f20b.23c56eb7.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20022],{71437:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>p,Bullet:()=>m,Details:()=>u,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>y});var t=n(74848),s=n(28453),a=n(96540);const o={id:"member-type",title:"MemberType"},i=void 0,c={id:"types/enums/member-type",title:"MemberType",description:"No description",source:"@site/api/types/enums/member-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/member-type",permalink:"/api/types/enums/member-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"member-type",title:"MemberType"},sidebar:"schemaSidebar",previous:{title:"MemberService",permalink:"/api/types/enums/member-service"},next:{title:"MembersOrderByEnum",permalink:"/api/types/enums/members-order-by-enum"}},l={},m=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const r={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:r,children:n,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[c,l]=(0,a.useState)(o);return(0,t.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&n]})},y=[{value:"Values",id:"values",level:3},{value:"<code>MemberType.<b>USER</b></code>",id:"membertypeuser",level:4},{value:"<code>MemberType.<b>SERVICE_ACCOUNT</b></code>",id:"membertypeservice_account",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"No description"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"enum MemberType {\n  USER\n  SERVICE_ACCOUNT\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(r.h4,{id:"membertypeuser",children:(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberType.",(0,t.jsx)("b",{children:"USER"})]})})}),"\n",(0,t.jsx)(r.h4,{id:"membertypeservice_account",children:(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberType.",(0,t.jsx)("b",{children:"SERVICE_ACCOUNT"})]})})}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/types/objects/member-data",children:(0,t.jsx)(r.code,{children:"MemberData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,r,n)=>{var t=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,a={},l=null,m=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(m=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:m,props:a,_owner:i.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var t=n(96540);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);