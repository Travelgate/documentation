/*! For license information please see cc5884b3.b68ff901.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79579],{62388:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>p,Details:()=>u,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>y});var s=n(74848),r=n(28453),i=n(96540);const a={id:"nights-type",title:"NightsType"},o=void 0,l={id:"types/enums/nights-type",title:"NightsType",description:"Nights type applicable to the offer.",source:"@site/api/types/enums/nights-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/nights-type",permalink:"/api/types/enums/nights-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"nights-type",title:"NightsType"},sidebar:"schemaSidebar",previous:{title:"ModeType",permalink:"/api/types/enums/mode-type"},next:{title:"OperationOrderByEnum",permalink:"/api/types/enums/operation-order-by-enum"}},c={},p=()=>{const e={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,r.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const o={details:"details",summary:"summary",...(0,r.R)()},[l,c]=(0,i.useState)(a);return(0,s.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},y=[{value:"Values",id:"values",level:3},{value:"<code>NightsType.<b>FIRST</b></code>",id:"nightstypefirst",level:4},{value:"<code>NightsType.<b>LAST</b></code>",id:"nightstypelast",level:4},{value:"<code>NightsType.<b>CHEAPEST</b></code>",id:"nightstypecheapest",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Nights type applicable to the offer."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum NightsType {\n  FIRST\n  LAST\n  CHEAPEST\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"nightstypefirst",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NightsType.",(0,s.jsx)("b",{children:"FIRST"})]})})}),"\n",(0,s.jsx)(t.p,{children:"Apply to the first nights."}),"\n",(0,s.jsx)(t.h4,{id:"nightstypelast",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NightsType.",(0,s.jsx)("b",{children:"LAST"})]})})}),"\n",(0,s.jsx)(t.p,{children:"Apply to the last nights."}),"\n",(0,s.jsx)(t.h4,{id:"nightstypecheapest",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NightsType.",(0,s.jsx)("b",{children:"CHEAPEST"})]})})}),"\n",(0,s.jsx)(t.p,{children:"Apply to the cheapest nights."}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/inputs/inventory-offer-setup-input",children:(0,s.jsx)(t.code,{children:"InventoryOfferSetupInput"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(p,{}),(0,s.jsx)(t.a,{href:"/api/types/inputs/inventory-offer-setup-update-input",children:(0,s.jsx)(t.code,{children:"InventoryOfferSetupUpdateInput"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(p,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/offer-dto",children:(0,s.jsx)(t.code,{children:"OfferDto"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,p=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)a.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:p,props:i,_owner:o.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);