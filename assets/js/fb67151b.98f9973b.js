/*! For license information please see fb67151b.98f9973b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2297],{58511:(e,r,c)=>{c.r(r),c.d(r,{Badge:()=>u,Bullet:()=>o,Details:()=>y,SpecifiedBy:()=>l,assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"types/inputs/prices-load-input","title":"PricesLoadInput","description":"Represents prices to be loaded.","source":"@site/api/types/inputs/prices-load-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/prices-load-input","permalink":"/api/types/inputs/prices-load-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"prices-load-input","title":"PricesLoadInput"},"sidebar":"schemaSidebar","previous":{"title":"PriceUnderStandardOccupancyInput","permalink":"/api/types/inputs/price-under-standard-occupancy-input"},"next":{"title":"PricesPerOccupancyInput","permalink":"/api/types/inputs/prices-per-occupancy-input"}}');var t=c(74848),i=c(28453),a=c(96540);const s={id:"prices-load-input",title:"PricesLoadInput"},p=void 0,d={},o=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),l=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),y=({dataOpen:e,dataClose:r,children:c,startOpen:n=!1})=>{const[i,s]=(0,a.useState)(n);return(0,t.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:i?e:r}),i&&c]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PricesLoadInput.<b>pricePerRoom</b></code><Bullet></Bullet><code>PricePerRoomInput</code> <Badge class="badge badge--secondary"></Badge>',id:"pricesloadinputpriceperroompriceperroominput-",level:4},{value:'<code>PricesLoadInput.<b>pricePerStandardOccupancy</b></code><Bullet></Bullet><code>PricePerStandardOccupancyInput</code> <Badge class="badge badge--secondary"></Badge>',id:"pricesloadinputpriceperstandardoccupancypriceperstandardoccupancyinput-",level:4},{value:'<code>PricesLoadInput.<b>pricesPerOccupancy</b></code><Bullet></Bullet><code>PricesPerOccupancyInput</code> <Badge class="badge badge--secondary"></Badge>',id:"pricesloadinputpricesperoccupancypricesperoccupancyinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Represents prices to be loaded."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"input PricesLoadInput {\n  pricePerRoom: PricePerRoomInput\n  pricePerStandardOccupancy: PricePerStandardOccupancyInput\n  pricesPerOccupancy: PricesPerOccupancyInput\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"pricesloadinputpriceperroompriceperroominput-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PricesLoadInput.",(0,t.jsx)("b",{children:"pricePerRoom"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/api/types/inputs/price-per-room-input",children:(0,t.jsx)(r.code,{children:"PricePerRoomInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(r.p,{children:"Price per room. See PricePerRoom."}),"\n",(0,t.jsxs)(r.h4,{id:"pricesloadinputpriceperstandardoccupancypriceperstandardoccupancyinput-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PricesLoadInput.",(0,t.jsx)("b",{children:"pricePerStandardOccupancy"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/api/types/inputs/price-per-standard-occupancy-input",children:(0,t.jsx)(r.code,{children:"PricePerStandardOccupancyInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(r.p,{children:"Price per standard occupancy. See PricePerStandardOccupancy."}),"\n",(0,t.jsxs)(r.h4,{id:"pricesloadinputpricesperoccupancypricesperoccupancyinput-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PricesLoadInput.",(0,t.jsx)("b",{children:"pricesPerOccupancy"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/api/types/inputs/prices-per-occupancy-input",children:(0,t.jsx)(r.code,{children:"PricesPerOccupancyInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(r.p,{children:"Prices per occupancy. See PricesPerOccupancy."}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/types/inputs/rate-price-load-input",children:(0,t.jsx)(r.code,{children:"RatePriceLoadInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},21020:(e,r,c)=>{var n=c(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,c){var n,i={},d=null,o=null;for(n in void 0!==c&&(d=""+c),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(o=r.ref),r)a.call(r,n)&&!p.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:d,ref:o,props:i,_owner:s.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},74848:(e,r,c)=>{e.exports=c(21020)},28453:(e,r,c)=>{c.d(r,{R:()=>a,x:()=>s});var n=c(96540);const t={},i=n.createContext(t);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);