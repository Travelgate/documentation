/*! For license information please see f064d86c.c17284cf.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37650],{64659:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(74848),t=r(28453),n=r(96540);const o={id:"offers-rs",title:"OffersRs"},d=void 0,c={id:"types/objects/offers-rs",title:"OffersRs",description:"Represents a response object for offers.",source:"@site/api/types/objects/offers-rs.mdx",sourceDirName:"types/objects",slug:"/types/objects/offers-rs",permalink:"/api/types/objects/offers-rs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"offers-rs",title:"OffersRs"},sidebar:"schemaSidebar",previous:{title:"OffersAvailLoad",permalink:"/api/types/objects/offers-avail-load"},next:{title:"OperationConnection",permalink:"/api/types/objects/operation-connection"}},l={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const s={a:"a",...(0,t.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:r,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,t.R)()},[c,l]=(0,n.useState)(o);return(0,a.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&r]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>OffersRs.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"offersrsadvisemessagesadvisemessage--",level:4},{value:'<code>OffersRs.<b>offers</b></code><Bullet></Bullet><code>[OfferDto]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"offersrsoffersofferdto--",level:4},{value:'<code>OffersRs.<b>success</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"offersrssuccessboolean--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Represents a response object for offers."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type OffersRs {\n  adviseMessages: [AdviseMessage]\n  offers: [OfferDto]\n  success: Boolean!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"offersrsadvisemessagesadvisemessage--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OffersRs.",(0,a.jsx)("b",{children:"adviseMessages"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,a.jsx)(s.code,{children:"[AdviseMessage]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.p,{children:"Gets or sets the list of advise messages associated with the offers.\nSee AdviseMessage."}),"\n",(0,a.jsxs)(s.h4,{id:"offersrsoffersofferdto--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OffersRs.",(0,a.jsx)("b",{children:"offers"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/offer-dto",children:(0,a.jsx)(s.code,{children:"[OfferDto]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.p,{children:"Gets or sets the list of offers.\nSee OfferDto."}),"\n",(0,a.jsxs)(s.h4,{id:"offersrssuccessboolean--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OffersRs.",(0,a.jsx)("b",{children:"success"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"Gets a value indicating whether the operation was successful."}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/objects/inventory-mutation",children:(0,a.jsx)(s.code,{children:"InventoryMutation"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/inventory-query",children:(0,a.jsx)(s.code,{children:"InventoryQuery"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,s,r)=>{var a=r(96540),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,r){var a,n={},l=null,i=null;for(a in void 0!==r&&(l=""+r),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(i=s.ref),s)o.call(s,a)&&!c.hasOwnProperty(a)&&(n[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===n[a]&&(n[a]=s[a]);return{$$typeof:t,type:e,key:l,ref:i,props:n,_owner:d.current}}s.Fragment=n,s.jsx=l,s.jsxs=l},74848:(e,s,r)=>{e.exports=r(21020)},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>d});var a=r(96540);const t={},n=a.createContext(t);function o(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);