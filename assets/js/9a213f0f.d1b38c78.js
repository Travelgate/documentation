/*! For license information please see 9a213f0f.d1b38c78.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12611],{23461:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>y,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"types/objects/inventory-cancel-penalty","title":"InventoryCancelPenalty","description":"Represents a cancel penalty object.","source":"@site/api/types/objects/inventory-cancel-penalty.mdx","sourceDirName":"types/objects","slug":"/types/objects/inventory-cancel-penalty","permalink":"/api/types/objects/inventory-cancel-penalty","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"inventory-cancel-penalty","title":"InventoryCancelPenalty"},"sidebar":"schemaSidebar","previous":{"title":"InventoryBookingWindow","permalink":"/api/types/objects/inventory-booking-window"},"next":{"title":"InventoryCancelPoliciesRate","permalink":"/api/types/objects/inventory-cancel-policies-rate"}}');var l=a(74848),r=a(28453),s=a(96540);const c={id:"inventory-cancel-penalty",title:"InventoryCancelPenalty"},o=void 0,d={},i=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),y=e=>(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:n,children:a,startOpen:t=!1})=>{const[r,c]=(0,s.useState)(t);return(0,l.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&a]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryCancelPenalty.<b>daysBeforeArrival</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycancelpenaltydaysbeforearrivalint--",level:4},{value:'<code>InventoryCancelPenalty.<b>penaltyType</b></code><Bullet></Bullet><code>PenaltyType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycancelpenaltypenaltytypepenaltytype--",level:4},{value:'<code>InventoryCancelPenalty.<b>value</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycancelpenaltyvaluefloat--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Represents a cancel penalty object."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"type InventoryCancelPenalty {\n  daysBeforeArrival: Int!\n  penaltyType: PenaltyType!\n  value: Float!\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(n.h4,{id:"inventorycancelpenaltydaysbeforearrivalint--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryCancelPenalty.",(0,l.jsx)("b",{children:"daysBeforeArrival"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,l.jsx)(n.code,{children:"Int!"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(n.p,{children:"Number of days prior to arrival day in which this Cancellation policy applies."}),"\n",(0,l.jsxs)(n.h4,{id:"inventorycancelpenaltypenaltytypepenaltytype--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryCancelPenalty.",(0,l.jsx)("b",{children:"penaltyType"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(n.a,{href:"/api/types/enums/penalty-type",children:(0,l.jsx)(n.code,{children:"PenaltyType!"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsx)(n.p,{children:"Penalty type. See PenaltyType."}),"\n",(0,l.jsxs)(n.h4,{id:"inventorycancelpenaltyvaluefloat--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryCancelPenalty.",(0,l.jsx)("b",{children:"value"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(n.a,{href:"/api/types/scalars/float",children:(0,l.jsx)(n.code,{children:"Float!"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(n.p,{children:"Penalty value."}),"\n",(0,l.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/api/types/objects/inventory-cancel-policy",children:(0,l.jsx)(n.code,{children:"InventoryCancelPolicy"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},21020:(e,n,a)=>{var t=a(96540),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,a){var t,r={},d=null,i=null;for(t in void 0!==a&&(d=""+a),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(i=n.ref),n)s.call(n,t)&&!o.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:l,type:e,key:d,ref:i,props:r,_owner:c.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>c});var t=a(96540);const l={},r=t.createContext(l);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);