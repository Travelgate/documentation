/*! For license information please see 378609ba.aa431de0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77813],{55790:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"types/objects/pet","title":"Pet","description":"No description","source":"@site/api/types/objects/pet.mdx","sourceDirName":"types/objects","slug":"/types/objects/pet","permalink":"/api/types/objects/pet","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"pet","title":"Pet"},"sidebar":"schemaSidebar","previous":{"title":"Permission","permalink":"/api/types/objects/permission"},"next":{"title":"Place","permalink":"/api/types/objects/place"}}');var r=n(74848),a=n(28453),l=n(96540);const o={id:"pet",title:"Pet"},i=void 0,c={},d=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const[a,o]=(0,l.useState)(s);return(0,r.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>Pet.<b>index</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"petindexint--",level:4},{value:'<code>Pet.<b>weight</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"petweightint--",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"type Pet {\n  index: Int!\n  weight: Int!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"petindexint--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Pet.",(0,r.jsx)("b",{children:"index"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(t.code,{children:"Int!"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.h4,{id:"petweightint--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Pet.",(0,r.jsx)("b",{children:"weight"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(t.code,{children:"Int!"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"Pet weight in kilograms."}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/objects/traveller-book",children:(0,r.jsx)(t.code,{children:"TravellerBook"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,a={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,s)&&!i.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);