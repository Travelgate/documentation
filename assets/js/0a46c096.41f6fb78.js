/*! For license information please see 0a46c096.41f6fb78.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98340],{5425:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>g,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>a,default:()=>j,frontMatter:()=>c,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"types/objects/booking-room","title":"BookingRoom","description":"No description","source":"@site/api/types/objects/booking-room.mdx","sourceDirName":"types/objects","slug":"/types/objects/booking-room","permalink":"/api/types/objects/booking-room","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"booking-room","title":"BookingRoom"},"sidebar":"schemaSidebar","previous":{"title":"BookingPayload","permalink":"/api/types/objects/booking-payload"},"next":{"title":"BusinessRules","permalink":"/api/types/objects/business-rules"}}');var r=n(74848),t=n(28453),i=n(96540);const c={id:"booking-room",title:"BookingRoom"},a=void 0,d={},l=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:o,children:n,startOpen:s=!1})=>{const[t,c]=(0,i.useState)(s);return(0,r.jsxs)("details",{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:t?e:o}),t&&n]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>BookingRoom.<b>occupancyRefId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingroomoccupancyrefidint-",level:4},{value:'<code>BookingRoom.<b>code</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingroomcodestring-",level:4},{value:'<code>BookingRoom.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingroomdescriptionstring-",level:4},{value:'<code>BookingRoom.<b>price</b></code><Bullet></Bullet><code>Price</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingroompriceprice-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const o={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"No description"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-graphql",children:"type BookingRoom {\n  occupancyRefId: Int\n  code: String\n  description: String\n  price: Price\n}\n"})}),"\n",(0,r.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(o.h4,{id:"bookingroomoccupancyrefidint-",children:[(0,r.jsx)(o.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingRoom.",(0,r.jsx)("b",{children:"occupancyRefId"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(o.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(o.code,{children:"Int"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(o.p,{children:"ID reference to the occupancy"}),"\n",(0,r.jsxs)(o.h4,{id:"bookingroomcodestring-",children:[(0,r.jsx)(o.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingRoom.",(0,r.jsx)("b",{children:"code"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(o.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(o.code,{children:"String"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(o.p,{children:"Indicates the room code"}),"\n",(0,r.jsxs)(o.h4,{id:"bookingroomdescriptionstring-",children:[(0,r.jsx)(o.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingRoom.",(0,r.jsx)("b",{children:"description"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(o.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(o.code,{children:"String"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(o.p,{children:"Description about the room"}),"\n",(0,r.jsxs)(o.h4,{id:"bookingroompriceprice-",children:[(0,r.jsx)(o.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingRoom.",(0,r.jsx)("b",{children:"price"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(o.a,{href:"/api/types/objects/price",children:(0,r.jsx)(o.code,{children:"Price"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(o.p,{children:"Total price for all days."}),"\n",(0,r.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/api/types/objects/booking-hotel",children:(0,r.jsx)(o.code,{children:"BookingHotel"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(o.a,{href:"/api/types/objects/booking-hotel-details",children:(0,r.jsx)(o.code,{children:"BookingHotelDetails"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},21020:(e,o,n)=>{var s=n(96540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,n){var s,t={},d=null,l=null;for(s in void 0!==n&&(d=""+n),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(l=o.ref),o)i.call(o,s)&&!a.hasOwnProperty(s)&&(t[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===t[s]&&(t[s]=o[s]);return{$$typeof:r,type:e,key:d,ref:l,props:t,_owner:c.current}}o.Fragment=t,o.jsx=d,o.jsxs=d},74848:(e,o,n)=>{e.exports=n(21020)},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>c});var s=n(96540);const r={},t=s.createContext(r);function i(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);