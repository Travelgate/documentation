/*! For license information please see 50b79284.24f9350b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12640],{92008:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>y,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=o(74848),t=o(28453),s=o(96540);const a={id:"inventory-room",title:"InventoryRoom"},i=void 0,c={id:"types/objects/inventory-room",title:"InventoryRoom",description:"Represents a room within the inventory system.",source:"@site/api/types/objects/inventory-room.mdx",sourceDirName:"types/objects",slug:"/types/objects/inventory-room",permalink:"/api/types/objects/inventory-room",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-room",title:"InventoryRoom"},sidebar:"schemaSidebar",previous:{title:"InventoryRoomUse",permalink:"/api/types/objects/inventory-room-use"},next:{title:"InventorySurcharge",permalink:"/api/types/objects/inventory-surcharge"}},d={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,t.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:n,children:o,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,t.R)()},[c,d]=(0,s.useState)(a);return(0,r.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&o]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryRoom.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroomidint--",level:4},{value:'<code>InventoryRoom.<b>code</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroomcodestring-",level:4},{value:'<code>InventoryRoom.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryroomnamestring-",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Represents a room within the inventory system."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type InventoryRoom {\n  id: Int!\n  code: String\n  name: String\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"inventoryroomidint--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoom.",(0,r.jsx)("b",{children:"id"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(n.code,{children:"Int!"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Unique identifier for the room."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventoryroomcodestring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoom.",(0,r.jsx)("b",{children:"code"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Code of the room."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventoryroomnamestring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRoom.",(0,r.jsx)("b",{children:"name"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Name of the room."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/types/objects/rooms-rs",children:(0,r.jsx)(n.code,{children:"RoomsRs"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},21020:(e,n,o)=>{var r=o(96540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var r,s={},d=null,l=null;for(r in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,o)=>{e.exports=o(21020)},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var r=o(96540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);