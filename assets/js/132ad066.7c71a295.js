/*! For license information please see 132ad066.7c71a295.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30532],{60781:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>c,assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"types/inputs/inventory-rate-setup-update-input","title":"InventoryRateSetupUpdateInput","description":"Rates setup delete input data","source":"@site/api/types/inputs/inventory-rate-setup-update-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/inventory-rate-setup-update-input","permalink":"/api/types/inputs/inventory-rate-setup-update-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"inventory-rate-setup-update-input","title":"InventoryRateSetupUpdateInput"},"sidebar":"schemaSidebar","previous":{"title":"InventoryRateSetupDeleteInput","permalink":"/api/types/inputs/inventory-rate-setup-delete-input"},"next":{"title":"InventoryRatesSetupCreateInput","permalink":"/api/types/inputs/inventory-rates-setup-create-input"}}');var s=n(74848),r=n(28453),d=n(96540);const i={id:"inventory-rate-setup-update-input",title:"InventoryRateSetupUpdateInput"},o=void 0,l={},p=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),c=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const[r,i]=(0,d.useState)(a);return(0,s.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryRateSetupUpdateInput.<b>clientCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryratesetupupdateinputclientcodestring--",level:4},{value:'<code>InventoryRateSetupUpdateInput.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryratesetupupdateinputsuppliercodestring--",level:4},{value:'<code>InventoryRateSetupUpdateInput.<b>rates</b></code><Bullet></Bullet><code>[RateUpdateInput]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryratesetupupdateinputratesrateupdateinput--",level:4},{value:'<code>InventoryRateSetupUpdateInput.<b>hotelCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryratesetupupdateinputhotelcodestring--",level:4},{value:'<code>InventoryRateSetupUpdateInput.<b>contextCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryratesetupupdateinputcontextcodestring-",level:4}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Rates setup delete input data"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input InventoryRateSetupUpdateInput {\n  clientCode: String!\n  supplierCode: String!\n  rates: [RateUpdateInput]!\n  hotelCode: String!\n  contextCode: String\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryratesetupupdateinputclientcodestring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRateSetupUpdateInput.",(0,s.jsx)("b",{children:"clientCode"})]})}),(0,s.jsx)(p,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"Client code."}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryratesetupupdateinputsuppliercodestring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRateSetupUpdateInput.",(0,s.jsx)("b",{children:"supplierCode"})]})}),(0,s.jsx)(p,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"Travelgate Supplier/Channel code."}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryratesetupupdateinputratesrateupdateinput--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRateSetupUpdateInput.",(0,s.jsx)("b",{children:"rates"})]})}),(0,s.jsx)(p,{}),(0,s.jsx)(t.a,{href:"/api/types/inputs/rate-update-input",children:(0,s.jsx)(t.code,{children:"[RateUpdateInput]!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(t.p,{children:"Rates input data. See RateUpdate."}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryratesetupupdateinputhotelcodestring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRateSetupUpdateInput.",(0,s.jsx)("b",{children:"hotelCode"})]})}),(0,s.jsx)(p,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"Code associated with the hotel."}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryratesetupupdateinputcontextcodestring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRateSetupUpdateInput.",(0,s.jsx)("b",{children:"contextCode"})]})}),(0,s.jsx)(p,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"Context code."})]})}function y(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var a=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,r={},l=null,p=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)d.call(t,a)&&!o.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:s,type:e,key:l,ref:p,props:r,_owner:i.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function d(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);