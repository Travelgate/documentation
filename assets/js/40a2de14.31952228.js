/*! For license information please see 40a2de14.31952228.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40548],{88655:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var r=n(74848),s=n(28453),o=n(96540);const i={id:"inventory-hotels-master-search-filter-input",title:"InventoryHotelsMasterSearchFilterInput"},a=void 0,l={id:"types/inputs/inventory-hotels-master-search-filter-input",title:"InventoryHotelsMasterSearchFilterInput",description:"Hotel master filter input.",source:"@site/api/types/inputs/inventory-hotels-master-search-filter-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/inventory-hotels-master-search-filter-input",permalink:"/api/types/inputs/inventory-hotels-master-search-filter-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-hotels-master-search-filter-input",title:"InventoryHotelsMasterSearchFilterInput"},sidebar:"schemaSidebar",previous:{title:"InventoryHotelSetupFilterInput",permalink:"/api/types/inputs/inventory-hotel-setup-filter-input"},next:{title:"InventoryHotelsSetupCreateInput",permalink:"/api/types/inputs/inventory-hotels-setup-create-input"}},c={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const a={details:"details",summary:"summary",...(0,s.R)()},[l,c]=(0,o.useState)(i);return(0,r.jsxs)(a.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryHotelsMasterSearchFilterInput.<b>geoCoordinates</b></code><Bullet></Bullet><code>GeoFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelsmastersearchfilterinputgeocoordinatesgeofiltersinput-",level:4},{value:'<code>InventoryHotelsMasterSearchFilterInput.<b>hotelName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelsmastersearchfilterinputhotelnamestring-",level:4}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Hotel master filter input."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input InventoryHotelsMasterSearchFilterInput {\n  geoCoordinates: GeoFiltersInput\n  hotelName: String\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryhotelsmastersearchfilterinputgeocoordinatesgeofiltersinput-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelsMasterSearchFilterInput.",(0,r.jsx)("b",{children:"geoCoordinates"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/geo-filters-input",children:(0,r.jsx)(t.code,{children:"GeoFiltersInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsx)(t.p,{children:"The geographical coordinates to use in the search."}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryhotelsmastersearchfilterinputhotelnamestring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelsMasterSearchFilterInput.",(0,r.jsx)("b",{children:"hotelName"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"The name of the hotel to search for."})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);