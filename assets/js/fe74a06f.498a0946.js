/*! For license information please see fe74a06f.498a0946.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89542],{8883:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"types/inputs/arrival-input","title":"ArrivalInput","description":"Represents the arrival restrictions for a product.","source":"@site/api/types/inputs/arrival-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/arrival-input","permalink":"/api/types/inputs/arrival-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"arrival-input","title":"ArrivalInput"},"sidebar":"schemaSidebar","previous":{"title":"ApplicableWeekdaysInput","permalink":"/api/types/inputs/applicable-weekdays-input"},"next":{"title":"AssetCreateManyAsSubEntityInput","permalink":"/api/types/inputs/asset-create-many-as-sub-entity-input"}}');var i=n(74848),a=n(28453),s=n(96540);const l={id:"arrival-input",title:"ArrivalInput"},o=void 0,c={},d=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const[a,l]=(0,s.useState)(r);return(0,i.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ArrivalInput.<b>minimum</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"arrivalinputminimumint-",level:4},{value:'<code>ArrivalInput.<b>maximum</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"arrivalinputmaximumint-",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Represents the arrival restrictions for a product."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input ArrivalInput {\n  minimum: Int\n  maximum: Int\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"arrivalinputminimumint-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ArrivalInput.",(0,i.jsx)("b",{children:"minimum"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,i.jsx)(t.code,{children:"Int"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Minimum length of the arrival period."}),"\n",(0,i.jsxs)(t.h4,{id:"arrivalinputmaximumint-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ArrivalInput.",(0,i.jsx)("b",{children:"maximum"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,i.jsx)(t.code,{children:"Int"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Maximum length of the arrival period."}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/inputs/length-of-stay-input",children:(0,i.jsx)(t.code,{children:"LengthOfStayInput"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var r=n(96540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!o.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);