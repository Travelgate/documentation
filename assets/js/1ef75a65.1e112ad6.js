/*! For license information please see 1ef75a65.1e112ad6.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69001],{59605:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>f});var r=t(74848),a=t(28453),s=t(96540);const i={id:"range-filter",title:"RangeFilter"},l=void 0,d={id:"types/inputs/range-filter",title:"RangeFilter",description:"No description",source:"@site/api/types/inputs/range-filter.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/range-filter",permalink:"/api/types/inputs/range-filter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"range-filter",title:"RangeFilter"},sidebar:"schemaSidebar",previous:{title:"QuoteWhereInput",permalink:"/api/types/inputs/quote-where-input"},next:{title:"RateAvailLoadInput",permalink:"/api/types/inputs/rate-avail-load-input"}},o={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,a.R)()},[d,o]=(0,s.useState)(i);return(0,r.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>RangeFilter.<b>term</b></code><Bullet></Bullet><code>TermType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rangefiltertermtermtype--",level:4},{value:'<code>RangeFilter.<b>value</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rangefiltervalueint--",level:4},{value:'<code>RangeFilter.<b>condition</b></code><Bullet></Bullet><code>ConditionType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rangefilterconditionconditiontype--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input RangeFilter {\n  term: TermType!\n  value: Int!\n  condition: ConditionType!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"rangefiltertermtermtype--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["RangeFilter.",(0,r.jsx)("b",{children:"term"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/enums/term-type",children:(0,r.jsx)(n.code,{children:"TermType!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(n.h4,{id:"rangefiltervalueint--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["RangeFilter.",(0,r.jsx)("b",{children:"value"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(n.code,{children:"Int!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.h4,{id:"rangefilterconditionconditiontype--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["RangeFilter.",(0,r.jsx)("b",{children:"condition"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/enums/condition-type",children:(0,r.jsx)(n.code,{children:"ConditionType!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/types/inputs/logging-legacy-filter-input",children:(0,r.jsx)(n.code,{children:"LoggingLegacyFilterInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var r=t(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,s={},o=null,c=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:o,ref:c,props:s,_owner:l.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);