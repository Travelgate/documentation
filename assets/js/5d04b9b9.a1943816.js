/*! For license information please see 5d04b9b9.a1943816.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78436],{33978:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>f});var n=s(74848),r=s(28453),a=s(96540);const l={id:"status",title:"Status",hide_table_of_contents:!1},o=void 0,i={id:"enums/status",title:"Status",description:"Status of the profile",source:"@site/api/enums/status.mdx",sourceDirName:"enums",slug:"/enums/status",permalink:"/api/enums/status",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"status",title:"Status",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatusType",permalink:"/api/enums/status-type"},next:{title:"SupplementType",permalink:"/api/enums/supplement-type"}},c={},d=()=>{const e={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:s,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,r.R)()},[i,c]=(0,a.useState)(l);return(0,n.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&s]})},f=[{value:"Values",id:"values",level:3},{value:"<code>Status.<b>ARCHIVED</b></code>",id:"statusarchived",level:4},{value:"<code>Status.<b>DRAFT</b></code>",id:"statusdraft",level:4},{value:"<code>Status.<b>PUBLISHED</b></code>",id:"statuspublished",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Status of the profile"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"enum Status {\n  ARCHIVED\n  DRAFT\n  PUBLISHED\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,n.jsx)(t.h4,{id:"statusarchived",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Status.",(0,n.jsx)("b",{children:"ARCHIVED"})]})})}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h4,{id:"statusdraft",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Status.",(0,n.jsx)("b",{children:"DRAFT"})]})})}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h4,{id:"statuspublished",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Status.",(0,n.jsx)("b",{children:"PUBLISHED"})]})})}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/profile",children:(0,n.jsx)(t.code,{children:"Profile"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/inputs/profile-create-input",children:(0,n.jsx)(t.code,{children:"ProfileCreateInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/objects/profile-data",children:(0,n.jsx)(t.code,{children:"ProfileData"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/inputs/profile-update-input",children:(0,n.jsx)(t.code,{children:"ProfileUpdateInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/inputs/profile-where-input",children:(0,n.jsx)(t.code,{children:"ProfileWhereInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},21020:(e,t,s)=>{var n=s(96540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,a={},c=null,d=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var n=s(96540);const r={},a=n.createContext(r);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);