/*! For license information please see feec1aca.f2d9f677.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16062],{97592:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>l,Bullet:()=>o,Details:()=>y,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>d,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"types/inputs/price-per-standard-occupancy-input","title":"PricePerStandardOccupancyInput","description":"Represents a price per standard occupancy.","source":"@site/api/types/inputs/price-per-standard-occupancy-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/price-per-standard-occupancy-input","permalink":"/api/types/inputs/price-per-standard-occupancy-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"price-per-standard-occupancy-input","title":"PricePerStandardOccupancyInput"},"sidebar":"schemaSidebar","previous":{"title":"PricePerRoomInput","permalink":"/api/types/inputs/price-per-room-input"},"next":{"title":"PriceUnderStandardOccupancyInput","permalink":"/api/types/inputs/price-under-standard-occupancy-input"}}');var c=a(74848),r=a(28453),s=a(96540);const d={id:"price-per-standard-occupancy-input",title:"PricePerStandardOccupancyInput"},i=void 0,p={},o=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),l=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:e.class,children:e.text})}),y=({dataOpen:e,dataClose:n,children:a,startOpen:t=!1})=>{const[r,d]=(0,s.useState)(t);return(0,c.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PricePerStandardOccupancyInput.<b>amount</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"priceperstandardoccupancyinputamountfloat--",level:4},{value:'<code>PricePerStandardOccupancyInput.<b>pricesUnderStandardOccupancy</b></code><Bullet></Bullet><code>[PriceUnderStandardOccupancyInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"priceperstandardoccupancyinputpricesunderstandardoccupancypriceunderstandardoccupancyinput--",level:4},{value:'<code>PricePerStandardOccupancyInput.<b>additionalGuestsSupplements</b></code><Bullet></Bullet><code>AdditionalGuestsSupplementsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"priceperstandardoccupancyinputadditionalguestssupplementsadditionalguestssupplementsinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Represents a price per standard occupancy."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"input PricePerStandardOccupancyInput {\n  amount: Float!\n  pricesUnderStandardOccupancy: [PriceUnderStandardOccupancyInput]\n  additionalGuestsSupplements: AdditionalGuestsSupplementsInput\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"priceperstandardoccupancyinputamountfloat--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PricePerStandardOccupancyInput.",(0,c.jsx)("b",{children:"amount"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(n.a,{href:"/api/types/scalars/float",children:(0,c.jsx)(n.code,{children:"Float!"})})," ",(0,c.jsx)(l,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(l,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"Amount associated with the standard occupancy of the room. This is the price for the standard guests."}),"\n",(0,c.jsxs)(n.h4,{id:"priceperstandardoccupancyinputpricesunderstandardoccupancypriceunderstandardoccupancyinput--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PricePerStandardOccupancyInput.",(0,c.jsx)("b",{children:"pricesUnderStandardOccupancy"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(n.a,{href:"/api/types/inputs/price-under-standard-occupancy-input",children:(0,c.jsx)(n.code,{children:"[PriceUnderStandardOccupancyInput]"})})," ",(0,c.jsx)(l,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(l,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsx)(n.p,{children:"List of prices for passengers under the standard occupancy. See PriceUnderStandardOccupancy."}),"\n",(0,c.jsxs)(n.h4,{id:"priceperstandardoccupancyinputadditionalguestssupplementsadditionalguestssupplementsinput-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PricePerStandardOccupancyInput.",(0,c.jsx)("b",{children:"additionalGuestsSupplements"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(n.a,{href:"/api/types/inputs/additional-guests-supplements-input",children:(0,c.jsx)(n.code,{children:"AdditionalGuestsSupplementsInput"})})," ",(0,c.jsx)(l,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsx)(n.p,{children:"Price supplements for additional passengers. See AdditionalGuestsSupplements."}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/api/types/inputs/prices-load-input",children:(0,c.jsx)(n.code,{children:"PricesLoadInput"})})," ",(0,c.jsx)(l,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},21020:(e,n,a)=>{var t=a(96540),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,a){var t,r={},p=null,o=null;for(t in void 0!==a&&(p=""+a),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(o=n.ref),n)s.call(n,t)&&!i.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:c,type:e,key:p,ref:o,props:r,_owner:d.current}}n.Fragment=r,n.jsx=p,n.jsxs=p},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>d});var t=a(96540);const c={},r=t.createContext(c);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);