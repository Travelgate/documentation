/*! For license information please see bbca4bfa.1bb077ae.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83546],{70277:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>b,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var a=t(74848),o=t(28453),s=t(96540);const c={id:"connection-data",title:"ConnectionData"},i=void 0,r={id:"types/objects/connection-data",title:"ConnectionData",description:"Extended Connection information",source:"@site/api/types/objects/connection-data.mdx",sourceDirName:"types/objects",slug:"/types/objects/connection-data",permalink:"/api/types/objects/connection-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"connection-data",title:"ConnectionData"},sidebar:"schemaSidebar",previous:{title:"ConnectionConnection",permalink:"/api/types/objects/connection-connection"},next:{title:"ConnectionEdge",permalink:"/api/types/objects/connection-edge"}},d={},l=()=>{const e={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,o.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const n={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,o.R)()},[r,d]=(0,s.useState)(c);return(0,a.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>ConnectionData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectiondatacodeid--",level:4},{value:'<code>ConnectionData.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectiondataisactiveboolean--",level:4},{value:'<code>ConnectionData.<b>seller</b></code><Bullet></Bullet><code>Organizations</code> <Badge class="badge badge--secondary"></Badge>',id:"connectiondatasellerorganizations-",level:4},{value:'<code>ConnectionData.<b>buyer</b></code><Bullet></Bullet><code>Organizations</code> <Badge class="badge badge--secondary"></Badge>',id:"connectiondatabuyerorganizations-",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Extended Connection information"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type ConnectionData {\n  code: ID!\n  isActive: Boolean!\n  seller: Organizations\n  buyer: Organizations\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"connectiondatacodeid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionData.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Code unique identifier of a Connection. Format: integer."}),"\n",(0,a.jsxs)(n.h4,{id:"connectiondataisactiveboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionData.",(0,a.jsx)("b",{children:"isActive"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.h4,{id:"connectiondatasellerorganizations-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionData.",(0,a.jsx)("b",{children:"seller"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/types/objects/organizations",children:(0,a.jsx)(n.code,{children:"Organizations"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.h4,{id:"connectiondatabuyerorganizations-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionData.",(0,a.jsx)("b",{children:"buyer"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/types/objects/organizations",children:(0,a.jsx)(n.code,{children:"Organizations"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/types/objects/connection",children:(0,a.jsx)(n.code,{children:"Connection"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},21020:(e,n,t)=>{var a=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var a,s={},d=null,l=null;for(a in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,a)&&!r.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:o,type:e,key:d,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var a=t(96540);const o={},s=a.createContext(o);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);