/*! For license information please see 422a8324.a045caae.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18839],{33207:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>c,assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>n,toc:()=>f});const n=JSON.parse('{"id":"types/inputs/alert-update-emails-input","title":"AlertUpdateEmailsInput","description":"No description","source":"@site/api/types/inputs/alert-update-emails-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/alert-update-emails-input","permalink":"/api/types/inputs/alert-update-emails-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alert-update-emails-input","title":"AlertUpdateEmailsInput"},"sidebar":"schemaSidebar","previous":{"title":"AlertUpdateCommonRelativeInput","permalink":"/api/types/inputs/alert-update-common-relative-input"},"next":{"title":"AlertUpdateErrorRateComparativeByTimeInput","permalink":"/api/types/inputs/alert-update-error-rate-comparative-by-time-input"}}');var i=a(74848),l=a(28453),s=a(96540);const r={id:"alert-update-emails-input",title:"AlertUpdateEmailsInput"},d=void 0,o={},p=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),c=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:a,startOpen:n=!1})=>{const[l,r]=(0,s.useState)(n);return(0,i.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&a]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertUpdateEmailsInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdateemailsinputisactiveboolean-",level:4},{value:'<code>AlertUpdateEmailsInput.<b>email</b></code><Bullet></Bullet><code>[AlertEmailInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdateemailsinputemailalertemailinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input AlertUpdateEmailsInput {\n  isActive: Boolean\n  email: [AlertEmailInput!]\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"alertupdateemailsinputisactiveboolean-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateEmailsInput.",(0,i.jsx)("b",{children:"isActive"})]})}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/boolean",children:(0,i.jsx)(t.code,{children:"Boolean"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.h4,{id:"alertupdateemailsinputemailalertemailinput--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateEmailsInput.",(0,i.jsx)("b",{children:"email"})]})}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/alert-email-input",children:(0,i.jsx)(t.code,{children:"[AlertEmailInput!]"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/inputs/alert-update-notifications-input",children:(0,i.jsx)(t.code,{children:"AlertUpdateNotificationsInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,t,a)=>{var n=a(96540),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,a){var n,l={},o=null,p=null;for(n in void 0!==a&&(o=""+a),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,n)&&!d.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:i,type:e,key:o,ref:p,props:l,_owner:r.current}}t.Fragment=l,t.jsx=o,t.jsxs=o},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var n=a(96540);const i={},l=n.createContext(i);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);