/*! For license information please see 491354d3.2bbae3b4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81870],{87227:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>p,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"types/objects/macro-permission-edge","title":"MacroPermissionEdge","description":"No description","source":"@site/api/types/objects/macro-permission-edge.mdx","sourceDirName":"types/objects","slug":"/types/objects/macro-permission-edge","permalink":"/api/types/objects/macro-permission-edge","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"macro-permission-edge","title":"MacroPermissionEdge"},"sidebar":"schemaSidebar","previous":{"title":"MacroPermissionData","permalink":"/api/types/objects/macro-permission-data"},"next":{"title":"MacroPermission","permalink":"/api/types/objects/macro-permission"}}');var o=r(74848),i=r(28453),t=r(96540);const a={id:"macro-permission-edge",title:"MacroPermissionEdge"},c=void 0,d={},l=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),m=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:s,children:r,startOpen:n=!1})=>{const[i,a]=(0,t.useState)(n);return(0,o.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&r]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>MacroPermissionEdge.<b>node</b></code><Bullet></Bullet><code>MacroPermission</code> <Badge class="badge badge--secondary"></Badge>',id:"macropermissionedgenodemacropermission-",level:4},{value:'<code>MacroPermissionEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"macropermissionedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"No description"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-graphql",children:"type MacroPermissionEdge {\n  node: MacroPermission\n  cursor: String!\n}\n"})}),"\n",(0,o.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(s.h4,{id:"macropermissionedgenodemacropermission-",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["MacroPermissionEdge.",(0,o.jsx)("b",{children:"node"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/macro-permission",children:(0,o.jsx)(s.code,{children:"MacroPermission"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.h4,{id:"macropermissionedgecursorstring--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["MacroPermissionEdge.",(0,o.jsx)("b",{children:"cursor"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/api/types/objects/macro-permissions-connection",children:(0,o.jsx)(s.code,{children:"MacroPermissionsConnection"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,s,r)=>{var n=r(96540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,r){var n,i={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)t.call(s,n)&&!c.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:d,ref:l,props:i,_owner:a.current}}s.Fragment=i,s.jsx=d,s.jsxs=d},74848:(e,s,r)=>{e.exports=r(21020)},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>a});var n=r(96540);const o={},i=n.createContext(o);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);