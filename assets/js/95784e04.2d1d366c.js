/*! For license information please see 95784e04.2d1d366c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39417],{13611:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>x});var t=n(74848),a=n(28453),r=n(96540);const c={id:"transactions",title:"Transactions"},o=void 0,i={id:"types/objects/transactions",title:"Transactions",description:"Supplier transaction",source:"@site/api/types/objects/transactions.mdx",sourceDirName:"types/objects",slug:"/types/objects/transactions",permalink:"/api/types/objects/transactions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"transactions",title:"Transactions"},sidebar:"schemaSidebar",previous:{title:"Trailer",permalink:"/api/types/objects/trailer"},next:{title:"TransportMutation",permalink:"/api/types/objects/transport-mutation"}},d={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:n,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[i,d]=(0,r.useState)(c);return(0,t.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Transactions.<b>request</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"transactionsrequeststring--",level:4},{value:'<code>Transactions.<b>response</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"transactionsresponsestring--",level:4},{value:'<code>Transactions.<b>timeStamp</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"transactionstimestampdatetime--",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Supplier transaction"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type Transactions {\n  request: String!\n  response: String!\n  timeStamp: DateTime!\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"transactionsrequeststring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Transactions.",(0,t.jsx)("b",{children:"request"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Transaction Request."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"transactionsresponsestring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Transactions.",(0,t.jsx)("b",{children:"response"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Transaction Response."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"transactionstimestampdatetime--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Transactions.",(0,t.jsx)("b",{children:"timeStamp"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,t.jsx)(s.code,{children:"DateTime!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Time when the request has been processed."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/objects/audit-data",children:(0,t.jsx)(s.code,{children:"AuditData"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},21020:(e,s,n)=>{var t=n(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var t,r={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)c.call(s,t)&&!i.hasOwnProperty(t)&&(r[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===r[t]&&(r[t]=s[t]);return{$$typeof:a,type:e,key:d,ref:l,props:r,_owner:o.current}}s.Fragment=r,s.jsx=d,s.jsxs=d},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var t=n(96540);const a={},r=t.createContext(a);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);