/*! For license information please see 6e2685b4.03d4b954.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60023],{75317:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>y,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=t(74848),c=t(28453),l=t(96540);const i={id:"inventory-cancel-policy-by-date-input",title:"InventoryCancelPolicyByDateInput"},s=void 0,r={id:"types/inputs/inventory-cancel-policy-by-date-input",title:"InventoryCancelPolicyByDateInput",description:"Represents a cancel policy by date object.",source:"@site/api/types/inputs/inventory-cancel-policy-by-date-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/inventory-cancel-policy-by-date-input",permalink:"/api/types/inputs/inventory-cancel-policy-by-date-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-cancel-policy-by-date-input",title:"InventoryCancelPolicyByDateInput"},sidebar:"schemaSidebar",previous:{title:"InventoryCancelPenaltyInput",permalink:"/api/types/inputs/inventory-cancel-penalty-input"},next:{title:"InventoryCancelPolicyInput",permalink:"/api/types/inputs/inventory-cancel-policy-input"}},o={},d=()=>{const e={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,c.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},y=e=>{const n={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,c.R)()},[r,o]=(0,l.useState)(i);return(0,a.jsxs)(s.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryCancelPolicyByDateInput.<b>start</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycancelpolicybydateinputstartdatetime--",level:4},{value:'<code>InventoryCancelPolicyByDateInput.<b>end</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycancelpolicybydateinputenddatetime--",level:4},{value:'<code>InventoryCancelPolicyByDateInput.<b>cancelPolicy</b></code><Bullet></Bullet><code>InventoryCancelPolicyInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycancelpolicybydateinputcancelpolicyinventorycancelpolicyinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Represents a cancel policy by date object."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input InventoryCancelPolicyByDateInput {\n  start: DateTime!\n  end: DateTime!\n  cancelPolicy: InventoryCancelPolicyInput!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"inventorycancelpolicybydateinputstartdatetime--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryCancelPolicyByDateInput.",(0,a.jsx)("b",{children:"start"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/date-time",children:(0,a.jsx)(n.code,{children:"DateTime!"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Start date where the cancel policy must apply."}),"\n",(0,a.jsxs)(n.h4,{id:"inventorycancelpolicybydateinputenddatetime--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryCancelPolicyByDateInput.",(0,a.jsx)("b",{children:"end"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/date-time",children:(0,a.jsx)(n.code,{children:"DateTime!"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"End date where the cancel policy must apply."}),"\n",(0,a.jsxs)(n.h4,{id:"inventorycancelpolicybydateinputcancelpolicyinventorycancelpolicyinput--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryCancelPolicyByDateInput.",(0,a.jsx)("b",{children:"cancelPolicy"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/inputs/inventory-cancel-policy-input",children:(0,a.jsx)(n.code,{children:"InventoryCancelPolicyInput!"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(n.p,{children:"Cancel policy. See CancelPolicy."}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/types/inputs/cancel-policies-create-input",children:(0,a.jsx)(n.code,{children:"CancelPoliciesCreateInput"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/inputs/cancel-policies-update-input",children:(0,a.jsx)(n.code,{children:"CancelPoliciesUpdateInput"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"input"})]})]})}function b(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,n,t)=>{var a=t(96540),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var a,l={},o=null,d=null;for(a in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,a)&&!r.hasOwnProperty(a)&&(l[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===l[a]&&(l[a]=n[a]);return{$$typeof:c,type:e,key:o,ref:d,props:l,_owner:s.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const c={},l=a.createContext(c);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);