/*! For license information please see 5be420bd.6fe0c6d5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30033],{80555:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"types/inputs/inventory-cancel-policy-input","title":"InventoryCancelPolicyInput","description":"Represents a cancel policy object.","source":"@site/api/types/inputs/inventory-cancel-policy-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/inventory-cancel-policy-input","permalink":"/api/types/inputs/inventory-cancel-policy-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"inventory-cancel-policy-input","title":"InventoryCancelPolicyInput"},"sidebar":"schemaSidebar","previous":{"title":"InventoryCancelPolicyByDateInput","permalink":"/api/types/inputs/inventory-cancel-policy-by-date-input"},"next":{"title":"InventoryContextsFilterInput","permalink":"/api/types/inputs/inventory-contexts-filter-input"}}');var l=t(74848),c=t(28453),i=t(96540);const s={id:"inventory-cancel-policy-input",title:"InventoryCancelPolicyInput"},r=void 0,o={},d=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{className:e.class,children:e.text})}),y=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const[c,s]=(0,i.useState)(a);return(0,l.jsxs)("details",{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryCancelPolicyInput.<b>refundable</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycancelpolicyinputrefundableboolean--",level:4},{value:'<code>InventoryCancelPolicyInput.<b>cancelPenalties</b></code><Bullet></Bullet><code>[InventoryCancelPenaltyInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycancelpolicyinputcancelpenaltiesinventorycancelpenaltyinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Represents a cancel policy object."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"input InventoryCancelPolicyInput {\n  refundable: Boolean!\n  cancelPenalties: [InventoryCancelPenaltyInput]\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(n.h4,{id:"inventorycancelpolicyinputrefundableboolean--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryCancelPolicyInput.",(0,l.jsx)("b",{children:"refundable"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,l.jsx)(n.code,{children:"Boolean!"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(n.p,{children:"Indicates if the rate is refundable."}),"\n",(0,l.jsxs)(n.h4,{id:"inventorycancelpolicyinputcancelpenaltiesinventorycancelpenaltyinput--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryCancelPolicyInput.",(0,l.jsx)("b",{children:"cancelPenalties"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/types/inputs/inventory-cancel-penalty-input",children:(0,l.jsx)(n.code,{children:"[InventoryCancelPenaltyInput]"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsx)(n.p,{children:"List of penalties applicable for the rate. See CancelPenalty."}),"\n",(0,l.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/api/types/inputs/cancel-policies-create-input",children:(0,l.jsx)(n.code,{children:"CancelPoliciesCreateInput"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/types/inputs/cancel-policies-update-input",children:(0,l.jsx)(n.code,{children:"CancelPoliciesUpdateInput"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/types/inputs/inventory-cancel-policy-by-date-input",children:(0,l.jsx)(n.code,{children:"InventoryCancelPolicyByDateInput"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}},21020:(e,n,t)=>{var a=t(96540),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var a,c={},o=null,d=null;for(a in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,a)&&!r.hasOwnProperty(a)&&(c[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===c[a]&&(c[a]=n[a]);return{$$typeof:l,type:e,key:o,ref:d,props:c,_owner:s.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const l={},c=a.createContext(l);function i(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);