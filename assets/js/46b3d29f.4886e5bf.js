/*! For license information please see 46b3d29f.4886e5bf.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46603],{92888:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>h,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"types/objects/inventory-room-set-up","title":"InventoryRoomSetUp","description":"Represents a room setup response object.","source":"@site/api/types/objects/inventory-room-set-up.mdx","sourceDirName":"types/objects","slug":"/types/objects/inventory-room-set-up","permalink":"/api/types/objects/inventory-room-set-up","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"inventory-room-set-up","title":"InventoryRoomSetUp"},"sidebar":"schemaSidebar","previous":{"title":"InventoryRateSetup","permalink":"/api/types/objects/inventory-rate-setup"},"next":{"title":"InventoryRoomUse","permalink":"/api/types/objects/inventory-room-use"}}');var s=n(74848),r=n(28453),a=n(96540);const d={id:"inventory-room-set-up",title:"InventoryRoomSetUp"},c=void 0,l={},i=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),y=({dataOpen:e,dataClose:o,children:n,startOpen:t=!1})=>{const[r,d]=(0,a.useState)(t);return(0,s.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:o}),r&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryRoomSetUp.<b>code</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroomsetupcodestring-",level:4},{value:'<code>InventoryRoomSetUp.<b>master</b></code><Bullet></Bullet><code>InventoryMasterRoom</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroomsetupmasterinventorymasterroom-",level:4},{value:'<code>InventoryRoomSetUp.<b>active</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroomsetupactiveboolean--",level:4},{value:'<code>InventoryRoomSetUp.<b>externalCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroomsetupexternalcodestring-",level:4},{value:'<code>InventoryRoomSetUp.<b>standard</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroomsetupstandardint--",level:4},{value:'<code>InventoryRoomSetUp.<b>uses</b></code><Bullet></Bullet><code>[[InventoryRoomUse]]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroomsetupusesinventoryroomuse--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const o={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Represents a room setup response object."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-graphql",children:"type InventoryRoomSetUp {\n  code: String\n  master: InventoryMasterRoom\n  active: Boolean!\n  externalCode: String\n  standard: Int!\n  uses: [[InventoryRoomUse]]!\n}\n"})}),"\n",(0,s.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(o.h4,{id:"inventoryroomsetupcodestring-",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoomSetUp.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(o.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(o.p,{children:"Code associated with the room."}),"\n",(0,s.jsxs)(o.h4,{id:"inventoryroomsetupmasterinventorymasterroom-",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoomSetUp.",(0,s.jsx)("b",{children:"master"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/api/types/objects/inventory-master-room",children:(0,s.jsx)(o.code,{children:"InventoryMasterRoom"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(o.p,{children:"Master of the room."}),"\n",(0,s.jsxs)(o.h4,{id:"inventoryroomsetupactiveboolean--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoomSetUp.",(0,s.jsx)("b",{children:"active"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/api/types/scalars/boolean",children:(0,s.jsx)(o.code,{children:"Boolean!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(o.p,{children:"Indicates whether the room is active."}),"\n",(0,s.jsxs)(o.h4,{id:"inventoryroomsetupexternalcodestring-",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoomSetUp.",(0,s.jsx)("b",{children:"externalCode"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(o.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(o.p,{children:"External code associated with the room."}),"\n",(0,s.jsxs)(o.h4,{id:"inventoryroomsetupstandardint--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoomSetUp.",(0,s.jsx)("b",{children:"standard"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(o.code,{children:"Int!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(o.p,{children:"Standard of the room. Typically the number of guests."}),"\n",(0,s.jsxs)(o.h4,{id:"inventoryroomsetupusesinventoryroomuse--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoomSetUp.",(0,s.jsx)("b",{children:"uses"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/api/types/objects/inventory-room-use",children:(0,s.jsx)(o.code,{children:"[[InventoryRoomUse]]!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(o.p,{children:"List of uses associated with the room."}),"\n",(0,s.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/api/types/objects/inventory-rate-setup",children:(0,s.jsx)(o.code,{children:"InventoryRateSetup"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/api/types/objects/rooms-set-up-rs",children:(0,s.jsx)(o.code,{children:"RoomsSetUpRs"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},21020:(e,o,n)=>{var t=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,n){var t,r={},l=null,i=null;for(t in void 0!==n&&(l=""+n),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(i=o.ref),o)a.call(o,t)&&!c.hasOwnProperty(t)&&(r[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===r[t]&&(r[t]=o[t]);return{$$typeof:s,type:e,key:l,ref:i,props:r,_owner:d.current}}o.Fragment=r,o.jsx=l,o.jsxs=l},74848:(e,o,n)=>{e.exports=n(21020)},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>d});var t=n(96540);const s={},r=t.createContext(s);function a(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);