/*! For license information please see 31b9bfa6.97aeef2f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78629],{58652:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"types/inputs/inventory-room-master-create-input","title":"InventoryRoomMasterCreateInput","description":"Room master create input data","source":"@site/api/types/inputs/inventory-room-master-create-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/inventory-room-master-create-input","permalink":"/api/types/inputs/inventory-room-master-create-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"inventory-room-master-create-input","title":"InventoryRoomMasterCreateInput"},"sidebar":"schemaSidebar","previous":{"title":"InventoryRatesSetupFilterInput","permalink":"/api/types/inputs/inventory-rates-setup-filter-input"},"next":{"title":"InventoryRoomSetupDeleteInput","permalink":"/api/types/inputs/inventory-room-setup-delete-input"}}');var a=n(74848),s=n(28453),o=n(96540);const i={id:"inventory-room-master-create-input",title:"InventoryRoomMasterCreateInput"},c=void 0,d={},l=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const[s,i]=(0,o.useState)(r);return(0,a.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryRoomMasterCreateInput.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroommastercreateinputcodestring--",level:4},{value:'<code>InventoryRoomMasterCreateInput.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroommastercreateinputnamestring--",level:4},{value:'<code>InventoryRoomMasterCreateInput.<b>clientCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroommastercreateinputclientcodestring--",level:4}];function y(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Room master create input data"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input InventoryRoomMasterCreateInput {\n  code: String!\n  name: String!\n  clientCode: String!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"inventoryroommastercreateinputcodestring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoomMasterCreateInput.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Room code"}),"\n",(0,a.jsxs)(t.h4,{id:"inventoryroommastercreateinputnamestring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoomMasterCreateInput.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Room Name"}),"\n",(0,a.jsxs)(t.h4,{id:"inventoryroommastercreateinputclientcodestring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoomMasterCreateInput.",(0,a.jsx)("b",{children:"clientCode"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Client Code"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);