/*! For license information please see 4103fd58.9bab7b6a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82948],{35671:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var o=t(74848),i=t(28453),r=t(96540);const s={id:"inventory-booking-window-input",title:"InventoryBookingWindowInput"},a=void 0,d={id:"types/inputs/inventory-booking-window-input",title:"InventoryBookingWindowInput",description:"Represents a booking window entity.",source:"@site/api/types/inputs/inventory-booking-window-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/inventory-booking-window-input",permalink:"/api/types/inputs/inventory-booking-window-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-booking-window-input",title:"InventoryBookingWindowInput"},sidebar:"schemaSidebar",previous:{title:"InventoryBookingRulesInput",permalink:"/api/types/inputs/inventory-booking-rules-input"},next:{title:"InventoryCancelPenaltyInput",permalink:"/api/types/inputs/inventory-cancel-penalty-input"}},l={},c=()=>{const e={span:"span",...(0,i.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,i.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,i.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,i.R)()},[d,l]=(0,r.useState)(s);return(0,o.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryBookingWindowInput.<b>start</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorybookingwindowinputstartdatetime--",level:4},{value:'<code>InventoryBookingWindowInput.<b>end</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorybookingwindowinputenddatetime--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Represents a booking window entity."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"input InventoryBookingWindowInput {\n  start: DateTime!\n  end: DateTime!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"inventorybookingwindowinputstartdatetime--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryBookingWindowInput.",(0,o.jsx)("b",{children:"start"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/date-time",children:(0,o.jsx)(n.code,{children:"DateTime!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.p,{children:"Start date of the booking window."}),"\n",(0,o.jsxs)(n.h4,{id:"inventorybookingwindowinputenddatetime--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryBookingWindowInput.",(0,o.jsx)("b",{children:"end"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/date-time",children:(0,o.jsx)(n.code,{children:"DateTime!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.p,{children:"End date of the booking window."}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/types/inputs/inventory-booking-rules-input",children:(0,o.jsx)(n.code,{children:"InventoryBookingRulesInput"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var o=t(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,r={},l=null,c=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,o)&&!d.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:i,type:e,key:l,ref:c,props:r,_owner:a.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);