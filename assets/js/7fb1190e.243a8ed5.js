/*! For license information please see 7fb1190e.243a8ed5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[680],{70527:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var r=n(74848),a=n(28453),i=n(96540);const s={id:"duration",title:"Duration",hide_table_of_contents:!1},o=void 0,l={id:"scalars/duration",title:"Duration",description:"An integer literal followed immediately (with no spaces) by a duration unit following the ISO 8601 limited to Minutes(min), Hours(h), Days(d). ie: 3min, 2h, 1d.",source:"@site/api/scalars/duration.mdx",sourceDirName:"scalars",slug:"/scalars/duration",permalink:"/api/scalars/duration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"duration",title:"Duration",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DomainName",permalink:"/api/scalars/domain-name"},next:{title:"Email",permalink:"/api/scalars/email"}},c={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[l,c]=(0,i.useState)(s);return(0,r.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},f=[{value:"Member of",id:"member-of",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"An integer literal followed immediately (with no spaces) by a duration unit following the ISO 8601 limited to Minutes(min), Hours(h), Days(d). ie: 3min, 2h, 1d."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"scalar Duration\n"})}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/inputs/relative-input",children:(0,r.jsx)(t.code,{children:"RelativeInput"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:d,props:i,_owner:o.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);