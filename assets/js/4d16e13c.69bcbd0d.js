/*! For license information please see 4d16e13c.69bcbd0d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50586],{7651:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>v,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var n=a(74848),i=a(28453),s=a(96540);const d={id:"activation-validate-input",title:"ActivationValidateInput"},c=void 0,r={id:"types/inputs/activation-validate-input",title:"ActivationValidateInput",description:"No description",source:"@site/api/types/inputs/activation-validate-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/activation-validate-input",permalink:"/api/types/inputs/activation-validate-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"activation-validate-input",title:"ActivationValidateInput"},sidebar:"schemaSidebar",previous:{title:"ActivationReadInput",permalink:"/api/types/inputs/activation-read-input"},next:{title:"AdditionalGuestInput",permalink:"/api/types/inputs/additional-guest-input"}},l={},o=()=>{const e={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,i.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},v=({dataOpen:e,dataClose:t,children:a,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,i.R)()},[r,l]=(0,s.useState)(d);return(0,n.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivationValidateInput.<b>accessCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationvalidateinputaccesscodeid--",level:4},{value:'<code>ActivationValidateInput.<b>clientNames</b></code><Bullet></Bullet><code>[ID!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationvalidateinputclientnamesid--",level:4}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input ActivationValidateInput {\n  accessCode: ID!\n  clientNames: [ID!]!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"activationvalidateinputaccesscodeid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationValidateInput.",(0,n.jsx)("b",{children:"accessCode"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.h4,{id:"activationvalidateinputclientnamesid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationValidateInput.",(0,n.jsx)("b",{children:"clientNames"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(t.code,{children:"[ID!]!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,t,a)=>{var n=a(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var n,s={},l=null,o=null;for(n in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(o=t.ref),t)d.call(t,n)&&!r.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:o,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>d,x:()=>c});var n=a(96540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);