/*! For license information please see ef310d75.61d1ad72.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58442],{52974:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>p,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"types/objects/audit-data","title":"AuditData","description":"All the sent and received transactions in the supplier\'s native format.","source":"@site/api/types/objects/audit-data.mdx","sourceDirName":"types/objects","slug":"/types/objects/audit-data","permalink":"/api/types/objects/audit-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"audit-data","title":"AuditData"},"sidebar":"schemaSidebar","previous":{"title":"Asset","permalink":"/api/types/objects/asset"},"next":{"title":"AuditDetails","permalink":"/api/types/objects/audit-details"}}');var d=t(74848),n=t(28453),o=t(96540);const c={id:"audit-data",title:"AuditData"},r=void 0,i={},l=()=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{className:e.class,children:e.text})}),j=({dataOpen:e,dataClose:a,children:t,startOpen:s=!1})=>{const[n,c]=(0,o.useState)(s);return(0,d.jsxs)("details",{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:n?e:a}),n&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AuditData.<b>transactions</b></code><Bullet></Bullet><code>[Transactions!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditdatatransactionstransactions--",level:4},{value:'<code>AuditData.<b>timeStamp</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditdatatimestampdatetime--",level:4},{value:'<code>AuditData.<b>processTime</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditdataprocesstimefloat--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"All the sent and received transactions in the supplier's native format."}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type AuditData {\n  transactions: [Transactions!]!\n  timeStamp: DateTime!\n  processTime: Float!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"auditdatatransactionstransactions--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditData.",(0,d.jsx)("b",{children:"transactions"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/transactions",children:(0,d.jsx)(a.code,{children:"[Transactions!]!"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.p,{children:"List of the transactions data."}),"\n",(0,d.jsxs)(a.h4,{id:"auditdatatimestampdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditData.",(0,d.jsx)("b",{children:"timeStamp"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Timestamp."}),"\n",(0,d.jsxs)(a.h4,{id:"auditdataprocesstimefloat--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditData.",(0,d.jsx)("b",{children:"processTime"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/float",children:(0,d.jsx)(a.code,{children:"Float!"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Process time of the transaction data in milliseconds (ms)."}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/types/objects/hotel-booking",children:(0,d.jsx)(a.code,{children:"HotelBooking"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/hotel-booking-amend",children:(0,d.jsx)(a.code,{children:"HotelBookingAmend"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/hotel-book-payload",children:(0,d.jsx)(a.code,{children:"HotelBookPayload"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/hotel-cancel-payload",children:(0,d.jsx)(a.code,{children:"HotelCancelPayload"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/hotel-commit-payload",children:(0,d.jsx)(a.code,{children:"HotelCommitPayload"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/hotel-quote",children:(0,d.jsx)(a.code,{children:"HotelQuote"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/hotel-search",children:(0,d.jsx)(a.code,{children:"HotelSearch"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/interfaces/response",children:(0,d.jsx)(a.code,{children:"Response"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"interface"})]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},21020:(e,a,t)=>{var s=t(96540),d=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,t){var s,n={},i=null,l=null;for(s in void 0!==t&&(i=""+t),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(l=a.ref),a)o.call(a,s)&&!r.hasOwnProperty(s)&&(n[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===n[s]&&(n[s]=a[s]);return{$$typeof:d,type:e,key:i,ref:l,props:n,_owner:c.current}}a.Fragment=n,a.jsx=i,a.jsxs=i},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>c});var s=t(96540);const d={},n=s.createContext(d);function o(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);