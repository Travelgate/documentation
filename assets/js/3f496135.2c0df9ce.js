/*! For license information please see 3f496135.2c0df9ce.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18046],{34049:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"types/inputs/vehicle-book-input","title":"VehicleBookInput","description":"No description","source":"@site/api/types/inputs/vehicle-book-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/vehicle-book-input","permalink":"/api/types/inputs/vehicle-book-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"vehicle-book-input","title":"VehicleBookInput"},"sidebar":"schemaSidebar","previous":{"title":"VehicleAttributesInput","permalink":"/api/types/inputs/vehicle-attributes-input"},"next":{"title":"VehicleInput","permalink":"/api/types/inputs/vehicle-input"}}');var s=n(74848),r=n(28453),o=n(96540);const l={id:"vehicle-book-input",title:"VehicleBookInput"},a=void 0,c={},d=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const[r,l]=(0,o.useState)(i);return(0,s.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>VehicleBookInput.<b>index</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"vehiclebookinputindexint--",level:4},{value:'<code>VehicleBookInput.<b>registration</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"vehiclebookinputregistrationstring-",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input VehicleBookInput {\n  index: Int!\n  registration: String\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"vehiclebookinputindexint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VehicleBookInput.",(0,s.jsx)("b",{children:"index"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(t.code,{children:"Int!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"Used to match with requested vehicles in search."}),"\n",(0,s.jsxs)(t.h4,{id:"vehiclebookinputregistrationstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VehicleBookInput.",(0,s.jsx)("b",{children:"registration"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"Vehicle identification."}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/inputs/traveller-book-input",children:(0,s.jsx)(t.code,{children:"TravellerBookInput"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var i=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,r={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,i)&&!a.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);