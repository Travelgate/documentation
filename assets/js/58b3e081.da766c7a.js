/*! For license information please see 58b3e081.da766c7a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72039],{27207:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>f,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var s=n(74848),t=n(28453),c=n(96540);const a={id:"ferry-search-edge",title:"FerrySearchEdge"},o=void 0,d={id:"types/objects/ferry-search-edge",title:"FerrySearchEdge",description:"An edge in a connection.",source:"@site/api/types/objects/ferry-search-edge.mdx",sourceDirName:"types/objects",slug:"/types/objects/ferry-search-edge",permalink:"/api/types/objects/ferry-search-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ferry-search-edge",title:"FerrySearchEdge"},sidebar:"schemaSidebar",previous:{title:"FerrySearchConnection",permalink:"/api/types/objects/ferry-search-connection"},next:{title:"FerrySegment",permalink:"/api/types/objects/ferry-segment"}},l={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const r={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const r={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:r,children:n,startOpen:a=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[d,l]=(0,c.useState)(a);return(0,s.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>FerrySearchEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ferrysearchedgecursorstring--",level:4},{value:'<code>FerrySearchEdge.<b>node</b></code><Bullet></Bullet><code>FerryOffer</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysearchedgenodeferryoffer-",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"An edge in a connection."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"type FerrySearchEdge {\n  cursor: String!\n  node: FerryOffer\n}\n"})}),"\n",(0,s.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(r.h4,{id:"ferrysearchedgecursorstring--",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySearchEdge.",(0,s.jsx)("b",{children:"cursor"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(r.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(r.code,{children:"String!"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"A cursor for use in pagination."}),"\n"]}),"\n",(0,s.jsxs)(r.h4,{id:"ferrysearchedgenodeferryoffer-",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySearchEdge.",(0,s.jsx)("b",{children:"node"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(r.a,{href:"/api/types/objects/ferry-offer",children:(0,s.jsx)(r.code,{children:"FerryOffer"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"The item at the end of the edge."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/types/objects/ferry-search-connection",children:(0,s.jsx)(r.code,{children:"FerrySearchConnection"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,c={},l=null,i=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,s)&&!d.hasOwnProperty(s)&&(c[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===c[s]&&(c[s]=r[s]);return{$$typeof:t,type:e,key:l,ref:i,props:c,_owner:o.current}}r.Fragment=c,r.jsx=l,r.jsxs=l},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var s=n(96540);const t={},c=s.createContext(t);function a(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);