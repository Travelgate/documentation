/*! For license information please see 5f4a6047.cc313d67.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4654],{36315:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>y});var r=n(74848),s=n(28453),o=n(96540);const l={id:"inventory-hotel-master-filter-input",title:"InventoryHotelMasterFilterInput"},i=void 0,a={id:"types/inputs/inventory-hotel-master-filter-input",title:"InventoryHotelMasterFilterInput",description:"Hotel master filter input.",source:"@site/api/types/inputs/inventory-hotel-master-filter-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/inventory-hotel-master-filter-input",permalink:"/api/types/inputs/inventory-hotel-master-filter-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-hotel-master-filter-input",title:"InventoryHotelMasterFilterInput"},sidebar:"schemaSidebar",previous:{title:"InventoryHotelMasterCreateInput",permalink:"/api/types/inputs/inventory-hotel-master-create-input"},next:{title:"InventoryHotelSetupDeleteInput",permalink:"/api/types/inputs/inventory-hotel-setup-delete-input"}},d={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[a,d]=(0,o.useState)(l);return(0,r.jsxs)(i.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryHotelMasterFilterInput.<b>hotelCodes</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterfilterinputhotelcodesstring--",level:4},{value:'<code>InventoryHotelMasterFilterInput.<b>countryCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterfilterinputcountrycodestring-",level:4},{value:'<code>InventoryHotelMasterFilterInput.<b>localityId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterfilterinputlocalityidint-",level:4},{value:'<code>InventoryHotelMasterFilterInput.<b>contextCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterfilterinputcontextcodestring-",level:4}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Hotel master filter input."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input InventoryHotelMasterFilterInput {\n  hotelCodes: [String]\n  countryCode: String\n  localityId: Int\n  contextCode: String\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryhotelmasterfilterinputhotelcodesstring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMasterFilterInput.",(0,r.jsx)("b",{children:"hotelCodes"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"[String]"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"Hotel codes of the hotels to retrieve."}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryhotelmasterfilterinputcountrycodestring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMasterFilterInput.",(0,r.jsx)("b",{children:"countryCode"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.p,{children:["Country code for the hotels to retrieve. ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",children:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"})]}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryhotelmasterfilterinputlocalityidint-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMasterFilterInput.",(0,r.jsx)("b",{children:"localityId"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(t.code,{children:"Int"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"Locality Id for the hotels to retrieve. Use query Location to get the available location Ids."}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryhotelmasterfilterinputcontextcodestring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMasterFilterInput.",(0,r.jsx)("b",{children:"contextCode"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"Context code for the hotels."})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(96540);const s={},o=r.createContext(s);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);