/*! For license information please see 3b684fea.a9a87dd9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38406],{30044:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>g,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>n,metadata:()=>d,toc:()=>j});var o=s(74848),t=s(28453),c=s(96540);const n={id:"package-room",title:"PackageRoom"},r=void 0,d={id:"types/objects/package-room",title:"PackageRoom",description:"No description",source:"@site/api/types/objects/package-room.mdx",sourceDirName:"types/objects",slug:"/types/objects/package-room",permalink:"/api/types/objects/package-room",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"package-room",title:"PackageRoom"},sidebar:"schemaSidebar",previous:{title:"PackageQuery",permalink:"/api/types/objects/package-query"},next:{title:"PackageSupplier",permalink:"/api/types/objects/package-supplier"}},l={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,t.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:s,startOpen:n=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[d,l]=(0,c.useState)(n);return(0,o.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&s]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>PackageRoom.<b>accomodationRefs</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packageroomaccomodationrefsstring--",level:4},{value:'<code>PackageRoom.<b>paxes</b></code><Bullet></Bullet><code>[PackagePax]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packageroompaxespackagepax--",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"No description"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-graphql",children:"type PackageRoom {\n  accomodationRefs: [String]\n  paxes: [PackagePax]\n}\n"})}),"\n",(0,o.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(a.h4,{id:"packageroomaccomodationrefsstring--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageRoom.",(0,o.jsx)("b",{children:"accomodationRefs"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(a.code,{children:"[String]"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"List of possible accomodations for this option"}),"\n"]}),"\n",(0,o.jsxs)(a.h4,{id:"packageroompaxespackagepax--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageRoom.",(0,o.jsx)("b",{children:"paxes"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/types/objects/package-pax",children:(0,o.jsx)(a.code,{children:"[PackagePax]"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"List of passengers for the room"}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/api/types/objects/booking-payload",children:(0,o.jsx)(a.code,{children:"BookingPayload"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/types/objects/book-payload",children:(0,o.jsx)(a.code,{children:"BookPayload"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/types/objects/quote-payload",children:(0,o.jsx)(a.code,{children:"QuotePayload"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/types/objects/rate",children:(0,o.jsx)(a.code,{children:"Rate"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},21020:(e,a,s)=>{var o=s(96540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,s){var o,c={},l=null,i=null;for(o in void 0!==s&&(l=""+s),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)n.call(a,o)&&!d.hasOwnProperty(o)&&(c[o]=a[o]);if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:t,type:e,key:l,ref:i,props:c,_owner:r.current}}a.Fragment=c,a.jsx=l,a.jsxs=l},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>n,x:()=>r});var o=s(96540);const t={},c=o.createContext(t);function n(e){const a=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(c.Provider,{value:a},e.children)}}}]);