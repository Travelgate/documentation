/*! For license information please see f4d14b78.f5c7a520.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9183],{81770:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>f});const c=JSON.parse('{"id":"types/objects/recon-booking-connection","title":"ReconBookingConnection","description":"No description","source":"@site/api/types/objects/recon-booking-connection.mdx","sourceDirName":"types/objects","slug":"/types/objects/recon-booking-connection","permalink":"/api/types/objects/recon-booking-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"recon-booking-connection","title":"ReconBookingConnection"},"sidebar":"schemaSidebar","previous":{"title":"ReconBookingAnomaly","permalink":"/api/types/objects/recon-booking-anomaly"},"next":{"title":"ReconBookingEdge","permalink":"/api/types/objects/recon-booking-edge"}}');var t=o(74848),s=o(28453),i=o(96540);const r={id:"recon-booking-connection",title:"ReconBookingConnection"},a=void 0,d={},l=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:n,children:o,startOpen:c=!1})=>{const[s,r]=(0,i.useState)(c);return(0,t.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:s?e:n}),s&&o]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>ReconBookingConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reconbookingconnectionpageinfopageinfo--",level:4},{value:'<code>ReconBookingConnection.<b>edges</b></code><Bullet></Bullet><code>[ReconBookingEdge]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reconbookingconnectionedgesreconbookingedge--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type ReconBookingConnection {\n  pageInfo: PageInfo!\n  edges: [ReconBookingEdge]!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"reconbookingconnectionpageinfopageinfo--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ReconBookingConnection.",(0,t.jsx)("b",{children:"pageInfo"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,t.jsx)(n.code,{children:"PageInfo!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"Pagination data for this connection."}),"\n",(0,t.jsxs)(n.h4,{id:"reconbookingconnectionedgesreconbookingedge--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ReconBookingConnection.",(0,t.jsx)("b",{children:"edges"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/types/objects/recon-booking-edge",children:(0,t.jsx)(n.code,{children:"[ReconBookingEdge]!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"Contains the nodes in this connection."}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/types/objects/reconciliation-query",children:(0,t.jsx)(n.code,{children:"ReconciliationQuery"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,n,o)=>{var c=o(96540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var c,s={},d=null,l=null;for(c in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,c)&&!a.hasOwnProperty(c)&&(s[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===s[c]&&(s[c]=n[c]);return{$$typeof:t,type:e,key:d,ref:l,props:s,_owner:r.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,o)=>{e.exports=o(21020)},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var c=o(96540);const t={},s=c.createContext(t);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);