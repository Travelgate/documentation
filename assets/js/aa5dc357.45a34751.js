/*! For license information please see aa5dc357.45a34751.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78724],{42355:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>r,toc:()=>g});var o=n(74848),s=n(28453),a=n(96540);const l={id:"inventory-hotel-setup",title:"InventoryHotelSetup"},i=void 0,r={id:"types/objects/inventory-hotel-setup",title:"InventoryHotelSetup",description:"Represents a hotel setup response object.",source:"@site/api/types/objects/inventory-hotel-setup.mdx",sourceDirName:"types/objects",slug:"/types/objects/inventory-hotel-setup",permalink:"/api/types/objects/inventory-hotel-setup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-hotel-setup",title:"InventoryHotelSetup"},sidebar:"schemaSidebar",previous:{title:"InventoryHotelMaster",permalink:"/api/types/objects/inventory-hotel-master"},next:{title:"InventoryLocality",permalink:"/api/types/objects/inventory-locality"}},d={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,s.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[r,d]=(0,a.useState)(l);return(0,o.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryHotelSetup.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelsetupidint--",level:4},{value:'<code>InventoryHotelSetup.<b>hotelCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelsetuphotelcodestring-",level:4},{value:'<code>InventoryHotelSetup.<b>contextCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelsetupcontextcodestring-",level:4},{value:'<code>InventoryHotelSetup.<b>active</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelsetupactiveboolean--",level:4},{value:'<code>InventoryHotelSetup.<b>sendNotification</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelsetupsendnotificationboolean--",level:4},{value:'<code>InventoryHotelSetup.<b>emailNotification</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelsetupemailnotificationstring--",level:4},{value:'<code>InventoryHotelSetup.<b>emailNotificationCc</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelsetupemailnotificationccstring--",level:4},{value:'<code>InventoryHotelSetup.<b>emailNotificationSupport</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelsetupemailnotificationsupportstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Represents a hotel setup response object."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"type InventoryHotelSetup {\n  id: Int!\n  hotelCode: String\n  contextCode: String\n  active: Boolean!\n  sendNotification: Boolean!\n  emailNotification: [String]\n  emailNotificationCc: [String]\n  emailNotificationSupport: [String]\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"inventoryhotelsetupidint--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelSetup.",(0,o.jsx)("b",{children:"id"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,o.jsx)(t.code,{children:"Int!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Unique identifier of the hotel."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"inventoryhotelsetuphotelcodestring-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelSetup.",(0,o.jsx)("b",{children:"hotelCode"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(t.code,{children:"String"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Code associated with the hotel."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"inventoryhotelsetupcontextcodestring-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelSetup.",(0,o.jsx)("b",{children:"contextCode"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(t.code,{children:"String"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Context code related to the hotel."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"inventoryhotelsetupactiveboolean--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelSetup.",(0,o.jsx)("b",{children:"active"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/boolean",children:(0,o.jsx)(t.code,{children:"Boolean!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Indicates whether the hotel is active."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"inventoryhotelsetupsendnotificationboolean--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelSetup.",(0,o.jsx)("b",{children:"sendNotification"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/boolean",children:(0,o.jsx)(t.code,{children:"Boolean!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Indicates whether booking notifications should be sent for this hotel."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"inventoryhotelsetupemailnotificationstring--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelSetup.",(0,o.jsx)("b",{children:"emailNotification"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(t.code,{children:"[String]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Email addresses for booking notifications related to this hotel."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"inventoryhotelsetupemailnotificationccstring--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelSetup.",(0,o.jsx)("b",{children:"emailNotificationCc"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(t.code,{children:"[String]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Email addresses to be copied on booking notifications related to this hotel."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"inventoryhotelsetupemailnotificationsupportstring--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelSetup.",(0,o.jsx)("b",{children:"emailNotificationSupport"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(t.code,{children:"[String]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Email addresses or contact information for support that will be displayed in the email notifications."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/api/types/objects/hotels-setup-rs",children:(0,o.jsx)(t.code,{children:"HotelsSetupRs"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var o=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,a={},d=null,c=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,o)&&!r.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:s,type:e,key:d,ref:c,props:a,_owner:i.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var o=n(96540);const s={},a=o.createContext(s);function l(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);