/*! For license information please see 83b025cc.b559959f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13067],{92733:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var s=o(74848),t=o(28453),r=o(96540);const c={id:"resource-connection",title:"ResourceConnection"},a=void 0,d={id:"types/objects/resource-connection",title:"ResourceConnection",description:"No description",source:"@site/api/types/objects/resource-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/resource-connection",permalink:"/api/types/objects/resource-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"resource-connection",title:"ResourceConnection"},sidebar:"schemaSidebar",previous:{title:"Resort",permalink:"/api/types/objects/resort"},next:{title:"ResourceData",permalink:"/api/types/objects/resource-data"}},i={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:o,startOpen:c=!1})=>{const a={details:"details",summary:"summary",...(0,t.R)()},[d,i]=(0,r.useState)(c);return(0,s.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(a.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&o]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>ResourceConnection.<b>edges</b></code><Bullet></Bullet><code>[ResourceEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"resourceconnectionedgesresourceedge--",level:4},{value:'<code>ResourceConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"resourceconnectionpageinfopageinfo--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type ResourceConnection {\n  edges: [ResourceEdge]\n  pageInfo: PageInfo!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"resourceconnectionedgesresourceedge--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ResourceConnection.",(0,s.jsx)("b",{children:"edges"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/resource-edge",children:(0,s.jsx)(n.code,{children:"[ResourceEdge]"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.h4,{id:"resourceconnectionpageinfopageinfo--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ResourceConnection.",(0,s.jsx)("b",{children:"pageInfo"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,s.jsx)(n.code,{children:"PageInfo!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/types/objects/role-data",children:(0,s.jsx)(n.code,{children:"RoleData"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,n,o)=>{var s=o(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,o){var s,r={},i=null,l=null;for(s in void 0!==o&&(i=""+o),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,s)&&!d.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:t,type:e,key:i,ref:l,props:r,_owner:a.current}}n.Fragment=r,n.jsx=i,n.jsxs=i},74848:(e,n,o)=>{e.exports=o(21020)},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>a});var s=o(96540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);