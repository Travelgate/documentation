/*! For license information please see 16d4fa69.42243bfc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23054],{33676:(e,r,s)=>{s.r(r),s.d(r,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>a,contentTitle:()=>o,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=s(74848),t=s(28453),l=s(96540);const i={id:"supplier-edge",title:"SupplierEdge"},o=void 0,d={id:"types/objects/supplier-edge",title:"SupplierEdge",description:"Supplier connection edge",source:"@site/api/types/objects/supplier-edge.mdx",sourceDirName:"types/objects",slug:"/types/objects/supplier-edge",permalink:"/api/types/objects/supplier-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"supplier-edge",title:"SupplierEdge"},sidebar:"schemaSidebar",previous:{title:"SupplierData",permalink:"/api/types/objects/supplier-data"},next:{title:"Supplier",permalink:"/api/types/objects/supplier"}},a={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:r,children:s,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[d,a]=(0,l.useState)(i);return(0,n.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>SupplierEdge.<b>node</b></code><Bullet></Bullet><code>Supplier</code> <Badge class="badge badge--secondary"></Badge>',id:"supplieredgenodesupplier-",level:4},{value:'<code>SupplierEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplieredgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Supplier connection edge"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type SupplierEdge {\n  node: Supplier\n  cursor: String!\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"supplieredgenodesupplier-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierEdge.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(r.a,{href:"/api/types/objects/supplier",children:(0,n.jsx)(r.code,{children:"Supplier"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Supplier item"}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"supplieredgecursorstring--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierEdge.",(0,n.jsx)("b",{children:"cursor"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(r.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(r.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Cursor to the next item"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/types/objects/supplier-connection",children:(0,n.jsx)(r.code,{children:"SupplierConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},21020:(e,r,s)=>{var n=s(96540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,s){var n,l={},a=null,c=null;for(n in void 0!==s&&(a=""+s),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!d.hasOwnProperty(n)&&(l[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===l[n]&&(l[n]=r[n]);return{$$typeof:t,type:e,key:a,ref:c,props:l,_owner:o.current}}r.Fragment=l,r.jsx=a,r.jsxs=a},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>o});var n=s(96540);const t={},l=n.createContext(t);function i(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);