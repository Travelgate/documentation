/*! For license information please see b38e904f.eefd047d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8066],{25700:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>c,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"types/inputs/alert-update-notifications-input","title":"AlertUpdateNotificationsInput","description":"No description","source":"@site/api/types/inputs/alert-update-notifications-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/alert-update-notifications-input","permalink":"/api/types/inputs/alert-update-notifications-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alert-update-notifications-input","title":"AlertUpdateNotificationsInput"},"sidebar":"schemaSidebar","previous":{"title":"AlertUpdateErrorRateRelativeConfigurationByTimeInput","permalink":"/api/types/inputs/alert-update-error-rate-relative-configuration-by-time-input"},"next":{"title":"AlertUpdatePeakTrafficAbsoluteByTimeInput","permalink":"/api/types/inputs/alert-update-peak-traffic-absolute-by-time-input"}}');var i=n(74848),r=n(28453),s=n(96540);const l={id:"alert-update-notifications-input",title:"AlertUpdateNotificationsInput"},o=void 0,d={},p=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),c=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const[r,l]=(0,s.useState)(a);return(0,i.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertUpdateNotificationsInput.<b>emails</b></code><Bullet></Bullet><code>AlertUpdateEmailsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatenotificationsinputemailsalertupdateemailsinput-",level:4},{value:'<code>AlertUpdateNotificationsInput.<b>slack</b></code><Bullet></Bullet><code>AlertUpdateSlackInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatenotificationsinputslackalertupdateslackinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input AlertUpdateNotificationsInput {\n  emails: AlertUpdateEmailsInput\n  slack: AlertUpdateSlackInput\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"alertupdatenotificationsinputemailsalertupdateemailsinput-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateNotificationsInput.",(0,i.jsx)("b",{children:"emails"})]})}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/alert-update-emails-input",children:(0,i.jsx)(t.code,{children:"AlertUpdateEmailsInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(t.h4,{id:"alertupdatenotificationsinputslackalertupdateslackinput-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateNotificationsInput.",(0,i.jsx)("b",{children:"slack"})]})}),(0,i.jsx)(p,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/alert-update-slack-input",children:(0,i.jsx)(t.code,{children:"AlertUpdateSlackInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/inputs/alert-update-common-configuration-input",children:(0,i.jsx)(t.code,{children:"AlertUpdateCommonConfigurationInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var a=n(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,r={},d=null,p=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,a)&&!o.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:i,type:e,key:d,ref:p,props:r,_owner:l.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);