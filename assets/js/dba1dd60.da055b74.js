/*! For license information please see dba1dd60.da055b74.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25425],{56370:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>y,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>x});var r=n(74848),s=n(28453),i=n(96540);const o={id:"inventory-contexts-filter-input",title:"InventoryContextsFilterInput"},l=void 0,a={id:"types/inputs/inventory-contexts-filter-input",title:"InventoryContextsFilterInput",description:"Inventory Contexts filter input.",source:"@site/api/types/inputs/inventory-contexts-filter-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/inventory-contexts-filter-input",permalink:"/api/types/inputs/inventory-contexts-filter-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-contexts-filter-input",title:"InventoryContextsFilterInput"},sidebar:"schemaSidebar",previous:{title:"InventoryCancelPolicyInput",permalink:"/api/types/inputs/inventory-cancel-policy-input"},next:{title:"InventoryCreateHotelSetupInput",permalink:"/api/types/inputs/inventory-create-hotel-setup-input"}},c={},p=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[a,c]=(0,i.useState)(o);return(0,r.jsxs)(l.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryContextsFilterInput.<b>supplierCodes</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycontextsfilterinputsuppliercodesstring--",level:4}];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Inventory Contexts filter input."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input InventoryContextsFilterInput {\n  supplierCodes: [String]\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"inventorycontextsfilterinputsuppliercodesstring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryContextsFilterInput.",(0,r.jsx)("b",{children:"supplierCodes"})]})}),(0,r.jsx)(p,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"[String]"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Supplier codes to retrieve their context."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,p=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:p,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);