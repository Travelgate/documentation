/*! For license information please see ea5c10d3.ef04dc0f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42473],{9680:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>h,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"types/objects/refresh-response","title":"RefreshResponse","description":"No description","source":"@site/api/types/objects/refresh-response.mdx","sourceDirName":"types/objects","slug":"/types/objects/refresh-response","permalink":"/api/types/objects/refresh-response","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"refresh-response","title":"RefreshResponse"},"sidebar":"schemaSidebar","previous":{"title":"Reference","permalink":"/api/types/objects/reference"},"next":{"title":"Remark","permalink":"/api/types/objects/remark"}}');var n=r(74848),t=r(28453),d=r(96540);const o={id:"refresh-response",title:"RefreshResponse"},l=void 0,i={},c=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:s,children:r,startOpen:a=!1})=>{const[t,o]=(0,d.useState)(a);return(0,n.jsxs)("details",{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:t?e:s}),t&&r]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>RefreshResponse.<b>bearer</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"refreshresponsebearerstring-",level:4},{value:'<code>RefreshResponse.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"refreshresponseadvisemessageadvisemessage--",level:4},{value:'<code>RefreshResponse.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"refreshresponseadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type RefreshResponse {\n  bearer: String\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"refreshresponsebearerstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RefreshResponse.",(0,n.jsx)("b",{children:"bearer"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"refreshresponseadvisemessageadvisemessage--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RefreshResponse.",(0,n.jsx)("b",{children:"adviseMessage"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,n.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.h5,{id:"refreshresponseadvisemessageleveladvisemessagelevel--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RefreshResponse.adviseMessage.",(0,n.jsx)("b",{children:"level"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,n.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/types/objects/admin-mutation",children:(0,n.jsx)(s.code,{children:"AdminMutation"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},21020:(e,s,r)=>{var a=r(96540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,r){var a,t={},i=null,c=null;for(a in void 0!==r&&(i=""+r),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(c=s.ref),s)d.call(s,a)&&!l.hasOwnProperty(a)&&(t[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===t[a]&&(t[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:c,props:t,_owner:o.current}}s.Fragment=t,s.jsx=i,s.jsxs=i},74848:(e,s,r)=>{e.exports=r(21020)},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>o});var a=r(96540);const n={},t=a.createContext(n);function d(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);