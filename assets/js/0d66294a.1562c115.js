/*! For license information please see 0d66294a.1562c115.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19053],{301:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>y});var a=r(74848),n=r(28453),s=r(96540);const c={id:"category-create-input",title:"CategoryCreateInput"},o=void 0,i={id:"types/inputs/category-create-input",title:"CategoryCreateInput",description:"No description",source:"@site/api/types/inputs/category-create-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/category-create-input",permalink:"/api/types/inputs/category-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"category-create-input",title:"CategoryCreateInput"},sidebar:"schemaSidebar",previous:{title:"CancelPolicyInput",permalink:"/api/types/inputs/cancel-policy-input"},next:{title:"CategoryUpdateInput",permalink:"/api/types/inputs/category-update-input"}},d={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:r,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,n.R)()},[i,d]=(0,s.useState)(c);return(0,a.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&r]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>CategoryCreateInput.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycreateinputcodeid--",level:4},{value:'<code>CategoryCreateInput.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"categorycreateinputdescriptionstring-",level:4},{value:'<code>CategoryCreateInput.<b>subCategory</b></code><Bullet></Bullet><code>[SubCategoryCreateInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycreateinputsubcategorysubcategorycreateinput--",level:4}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input CategoryCreateInput {\n  code: ID!\n  description: String\n  subCategory: [SubCategoryCreateInput!]!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"categorycreateinputcodeid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCreateInput.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.h4,{id:"categorycreateinputdescriptionstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCreateInput.",(0,a.jsx)("b",{children:"description"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.h4,{id:"categorycreateinputsubcategorysubcategorycreateinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCreateInput.",(0,a.jsx)("b",{children:"subCategory"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/sub-category-create-input",children:(0,a.jsx)(t.code,{children:"[SubCategoryCreateInput!]!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,t,r)=>{var a=r(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var a,s={},d=null,l=null;for(a in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,a)&&!i.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:d,ref:l,props:s,_owner:o.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function c(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);