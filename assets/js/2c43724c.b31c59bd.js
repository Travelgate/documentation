/*! For license information please see 2c43724c.b31c59bd.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38449],{75666:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>y});var i=n(74848),r=n(28453),s=n(96540);const a={id:"inventory-localities-search-filter-input",title:"InventoryLocalitiesSearchFilterInput"},l=void 0,o={id:"types/inputs/inventory-localities-search-filter-input",title:"InventoryLocalitiesSearchFilterInput",description:"Localities filter input.",source:"@site/api/types/inputs/inventory-localities-search-filter-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/inventory-localities-search-filter-input",permalink:"/api/types/inputs/inventory-localities-search-filter-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-localities-search-filter-input",title:"InventoryLocalitiesSearchFilterInput"},sidebar:"schemaSidebar",previous:{title:"InventoryLocalitiesFilterInput",permalink:"/api/types/inputs/inventory-localities-filter-input"},next:{title:"InventoryMarketsInput",permalink:"/api/types/inputs/inventory-markets-input"}},c={},d=()=>{const e={span:"span",...(0,r.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[o,c]=(0,s.useState)(a);return(0,i.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryLocalitiesSearchFilterInput.<b>countryCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventorylocalitiessearchfilterinputcountrycodestring-",level:4},{value:'<code>InventoryLocalitiesSearchFilterInput.<b>localityName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventorylocalitiessearchfilterinputlocalitynamestring-",level:4}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Localities filter input."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input InventoryLocalitiesSearchFilterInput {\n  countryCode: String\n  localityName: String\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"inventorylocalitiessearchfilterinputcountrycodestring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryLocalitiesSearchFilterInput.",(0,i.jsx)("b",{children:"countryCode"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.p,{children:["Country code of the localities to retrieve. ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",children:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"})]}),"\n",(0,i.jsxs)(t.h4,{id:"inventorylocalitiessearchfilterinputlocalitynamestring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryLocalitiesSearchFilterInput.",(0,i.jsx)("b",{children:"localityName"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Locality name"})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var i=n(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,s={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!o.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);