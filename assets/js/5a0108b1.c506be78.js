/*! For license information please see 5a0108b1.c506be78.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78127],{77005:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"types/inputs/inventory-hotels-setup-create-input","title":"InventoryHotelsSetupCreateInput","description":"Hotel Setup create mutation input","source":"@site/api/types/inputs/inventory-hotels-setup-create-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/inventory-hotels-setup-create-input","permalink":"/api/types/inputs/inventory-hotels-setup-create-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"inventory-hotels-setup-create-input","title":"InventoryHotelsSetupCreateInput"},"sidebar":"schemaSidebar","previous":{"title":"InventoryHotelsMasterSearchFilterInput","permalink":"/api/types/inputs/inventory-hotels-master-search-filter-input"},"next":{"title":"InventoryHotelsSetupUpdateInput","permalink":"/api/types/inputs/inventory-hotels-setup-update-input"}}');var r=n(74848),o=n(28453),a=n(96540);const l={id:"inventory-hotels-setup-create-input",title:"InventoryHotelsSetupCreateInput"},i=void 0,c={},d=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const[o,l]=(0,a.useState)(s);return(0,r.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryHotelsSetupCreateInput.<b>clientCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelssetupcreateinputclientcodestring--",level:4},{value:'<code>InventoryHotelsSetupCreateInput.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelssetupcreateinputsuppliercodestring--",level:4},{value:'<code>InventoryHotelsSetupCreateInput.<b>hotel</b></code><Bullet></Bullet><code>InventoryCreateHotelSetupInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelssetupcreateinputhotelinventorycreatehotelsetupinput--",level:4}];function g(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Hotel Setup create mutation input"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input InventoryHotelsSetupCreateInput {\n  clientCode: String!\n  supplierCode: String!\n  hotel: InventoryCreateHotelSetupInput!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryhotelssetupcreateinputclientcodestring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelsSetupCreateInput.",(0,r.jsx)("b",{children:"clientCode"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"Client code."}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryhotelssetupcreateinputsuppliercodestring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelsSetupCreateInput.",(0,r.jsx)("b",{children:"supplierCode"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"Travelgate Supplier/Channel code."}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryhotelssetupcreateinputhotelinventorycreatehotelsetupinput--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelsSetupCreateInput.",(0,r.jsx)("b",{children:"hotel"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/inventory-create-hotel-setup-input",children:(0,r.jsx)(t.code,{children:"InventoryCreateHotelSetupInput!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsx)(t.p,{children:"Hotel input data."})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,o={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!i.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);