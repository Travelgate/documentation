/*! For license information please see eadd14aa.7b9d4717.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3668],{53262:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>g,Bullet:()=>o,Details:()=>f,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>m});var a=r(74848),d=r(28453),i=r(96540);const s={id:"flight-order-item-data",title:"FlightOrderItemData",hide_table_of_contents:!1},l=void 0,n={id:"objects/flight-order-item-data",title:"FlightOrderItemData",description:"No description",source:"@site/api/objects/flight-order-item-data.mdx",sourceDirName:"objects",slug:"/objects/flight-order-item-data",permalink:"/api/objects/flight-order-item-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flight-order-item-data",title:"FlightOrderItemData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FlightOrderData",permalink:"/api/objects/flight-order-data"},next:{title:"FlightOrderItem",permalink:"/api/objects/flight-order-item"}},c={},o=()=>{const e={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,d.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const t={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:r,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,d.R)()},[n,c]=(0,i.useState)(s);return(0,a.jsxs)(l.details,{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:n?e:t}),n&&r]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>FlightOrderItemData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightorderitemdatacodeid--",level:4},{value:'<code>FlightOrderItemData.<b>price</b></code><Bullet></Bullet><code>FlightPrice!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightorderitemdatapriceflightprice--",level:4},{value:'<code>FlightOrderItemData.<b>service</b></code><Bullet></Bullet><code>[FlightService!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightorderitemdataserviceflightservice--",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type FlightOrderItemData {\n  code: ID!\n  price: FlightPrice!\n  service: [FlightService!]\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"flightorderitemdatacodeid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrderItemData.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/scalars/id",children:(0,a.jsx)(t.code,{children:"ID!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"flightorderitemdatapriceflightprice--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrderItemData.",(0,a.jsx)("b",{children:"price"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/objects/flight-price",children:(0,a.jsx)(t.code,{children:"FlightPrice!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"flightorderitemdataserviceflightservice--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrderItemData.",(0,a.jsx)("b",{children:"service"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/objects/flight-service",children:(0,a.jsx)(t.code,{children:"[FlightService!]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/objects/flight-order-item",children:(0,a.jsx)(t.code,{children:"FlightOrderItem"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,t,r)=>{var a=r(96540),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,i={},c=null,o=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(o=t.ref),t)s.call(t,a)&&!n.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:d,type:e,key:c,ref:o,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var a=r(96540);const d={},i=a.createContext(d);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);