/*! For license information please see 58b3e081.591a3681.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72039],{5370:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>h,Bullet:()=>l,Details:()=>y,SpecifiedBy:()=>f,assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"types/objects/ferry-search-edge","title":"FerrySearchEdge","description":"An edge in a connection.","source":"@site/api/types/objects/ferry-search-edge.mdx","sourceDirName":"types/objects","slug":"/types/objects/ferry-search-edge","permalink":"/api/types/objects/ferry-search-edge","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"ferry-search-edge","title":"FerrySearchEdge"},"sidebar":"schemaSidebar","previous":{"title":"FerrySearchConnection","permalink":"/api/types/objects/ferry-search-connection"},"next":{"title":"FerrySegment","permalink":"/api/types/objects/ferry-segment"}}');var t=n(74848),c=n(28453),a=n(96540);const o={id:"ferry-search-edge",title:"FerrySearchEdge"},d=void 0,i={},l=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),f=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),y=({dataOpen:e,dataClose:r,children:n,startOpen:s=!1})=>{const[c,o]=(0,a.useState)(s);return(0,t.jsxs)("details",{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>FerrySearchEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ferrysearchedgecursorstring--",level:4},{value:'<code>FerrySearchEdge.<b>node</b></code><Bullet></Bullet><code>FerryOffer</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysearchedgenodeferryoffer-",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"An edge in a connection."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type FerrySearchEdge {\n  cursor: String!\n  node: FerryOffer\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysearchedgecursorstring--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySearchEdge.",(0,t.jsx)("b",{children:"cursor"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(r.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"A cursor for use in pagination."}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysearchedgenodeferryoffer-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySearchEdge.",(0,t.jsx)("b",{children:"node"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/types/objects/ferry-offer",children:(0,t.jsx)(r.code,{children:"FerryOffer"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(r.p,{children:"The item at the end of the edge."}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/types/objects/ferry-search-connection",children:(0,t.jsx)(r.code,{children:"FerrySearchConnection"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var s,c={},i=null,l=null;for(s in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,s)&&!d.hasOwnProperty(s)&&(c[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===c[s]&&(c[s]=r[s]);return{$$typeof:t,type:e,key:i,ref:l,props:c,_owner:o.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var s=n(96540);const t={},c=s.createContext(t);function a(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);