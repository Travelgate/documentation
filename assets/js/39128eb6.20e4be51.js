/*! For license information please see 39128eb6.20e4be51.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39507],{78293:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>p,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var t=r(74848),s=r(28453),i=r(96540);const o={id:"inventory",title:"inventory"},a=void 0,c={id:"api/queries/inventory",title:"inventory",description:"Query entity for inventory queries.",source:"@site/api/api/queries/inventory.mdx",sourceDirName:"api/queries",slug:"/api/queries/inventory",permalink:"/api/api/queries/inventory",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory",title:"inventory"},sidebar:"schemaSidebar",previous:{title:"insights",permalink:"/api/api/queries/insights"},next:{title:"logging",permalink:"/api/api/queries/logging"}},l={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:n,children:r,startOpen:o=!1})=>{const a={details:"details",summary:"summary",...(0,s.R)()},[c,l]=(0,i.useState)(o);return(0,t.jsxs)(a.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&r]})},f=[{value:"Type",id:"type",level:3},{value:'<code>InventoryQuery</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryquery-",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Query entity for inventory queries."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"inventory: InventoryQuery\n"})}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.h4,{id:"inventoryquery-",children:[(0,t.jsx)(n.a,{href:"/api/types/objects/inventory-query",children:(0,t.jsx)(n.code,{children:"InventoryQuery"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The Query class represents the query for the GraphQL server."}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,i={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);