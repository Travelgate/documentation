/*! For license information please see ef194d68.84602508.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44258],{16811:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"types/inputs/resort-input","title":"ResortInput","description":"No description","source":"@site/api/types/inputs/resort-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/resort-input","permalink":"/api/types/inputs/resort-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"resort-input","title":"ResortInput"},"sidebar":"schemaSidebar","previous":{"title":"RelayInput","permalink":"/api/types/inputs/relay-input"},"next":{"title":"RestrictionsDerivedRateLoadInput","permalink":"/api/types/inputs/restrictions-derived-rate-load-input"}}');var s=n(74848),i=n(28453),o=n(96540);const a={id:"resort-input",title:"ResortInput"},d=void 0,l={},c=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const[i,a]=(0,o.useState)(r);return(0,s.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ResortInput.<b>code</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"resortinputcodestring-",level:4},{value:'<code>ResortInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"resortinputnamestring-",level:4},{value:'<code>ResortInput.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"resortinputdescriptionstring-",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input ResortInput {\n  code: String\n  name: String\n  description: String\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"resortinputcodestring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ResortInput.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.h4,{id:"resortinputnamestring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ResortInput.",(0,s.jsx)("b",{children:"name"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.h4,{id:"resortinputdescriptionstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ResortInput.",(0,s.jsx)("b",{children:"description"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/inputs/supplement-input",children:(0,s.jsx)(t.code,{children:"SupplementInput"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);