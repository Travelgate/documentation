/*! For license information please see ae78df03.d420a25d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40397],{66844:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=t(74848),s=t(28453),a=t(96540);const i={id:"inventory-markets-input",title:"InventoryMarketsInput"},d=void 0,l={id:"types/inputs/inventory-markets-input",title:"InventoryMarketsInput",description:"Represents a markets entity.",source:"@site/api/types/inputs/inventory-markets-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/inventory-markets-input",permalink:"/api/types/inputs/inventory-markets-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-markets-input",title:"InventoryMarketsInput"},sidebar:"schemaSidebar",previous:{title:"InventoryLocalitiesSearchFilterInput",permalink:"/api/types/inputs/inventory-localities-search-filter-input"},next:{title:"InventoryOfferSetupInput",permalink:"/api/types/inputs/inventory-offer-setup-input"}},o={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[l,o]=(0,a.useState)(i);return(0,r.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryMarketsInput.<b>included</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorymarketsinputincludedstring--",level:4},{value:'<code>InventoryMarketsInput.<b>excluded</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorymarketsinputexcludedstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Represents a markets entity."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input InventoryMarketsInput {\n  included: [String]\n  excluded: [String]\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"inventorymarketsinputincludedstring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryMarketsInput.",(0,r.jsx)("b",{children:"included"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"[String]"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.p,{children:"Included markets."}),"\n",(0,r.jsxs)(n.h4,{id:"inventorymarketsinputexcludedstring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryMarketsInput.",(0,r.jsx)("b",{children:"excluded"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"[String]"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.p,{children:"Excluded markets."}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/types/inputs/inventory-booking-rules-input",children:(0,r.jsx)(n.code,{children:"InventoryBookingRulesInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,a={},o=null,c=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:c,props:a,_owner:d.current}}n.Fragment=a,n.jsx=o,n.jsxs=o},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);