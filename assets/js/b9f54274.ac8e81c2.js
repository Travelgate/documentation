/*! For license information please see b9f54274.ac8e81c2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80444],{13958:(e,s,c)=>{c.r(s),c.d(s,{Badge:()=>x,Bullet:()=>r,Details:()=>j,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"types/objects/access-connection","title":"AccessConnection","description":"No description","source":"@site/api/types/objects/access-connection.mdx","sourceDirName":"types/objects","slug":"/types/objects/access-connection","permalink":"/api/types/objects/access-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"access-connection","title":"AccessConnection"},"sidebar":"schemaSidebar","previous":{"title":"AcceptedPayment","permalink":"/api/types/objects/accepted-payment"},"next":{"title":"AccessCredentialsData","permalink":"/api/types/objects/access-credentials-data"}}');var a=c(74848),t=c(28453),d=c(96540);const o={id:"access-connection",title:"AccessConnection"},i=void 0,l={},r=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),x=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),j=({dataOpen:e,dataClose:s,children:c,startOpen:n=!1})=>{const[t,o]=(0,d.useState)(n);return(0,a.jsxs)("details",{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:t?e:s}),t&&c]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AccessConnection.<b>edges</b></code><Bullet></Bullet><code>[AccessEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accessconnectionedgesaccessedge--",level:4},{value:'<code>AccessConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accessconnectionpageinfopageinfo--",level:4},{value:'<code>AccessConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accessconnectionadvisemessageadvisemessage--",level:4},{value:'<code>AccessConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accessconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>AccessConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accessconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type AccessConnection {\n  edges: [AccessEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"accessconnectionedgesaccessedge--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/access-edge",children:(0,a.jsx)(s.code,{children:"[AccessEdge]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.h4,{id:"accessconnectionpageinfopageinfo--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/page-info",children:(0,a.jsx)(s.code,{children:"PageInfo!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.h4,{id:"accessconnectionadvisemessageadvisemessage--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessConnection.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,a.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.p,{children:"List of advise messages."}),"\n",(0,a.jsxs)(s.h5,{id:"accessconnectionadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessConnection.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,a.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(s.h4,{id:"accessconnectiontotalcountint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"Identifies the total count of items in the connection."}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/objects/admin-query",children:(0,a.jsx)(s.code,{children:"AdminQuery"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/api/types/interfaces/group-common-data",children:(0,a.jsx)(s.code,{children:"GroupCommonData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"interface"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/group-data",children:(0,a.jsx)(s.code,{children:"GroupData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/organization-data",children:(0,a.jsx)(s.code,{children:"OrganizationData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/supplier-data",children:(0,a.jsx)(s.code,{children:"SupplierData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,s,c)=>{var n=c(96540),a=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,c){var n,t={},l=null,r=null;for(n in void 0!==c&&(l=""+c),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(r=s.ref),s)d.call(s,n)&&!i.hasOwnProperty(n)&&(t[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===t[n]&&(t[n]=s[n]);return{$$typeof:a,type:e,key:l,ref:r,props:t,_owner:o.current}}s.Fragment=t,s.jsx=l,s.jsxs=l},74848:(e,s,c)=>{e.exports=c(21020)},28453:(e,s,c)=>{c.d(s,{R:()=>d,x:()=>o});var n=c(96540);const a={},t=n.createContext(a);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);