/*! For license information please see 14300f93.684dce46.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33847],{91023:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>a,default:()=>x,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var r=n(74848),s=n(28453),i=n(96540);const o={id:"price-per-room-input",title:"PricePerRoomInput"},a=void 0,p={id:"types/inputs/price-per-room-input",title:"PricePerRoomInput",description:"Represents a price per room.",source:"@site/api/types/inputs/price-per-room-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/price-per-room-input",permalink:"/api/types/inputs/price-per-room-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"price-per-room-input",title:"PricePerRoomInput"},sidebar:"schemaSidebar",previous:{title:"PricePerOccupancyInput",permalink:"/api/types/inputs/price-per-occupancy-input"},next:{title:"PricePerStandardOccupancyInput",permalink:"/api/types/inputs/price-per-standard-occupancy-input"}},l={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const a={details:"details",summary:"summary",...(0,s.R)()},[p,l]=(0,i.useState)(o);return(0,r.jsxs)(a.details,{...p?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:p?e:t}),p&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PricePerRoomInput.<b>amount</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"priceperroominputamountfloat--",level:4},{value:'<code>PricePerRoomInput.<b>additionalGuestsSupplements</b></code><Bullet></Bullet><code>AdditionalGuestsSupplementsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"priceperroominputadditionalguestssupplementsadditionalguestssupplementsinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Represents a price per room."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input PricePerRoomInput {\n  amount: Float!\n  additionalGuestsSupplements: AdditionalGuestsSupplementsInput\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"priceperroominputamountfloat--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["PricePerRoomInput.",(0,r.jsx)("b",{children:"amount"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/float",children:(0,r.jsx)(t.code,{children:"Float!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"Amount associated with the room. This is the price for the room."}),"\n",(0,r.jsxs)(t.h4,{id:"priceperroominputadditionalguestssupplementsadditionalguestssupplementsinput-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["PricePerRoomInput.",(0,r.jsx)("b",{children:"additionalGuestsSupplements"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/additional-guests-supplements-input",children:(0,r.jsx)(t.code,{children:"AdditionalGuestsSupplementsInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsx)(t.p,{children:"Price supplements for additional passengers. See AdditionalGuestsSupplements."}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/inputs/prices-load-input",children:(0,r.jsx)(t.code,{children:"PricesLoadInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!p.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);